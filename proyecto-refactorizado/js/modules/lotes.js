// ==================== LOTES ====================
import { showToast, toggleModal, openConfirmModal, openTrazabilidadModal } from './utils.js';
import { lotTraceData, clientData } from '../data/database.js';

// ==================== REGISTRAR LOTE ====================
export function registrarLote() {
  const bruto = parseFloat(document.getElementById('registroPesoBruto').value) || 0;
  const tara = parseFloat(document.getElementById('registroPesoTara').value) || 0;

  if (bruto <= 0) {
    showToast('El peso bruto debe ser mayor a 0', 'error');
    return;
  }
  if (tara < 0) {
    showToast('La tara no puede ser negativa', 'error');
    return;
  }
  if (tara >= bruto) {
    showToast('La tara debe ser menor que el peso bruto', 'error');
    return;
  }

  openConfirmModal('¿Está seguro que desea registrar este lote?', function(result) {
    if (!result) return;
    showToast('Lote registrado exitosamente', 'success');
  });
}

// ==================== GENERAR COMPROBANTE ====================
export function generarComprobante(lotNumber) {
  const modal = document.getElementById('comprobantePreviewModal');
  const content = document.getElementById('comprobantePreviewContent');
  if (!modal || !content) {
    alert('Error: no se encontró el modal de comprobante.');
    return;
  }

  let effectiveLot = lotNumber;
  if (!lotTraceData[effectiveLot]) {
    effectiveLot = '2026-042';
  }
  const data = lotTraceData[effectiveLot];

  const clientName = data.cliente;
  const clientInfo = clientData[clientName] || {
    inym: '\u2014', phone: '\u2014', address: '\u2014'
  };

  const bruto = data.pesaje.bruto.replace(' kg', '');
  const tara = data.pesaje.tara.replace(' kg', '');
  const netoBascula = data.pesaje.neto.replace(' kg', '');
  const descuentos = '0.000';

  const loteSeq = effectiveLot.split('-')[1] || '001';
  const anio = effectiveLot.split('-')[0];
  const nroComprobante = 'C-' + anio + '-' + loteSeq;
  const nroRemito = 'R-' + anio + '-' + loteSeq;

  function buildRemitoCopia(copiaLabel, destino) {
    var colorCopia = copiaLabel === 'ORIGINAL' ? '#2D5A3D' : (copiaLabel === 'DUPLICADO' ? '#B8860B' : '#666');
    return '<div class="comprobante-copia" style="font-family: \'Georgia\', \'Times New Roman\', serif; color: #000; background: #fff; line-height: 1.4; max-width: 800px; margin: 0 auto; padding: 24px;">' +
      '<div style="text-align: right; margin-bottom: 8px;">' +
        '<span style="display: inline-block; border: 2px solid ' + colorCopia + '; color: ' + colorCopia + '; padding: 4px 12px; font-size: 11px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;">' + copiaLabel + ' \u2014 ' + destino + '</span>' +
      '</div>' +
      '<table style="width: 100%; border-collapse: collapse; margin-bottom: 16px;">' +
        '<tr>' +
          '<td style="vertical-align: top; width: 60%; padding-right: 16px;">' +
            '<h1 style="font-family: \'Playfair Display\', serif; font-size: 26px; font-weight: bold; margin: 0 0 4px 0; color: #2D5A3D; letter-spacing: 1px;">BRAZO LARGO</h1>' +
            '<p style="font-size: 11px; color: #333; margin: 0 0 2px 0;">Sistema de Gestión para Yerbateros</p>' +
            '<p style="font-size: 10px; color: #555; margin: 0;">Ruta Nacional 12, Km 1.250</p>' +
            '<p style="font-size: 10px; color: #555; margin: 0;">Posadas, Misiones, Argentina</p>' +
            '<p style="font-size: 10px; color: #555; margin: 0;">Tel: +54 3751 123456</p>' +
          '</td>' +
          '<td style="vertical-align: top; width: 40%; text-align: right;">' +
            '<table style="border-collapse: collapse; margin-left: auto; border: 1px solid #000;">' +
              '<tr><td style="border: 1px solid #000; padding: 6px 12px; background: #f5f5f5; font-size: 10px; text-align: center; font-weight: bold;">N\u00b0 COMPROBANTE</td></tr>' +
              '<tr><td style="border: 1px solid #000; padding: 8px 12px; font-size: 18px; font-weight: bold; text-align: center; color: #2D5A3D;">' + nroComprobante + '</td></tr>' +
            '</table>' +
            '<table style="border-collapse: collapse; margin-left: auto; margin-top: 8px; border: 1px solid #000;">' +
              '<tr><td style="border: 1px solid #000; padding: 6px 12px; background: #f5f5f5; font-size: 10px; text-align: center; font-weight: bold;">N\u00b0 REMITO</td></tr>' +
              '<tr><td style="border: 1px solid #000; padding: 8px 12px; font-size: 18px; font-weight: bold; text-align: center; color: #B8860B;">' + nroRemito + '</td></tr>' +
            '</table>' +
            '<p style="font-size: 10px; color: #555; margin: 8px 0 0 0; text-align: right;"><strong>Fecha:</strong> ' + data.fecha + '</p>' +
          '</td>' +
        '</tr>' +
      '</table>' +
      '<div style="border-top: 2px solid #000; margin-bottom: 16px;"></div>' +
      '<div style="margin-bottom: 16px;">' +
        '<p style="font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: #333; margin: 0 0 8px 0; font-weight: bold; border-bottom: 1px solid #ccc; padding-bottom: 4px;">Datos del Productor</p>' +
        '<table style="width: 100%; border-collapse: collapse; font-size: 12px;">' +
          '<tr>' +
            '<td style="width: 15%; padding: 4px 0; font-weight: bold;">Nombre:</td>' +
            '<td style="width: 35%; padding: 4px 0;">' + clientName + '</td>' +
            '<td style="width: 15%; padding: 4px 0; font-weight: bold;">N\u00b0 INYM:</td>' +
            '<td style="width: 35%; padding: 4px 0;">' + clientInfo.inym + '</td>' +
          '</tr>' +
          '<tr>' +
            '<td style="padding: 4px 0; font-weight: bold;">Direcci\u00f3n:</td>' +
            '<td style="padding: 4px 0;">' + clientInfo.address + '</td>' +
            '<td style="padding: 4px 0; font-weight: bold;">Tel\u00e9fono:</td>' +
            '<td style="padding: 4px 0;">' + clientInfo.phone + '</td>' +
          '</tr>' +
        '</table>' +
      '</div>' +
      '<div style="margin-bottom: 16px;">' +
        '<p style="font-size: 10px; text-transform: uppercase; letter-spacing: 1px; color: #333; margin: 0 0 8px 0; font-weight: bold; border-bottom: 1px solid #ccc; padding-bottom: 4px;">Detalle de Pesaje</p>' +
        '<table style="width: 100%; border-collapse: collapse; font-size: 12px; border: 1px solid #000;">' +
          '<thead><tr style="background: #f0f0f0;"><th style="border: 1px solid #000; padding: 8px 10px; text-align: left; font-weight: bold; width: 70%;">Concepto</th><th style="border: 1px solid #000; padding: 8px 10px; text-align: right; font-weight: bold; width: 30%;">Peso</th></tr></thead>' +
          '<tbody>' +
            '<tr><td style="border: 1px solid #000; padding: 8px 10px;">Peso Bruto (cami\u00f3n con carga)</td><td style="border: 1px solid #000; padding: 8px 10px; text-align: right; font-weight: bold;">' + bruto + ' kg</td></tr>' +
            '<tr style="background: #fafafa;"><td style="border: 1px solid #000; padding: 8px 10px;">Tara (cami\u00f3n vac\u00edo)</td><td style="border: 1px solid #000; padding: 8px 10px; text-align: right; color: #c00; font-weight: bold;">- ' + tara + ' kg</td></tr>' +
            '<tr><td style="border: 1px solid #000; padding: 8px 10px;">Descuentos por Merma</td><td style="border: 1px solid #000; padding: 8px 10px; text-align: right; color: #c00; font-weight: bold;">- ' + descuentos + ' kg</td></tr>' +
          '</tbody>' +
          '<tfoot><tr style="background: #f0f0f0; border-top: 2px solid #000;"><td style="border: 1px solid #000; padding: 10px; font-weight: bold; font-size: 13px;">PESO NETO</td><td style="border: 1px solid #000; padding: 10px; text-align: right; font-weight: bold; font-size: 14px;">' + netoBascula + ' kg</td></tr></tfoot>' +
        '</table>' +
      '</div>' +
      '<div style="border-top: 1px solid #ccc; border-bottom: 1px solid #ccc; padding: 8px 0; margin-bottom: 20px; font-size: 11px;">' +
        '<strong>N\u00b0 Lote:</strong> #' + effectiveLot + ' &nbsp;&nbsp;&nbsp;&nbsp; <strong>Fecha de Ingreso:</strong> ' + data.fecha +
      '</div>' +
      '<div style="margin-top: 50px;">' +
        '<table style="width: 100%; border-collapse: collapse;">' +
          '<tr>' +
            '<td style="width: 45%; text-align: center; vertical-align: bottom;"><div style="border-top: 1px solid #000; padding-top: 6px; margin-top: 60px;"><p style="font-size: 10px; color: #555; margin: 0;">Firma del Productor</p><p style="font-size: 11px; font-weight: bold; margin: 2px 0 0 0;">' + clientName + '</p></div></td>' +
            '<td style="width: 10%;"></td>' +
            '<td style="width: 45%; text-align: center; vertical-align: bottom;"><div style="border-top: 1px solid #000; padding-top: 6px; margin-top: 60px;"><p style="font-size: 10px; color: #555; margin: 0;">Firma del Responsable</p><p style="font-size: 11px; font-weight: bold; margin: 2px 0 0 0;">Brazo Largo S.A.</p></div></td>' +
          '</tr>' +
        '</table>' +
      '</div>' +
      '<div style="margin-top: 30px; padding-top: 12px; border-top: 1px solid #ccc; font-size: 9px; color: #777; line-height: 1.4;">' +
        '<strong>Notas:</strong> Este comprobante certifica el ingreso del lote al sistema de gesti\u00f3n. El peso neto de b\u00e1scula se calcula como Peso Bruto menos Tara. Los descuentos por merma se aplican sobre el peso neto seg\u00fan calidad de la yerba. Conserve este documento como constancia de entrega.' +
      '</div>' +
    '</div>';
  }

  content.innerHTML =
    buildRemitoCopia('ORIGINAL', 'Productor') +
    '<div style="page-break-after: always;"></div>' +
    buildRemitoCopia('DUPLICADO', 'Archivo') +
    '<div style="page-break-after: always;"></div>' +
    buildRemitoCopia('TRIPLICADO', 'Administraci\u00f3n');

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

// ==================== LISTADO DE LOTES FILTERS ====================
export function applyFilters() {
  const search = document.getElementById('filterSearch').value.toLowerCase().trim();
  const etapa = document.getElementById('filterEtapa').value;
  const fecha = document.getElementById('filterFecha').value;
  const rows = document.querySelectorAll('.lot-row');
  let visibleCount = 0;

  rows.forEach(row => {
    const lote = row.getAttribute('data-lote').toLowerCase();
    const cliente = row.getAttribute('data-cliente').toLowerCase();
    const rowEtapa = row.getAttribute('data-etapa');
    const rowFecha = row.getAttribute('data-fecha');

    let matchSearch = true, matchEtapa = true, matchFecha = true;

    if (search) matchSearch = lote.includes(search) || cliente.includes(search);
    if (etapa) matchEtapa = rowEtapa === etapa;
    if (fecha) matchFecha = matchDateFilter(rowFecha, fecha);

    if (matchSearch && matchEtapa && matchFecha) {
      row.classList.remove('hidden');
      visibleCount++;
    } else {
      row.classList.add('hidden');
    }
  });

  const noResults = document.getElementById('noResultsRow');
  if (visibleCount === 0) noResults.classList.remove('hidden');
  else noResults.classList.add('hidden');
}

function matchDateFilter(dateStr, filter) {
  var date = new Date(dateStr);
  var today = new Date('2026-06-09');
  var year = date.getFullYear();
  var month = date.getMonth();
  switch (filter) {
    case 'hoy': return dateStr === '2026-06-09';
    case 'semana':
      var weekAgo = new Date(today);
      weekAgo.setDate(weekAgo.getDate() - 7);
      return date >= weekAgo && date <= today;
    case 'mes': return year === 2026 && month === 5;
    case '2026': return year === 2026;
    case '2025': return year === 2025;
    default: return true;
  }
}

export function clearFilters() {
  document.getElementById('filterSearch').value = '';
  document.getElementById('filterEtapa').value = '';
  document.getElementById('filterFecha').value = '';
  document.querySelectorAll('.lot-row').forEach(row => row.classList.remove('hidden'));
  document.getElementById('noResultsRow').classList.add('hidden');
}

// ==================== UC-09: EDITAR LOTE ====================
let editingLoteId = null;

export function openEditLoteModal(loteId) {
  editingLoteId = loteId;
  const lote = lotTraceData[loteId];
  if (!lote || !lote.pesaje) {
    showToast('No se encontr\u00f3 el lote', 'error');
    return;
  }

  document.getElementById('editLoteId').textContent = '#' + loteId;
  document.getElementById('editPesoBruto').value = lote.pesaje.bruto.replace(' kg', '').replace(/\\./g, '');
  document.getElementById('editPesoTara').value = lote.pesaje.tara.replace(' kg', '').replace(/\\./g, '');
  calcularNetoEdicion();
  toggleModal('editLoteModal');
}

export function calcularNetoEdicion() {
  const bruto = parseFloat(document.getElementById('editPesoBruto').value) || 0;
  const tara = parseFloat(document.getElementById('editPesoTara').value) || 0;
  const neto = Math.max(0, bruto - tara);
  document.getElementById('editPesoNetoDisplay').textContent = neto.toLocaleString('es-AR', {minimumFractionDigits: 3}) + ' kg';
}

export function guardarCambiosLote() {
  if (!editingLoteId) return;
  const lote = lotTraceData[editingLoteId];
  if (!lote) return;

  const bruto = parseFloat(document.getElementById('editPesoBruto').value) || 0;
  const tara = parseFloat(document.getElementById('editPesoTara').value) || 0;

  if (bruto <= 0 || tara < 0 || tara >= bruto) {
    showToast('El peso bruto debe ser mayor que la tara', 'error');
    return;
  }

  const neto = bruto - tara;
  lote.pesaje.bruto = bruto.toLocaleString('es-AR', {minimumFractionDigits: 3}) + ' kg';
  lote.pesaje.tara = tara.toLocaleString('es-AR', {minimumFractionDigits: 3}) + ' kg';
  lote.pesaje.neto = neto.toLocaleString('es-AR', {minimumFractionDigits: 3}) + ' kg';

  showToast('Lote actualizado exitosamente', 'success');
  toggleModal('editLoteModal');

  if (!document.getElementById('listado-lotes').classList.contains('hidden')) {
    applyFilters();
  }
  editingLoteId = null;
}
