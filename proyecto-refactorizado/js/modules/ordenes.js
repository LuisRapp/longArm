// ==================== ÓRDENES DE PRODUCCIÓN ====================
import { showToast, toggleModal, openConfirmModal } from './utils.js';
import { lotTraceData, ordenesProduccion } from '../data/database.js';


export let selectedOrdenId = null;

export function renderOrdenes() {
  const tbody = document.getElementById('ordenesTableBody');
  const search = document.getElementById('searchOrdenes').value.toLowerCase();
  const filtered = ordenesProduccion.filter(function(o) {
    return o.id.toLowerCase().includes(search) || o.fechaInicio.includes(search);
  });

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    document.getElementById('ordenesEmptyState').classList.remove('hidden');
    return;
  }
  document.getElementById('ordenesEmptyState').classList.add('hidden');

  tbody.innerHTML = filtered.map(function(orden) {
    var estadoClass = orden.estado === 'Finalizado' ? 'bg-green-100 text-green-700' :
                      orden.estado === 'En proceso' ? 'bg-amber-100 text-amber-700' :
                      orden.estado === 'Envío' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-600';
    return '<tr class="hover:bg-gray-50 transition-colors cursor-pointer" onclick="selectOrden(\'' + orden.id + '\')">' +
      '<td class="px-6 py-4 font-medium text-text-dark">' + orden.id + '</td>' +
      '<td class="px-6 py-4 text-text-muted">' + orden.fechaInicio + '</td>' +
      '<td class="px-6 py-4 font-medium text-text-dark">' + orden.pesoTotal.toLocaleString() + ' kg</td>' +
      '<td class="px-6 py-4"><span class="px-3 py-1 rounded-full text-xs font-medium ' + estadoClass + '">' + orden.estado + '</span></td>' +
      '<td class="px-6 py-4 text-text-muted">' + orden.lotes.length + ' lote(s)</td>' +
      '<td class="px-6 py-4 text-right">' +
        '<button onclick="event.stopPropagation(); eliminarOrden(\'' + orden.id + '\')" class="text-red-600 hover:text-red-800 transition-colors" title="Eliminar orden"><i class="fa-solid fa-trash"></i></button>' +
      '</td>' +
    '</tr>';
  }).join('');
}

export function filtrarOrdenes() {
  renderOrdenes();
}

export function selectOrden(ordenId) {
  selectedOrdenId = ordenId;
  var orden = ordenesProduccion.find(function(o) { return o.id === ordenId; });
  if (!orden) return;

  document.getElementById('ordenDetailPanel').classList.remove('hidden');
  document.getElementById('detailOrdenId').textContent = 'Orden ' + orden.id;
  document.getElementById('detailOrdenInfo').textContent = 'Fecha: ' + orden.fechaInicio + ' | Peso: ' + orden.pesoTotal.toLocaleString() + ' kg';

  var estadoClass = orden.estado === 'Finalizado' ? 'bg-green-100 text-green-700' :
                    orden.estado === 'En proceso' ? 'bg-amber-100 text-amber-700' :
                    orden.estado === 'Envío' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-600';
  var estadoEl = document.getElementById('detailOrdenEstado');
  estadoEl.className = 'px-3 py-1 rounded-full text-xs font-medium ' + estadoClass;
  estadoEl.textContent = orden.estado;

  var lotesTbody = document.getElementById('ordenLotesTable');
  lotesTbody.innerHTML = orden.lotes.map(function(loteId) {
    var lote = lotTraceData[loteId];
    if (!lote) return '';
    var etapaActual = lote.etapas.find(function(e) { return e.status === 'actual'; });
    var etapaNombre = etapaActual ? etapaActual.nombre : 'Pendiente';
    var todasCompletadas = !etapaActual && lote.etapas.every(function(e) { return e.status === 'completado'; });
    if (todasCompletadas) etapaNombre = 'Finalizado';
    var isDisabled = etapaNombre === 'Finalizado' || etapaNombre === 'Envío';
    return '<tr>' +
      '<td class="px-4 py-2 text-center">' +
        '<input type="checkbox" value="' + loteId + '" class="lote-checkbox w-4 h-4 rounded border-border text-primary focus:ring-primary"' + (isDisabled ? ' disabled' : '') + '>' +
      '</td>' +
      '<td class="px-4 py-2 font-medium">#' + loteId + '</td>' +
      '<td class="px-4 py-2">' + lote.cliente + '</td>' +
      '<td class="px-4 py-2 text-right">' + (lote.pesaje ? lote.pesaje.neto : lote.pesoInicial) + '</td>' +
      '<td class="px-4 py-2"><span class="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">' + etapaNombre + '</span></td>' +
    '</tr>';
  }).join('');

  document.getElementById('selectAllLotes').checked = false;
}

export function toggleSelectAllLotes() {
  var selectAll = document.getElementById('selectAllLotes').checked;
  document.querySelectorAll('.lote-checkbox:not(:disabled)').forEach(function(cb) {
    cb.checked = selectAll;
  });
}

export function openCrearOrdenModal() {
  var disponibles = Object.entries(lotTraceData).filter(function(entry) {
    var data = entry[1];
    return data.etapas && (data.etapas[0].status === 'actual' || data.etapas[0].status === 'pendiente');
  });

  var list = document.getElementById('lotesDisponiblesList');
  if (disponibles.length === 0) {
    list.innerHTML = '<p class="text-center text-gray-500 py-4">No hay lotes disponibles para crear una orden.</p>';
  } else {
    list.innerHTML = disponibles.map(function(entry) {
      var id = entry[0], data = entry[1];
      return '<label class="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-gray-50 cursor-pointer transition-colors">' +
        '<input type="checkbox" value="' + id + '" onchange="actualizarPesoAcumulado()" class="w-5 h-5 rounded border-border text-primary focus:ring-primary">' +
        '<div class="flex-1">' +
          '<p class="font-medium text-text-dark">Lote #' + id + '</p>' +
          '<p class="text-xs text-text-muted">' + data.cliente + ' \u2014 ' + (data.pesaje ? data.pesaje.neto : data.pesoInicial) + '</p>' +
        '</div>' +
      '</label>';
    }).join('');
  }

  document.getElementById('pesoAcumulado').textContent = '0';
  toggleModal('crearOrdenModal');
}

export function actualizarPesoAcumulado() {
  var checkboxes = document.querySelectorAll('#lotesDisponiblesList input[type="checkbox"]:checked');
  var total = 0;
  checkboxes.forEach(function(cb) {
    var lote = lotTraceData[cb.value];
    if (lote) {
      var peso = parseFloat((lote.pesaje ? lote.pesaje.neto : lote.pesoInicial).replace(/[^\d.]/g, ''));
      total += peso;
    }
  });
  document.getElementById('pesoAcumulado').textContent = total.toLocaleString();
}

export function confirmarCrearOrden() {
  var peso = parseInt(document.getElementById('pesoAcumulado').textContent.replace(/,/g, ''));
  if (peso < 15000) {
    showToast('El peso total debe ser de al menos 15.000 kg', 'error');
    return;
  }

  var checkboxes = document.querySelectorAll('#lotesDisponiblesList input[type="checkbox"]:checked');
  var lotesSeleccionados = Array.from(checkboxes).map(function(cb) { return cb.value; });

  var newId = 'OP-' + String(ordenesProduccion.length + 1).padStart(3, '0');
  var today = new Date().toLocaleDateString('es-AR');

  ordenesProduccion.push({
    id: newId,
    fechaInicio: today,
    pesoTotal: peso,
    estado: 'Pendiente',
    lotes: lotesSeleccionados
  });

  showToast('Orden creada exitosamente', 'success');
  toggleModal('crearOrdenModal');
  renderOrdenes();
}

export function eliminarOrden(ordenId) {
  var orden = ordenesProduccion.find(function(o) { return o.id === ordenId; });
  if (!orden) return;
  if (orden.estado !== 'Pendiente') {
    showToast('Solo se pueden eliminar órdenes pendientes', 'error');
    return;
  }
  openConfirmModal('¿Está seguro que desea eliminar la orden ' + ordenId + '?', function(result) {
    if (!result) return;
    var idx = ordenesProduccion.findIndex(function(o) { return o.id === ordenId; });
    if (idx > -1) {
      ordenesProduccion.splice(idx, 1);
      showToast('Orden eliminada', 'success');
      renderOrdenes();
      document.getElementById('ordenDetailPanel').classList.add('hidden');
    }
  });
}

export function registrarAvance() {
  if (!selectedOrdenId) return;
  var etapa = document.getElementById('etapaSelector').value;
  if (!etapa) {
    showToast('Seleccione una etapa', 'error');
    return;
  }

  var pesoInicio = parseFloat(document.getElementById('etapaPesoInicio').value);
  if (isNaN(pesoInicio) || pesoInicio <= 0) {
    showToast('Ingrese un peso al inicio de etapa válido', 'error');
    return;
  }

  var checkboxes = document.querySelectorAll('.lote-checkbox:checked');
  if (checkboxes.length === 0) {
    showToast('Seleccione al menos un lote para avanzar', 'error');
    return;
  }

  var secuencia = ['pendiente', 'sapecado', 'secado', 'molienda', 'envío'];
  var etapaIndex = secuencia.indexOf(etapa);
  if (etapaIndex < 0) {
    showToast('Etapa no válida', 'error');
    return;
  }

  var orden = ordenesProduccion.find(function(o) { return o.id === selectedOrdenId; });
  if (!orden) return;

  var avanceExitoso = 0;

  checkboxes.forEach(function(cb) {
    var loteId = cb.value;
    var lote = lotTraceData[loteId];
    if (lote && lote.etapas) {
      var actualIndex = lote.etapas.findIndex(function(e) { return e.status === 'actual'; });
      var etapaDestinoIndex = lote.etapas.findIndex(function(e) { return e.nombre.toLowerCase() === etapa; });

      if (etapaDestinoIndex < 0) return;

      if (etapaDestinoIndex <= actualIndex && actualIndex >= 0) {
        showToast('El lote #' + loteId + ' ya pasó o está en la etapa ' + lote.etapas[etapaDestinoIndex].nombre + '. No se puede repetir o retroceder.', 'error');
        return;
      }

      if (etapaDestinoIndex > actualIndex + 1 && actualIndex >= 0) {
        showToast('El lote #' + loteId + ' no puede saltar etapas. Debe estar en ' + secuencia[actualIndex + 1] + ' primero.', 'error');
        return;
      }

      var pesoAnterior = 0;
      if (actualIndex >= 0) {
        pesoAnterior = lote.etapas[actualIndex].pesoInicio || parseFloat((lote.pesaje ? lote.pesaje.neto : lote.pesoInicial).replace(/[^\d.]/g, ''));
      } else {
        pesoAnterior = parseFloat((lote.pesaje ? lote.pesaje.neto : lote.pesoInicial).replace(/[^\d.]/g, ''));
      }

      var perdida = pesoAnterior - pesoInicio;
      var porcentaje = pesoAnterior > 0 ? ((perdida / pesoAnterior) * 100).toFixed(2) : '0.00';

      for (var i = 0; i < etapaDestinoIndex; i++) {
        lote.etapas[i].status = 'completado';
      }

      lote.etapas[etapaDestinoIndex].status = 'actual';
      lote.etapas[etapaDestinoIndex].pesoInicio = pesoInicio;
      lote.etapas[etapaDestinoIndex].perdida = perdida;
      lote.etapas[etapaDestinoIndex].perdidaPorcentaje = porcentaje;

      var fecha = document.getElementById('etapaFechaInicio').value;
      if (fecha) lote.etapas[etapaDestinoIndex].inicio = fecha;

      var tiempo = document.getElementById('etapaTiempo').value;
      if (tiempo) lote.etapas[etapaDestinoIndex].duracion = tiempo;

      avanceExitoso++;
    }
  });

  if (avanceExitoso > 0) {
    if (orden.estado === 'Pendiente') orden.estado = 'En proceso';
    showToast('Avance registrado exitosamente en ' + avanceExitoso + ' lote(s)', 'success');

    document.getElementById('etapaSelector').value = '';
    document.getElementById('etapaPesoInicio').value = '';
    document.getElementById('etapaFechaInicio').value = '';
    document.getElementById('etapaTiempo').value = '';
    document.getElementById('selectAllLotes').checked = false;

    selectOrden(selectedOrdenId);
    renderOrdenes();
  }
}

export function registrarFinProceso() {
  if (!selectedOrdenId) return;

  var checkboxes = document.querySelectorAll('.lote-checkbox:checked');
  if (checkboxes.length === 0) {
    showToast('Seleccione al menos un lote para finalizar', 'error');
    return;
  }

  var pesoFinal = prompt('Ingrese el peso final del lote (kg):');
  if (!pesoFinal || isNaN(pesoFinal)) {
    showToast('Peso final inválido', 'error');
    return;
  }

  var orden = ordenesProduccion.find(function(o) { return o.id === selectedOrdenId; });
  if (!orden) return;

  checkboxes.forEach(function(cb) {
    var loteId = cb.value;
    var lote = lotTraceData[loteId];
    if (lote) {
      lote.pesoActual = pesoFinal + ' kg';
      var inicial = parseFloat(lote.pesoInicial.replace(/[^\d.]/g, ''));
      var final = parseFloat(pesoFinal);
      var perdida = inicial - final;
      var porcentaje = ((perdida / inicial) * 100).toFixed(1);
      lote.perdida = perdida + ' kg (' + porcentaje + '%)';

      var actualIndex = lote.etapas.findIndex(function(e) { return e.status === 'actual'; });
      if (actualIndex >= 0) {
        lote.etapas[actualIndex].status = 'completado';
        lote.etapas[actualIndex].pesoFin = parseFloat(pesoFinal);
        lote.etapas[actualIndex].fin = new Date().toLocaleDateString('es-AR');

        var pesoInicioEtapa = lote.etapas[actualIndex].pesoInicio || inicial;
        var perdidaEtapa = pesoInicioEtapa - parseFloat(pesoFinal);
        lote.etapas[actualIndex].perdida = perdidaEtapa;
        lote.etapas[actualIndex].perdidaPorcentaje = pesoInicioEtapa > 0 ? ((perdidaEtapa / pesoInicioEtapa) * 100).toFixed(2) : '0.00';
      }
    }
  });

  var todosFinalizados = orden.lotes.every(function(lid) {
    var lote = lotTraceData[lid];
    return lote && !lote.etapas.some(function(e) { return e.status === 'actual'; });
  });
  if (todosFinalizados) orden.estado = 'Finalizado';

  showToast('Proceso finalizado', 'success');
  selectOrden(selectedOrdenId);
  renderOrdenes();
}

export function registrarEnvio() {
  if (!selectedOrdenId) return;

  var checkboxes = document.querySelectorAll('.lote-checkbox:checked');
  if (checkboxes.length === 0) {
    showToast('Seleccione al menos un lote para registrar envío', 'error');
    return;
  }

  var hayError = false;
  checkboxes.forEach(function(cb) {
    var loteId = cb.value;
    var lote = lotTraceData[loteId];
    if (lote && lote.etapas) {
      var envioIndex = lote.etapas.findIndex(function(e) { return e.nombre.toLowerCase() === 'envío'; });
      var actualIndex = lote.etapas.findIndex(function(e) { return e.status === 'actual'; });
      if (actualIndex >= 0 && actualIndex !== envioIndex - 1) {
        showToast('El lote #' + loteId + ' no está listo para envío. Debe estar en Molienda.', 'error');
        hayError = true;
      }
    }
  });
  if (hayError) return;

  var today = new Date().toISOString().split('T')[0];
  document.getElementById('envioFecha').value = today;
  document.getElementById('envioPesoFinal').value = '';
  document.getElementById('envioError').classList.add('hidden');

  toggleModal('registrarEnvioModal');
}

export function confirmarRegistrarEnvio() {
  var fechaEnvio = document.getElementById('envioFecha').value;
  var pesoFinal = parseFloat(document.getElementById('envioPesoFinal').value);
  var errorDiv = document.getElementById('envioError');
  var errorMsg = document.getElementById('envioErrorMsg');

  if (!fechaEnvio) {
    errorMsg.textContent = 'La fecha de envío es requerida.';
    errorDiv.classList.remove('hidden');
    return;
  }

  if (isNaN(pesoFinal) || pesoFinal <= 0) {
    errorMsg.textContent = 'El peso final real debe ser mayor a 0.';
    errorDiv.classList.remove('hidden');
    return;
  }

  var orden = ordenesProduccion.find(function(o) { return o.id === selectedOrdenId; });
  if (!orden) return;

  var checkboxes = document.querySelectorAll('.lote-checkbox:checked');
  var exitosos = 0;

  checkboxes.forEach(function(cb) {
    var loteId = cb.value;
    var lote = lotTraceData[loteId];
    if (lote && lote.etapas) {
      var envioIndex = lote.etapas.findIndex(function(e) { return e.nombre.toLowerCase() === 'envío'; });
      if (envioIndex >= 0) {
        var etapaAnterior = lote.etapas[envioIndex - 1];
        if (etapaAnterior && etapaAnterior.fin && etapaAnterior.fin !== '\u2014') {
          var finParts = etapaAnterior.fin.split('/');
          var finDate = new Date(finParts[2], finParts[1] - 1, finParts[0]);
          var envioDate = new Date(fechaEnvio);
          if (envioDate < finDate) {
            showToast('La fecha de envío no puede ser anterior a la fecha de fin de la etapa anterior (' + etapaAnterior.fin + ')', 'error');
            return;
          }
        }

        var pesoInicial = parseFloat((lote.pesaje ? lote.pesaje.neto : lote.pesoInicial).replace(/[^\d.]/g, ''));
        if (pesoFinal > pesoInicial) {
          showToast('El peso final (' + pesoFinal + ' kg) no puede ser mayor al peso inicial (' + pesoInicial + ' kg)', 'error');
          return;
        }

        for (var i = 0; i < envioIndex; i++) {
          lote.etapas[i].status = 'completado';
        }

        lote.etapas[envioIndex].status = 'completado';
        lote.etapas[envioIndex].inicio = fechaEnvio;
        lote.etapas[envioIndex].fin = fechaEnvio;
        lote.etapas[envioIndex].pesoInicio = pesoFinal;
        lote.etapas[envioIndex].pesoFin = pesoFinal;
        lote.etapas[envioIndex].perdida = 0;
        lote.etapas[envioIndex].perdidaPorcentaje = '0.00';

        lote.pesoActual = pesoFinal.toLocaleString('es-AR') + ' kg';

        exitosos++;
      }
    }
  });

  if (exitosos > 0) {
    orden.estado = 'Envío';
    showToast('Envío registrado exitosamente', 'success');
    toggleModal('registrarEnvioModal');
    selectOrden(selectedOrdenId);
    renderOrdenes();
    
  }
}
