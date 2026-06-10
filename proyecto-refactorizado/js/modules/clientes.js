// ==================== GESTIÓN DE CLIENTES ====================
import { showToast, toggleModal, openConfirmModal } from './utils.js';
import { clientData } from '../data/database.js';

let editingRow = null;

export function saveCliente() {
  const nombre = document.getElementById('clienteNombre').value.trim();
  const apellido = document.getElementById('clienteApellido').value.trim();
  const inym = document.getElementById('clienteINYM').value.trim();
  const dni = document.getElementById('clienteDNI').value.trim();
  const telefono = document.getElementById('clienteTelefono').value.trim();
  const email = document.getElementById('clienteEmail').value.trim();

  if (!nombre || !apellido) {
    showToast('El nombre y apellido son obligatorios', 'error');
    return;
  }
  if (!/^[\d]{5}$/.test(inym)) {
    showToast('El N° INYM debe tener exactamente 5 dígitos numéricos', 'error');
    return;
  }
  if (!/^[\d]{7,8}$/.test(dni)) {
    showToast('El DNI debe tener entre 7 y 8 dígitos numéricos', 'error');
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('El formato del email no es válido', 'error');
    return;
  }
  if (!telefono) {
    showToast('El teléfono es obligatorio', 'error');
    return;
  }

  const confirmMsg = editingRow
    ? '¿Confirma los cambios realizados en este cliente?'
    : '¿Está seguro que desea registrar este nuevo cliente?';

  openConfirmModal(confirmMsg, function(result) {
    if (!result) return;
    executeSaveCliente();
  });
}

function executeSaveCliente() {
  const nombre = document.getElementById('clienteNombre').value.trim();
  const apellido = document.getElementById('clienteApellido').value.trim();
  const inym = document.getElementById('clienteINYM').value.trim();
  const telefono = document.getElementById('clienteTelefono').value.trim();
  const email = document.getElementById('clienteEmail').value.trim();

  if (editingRow) {
    const initials = nombre[0].toUpperCase() + apellido[0].toUpperCase();
    editingRow.setAttribute('data-nombre', nombre);
    editingRow.setAttribute('data-apellido', apellido);
    editingRow.setAttribute('data-inym', inym);
    editingRow.setAttribute('data-dni', document.getElementById('clienteDNI').value.trim());
    editingRow.setAttribute('data-telefono', telefono);
    editingRow.setAttribute('data-email', email);
    editingRow.setAttribute('data-direccion', document.getElementById('clienteDireccion').value.trim());

    const cells = editingRow.querySelectorAll('td');
    cells[0].textContent = '#' + editingRow.getAttribute('data-id');
    cells[1].querySelector('.text-sm.font-medium').textContent = nombre + ' ' + apellido;
    cells[1].querySelector('.text-xs').textContent = email;
    cells[1].querySelector('.w-8').textContent = initials;
    cells[2].textContent = inym;
    cells[3].textContent = telefono;

    showToast('Cliente actualizado exitosamente', 'success');
  } else {
    showToast('Cliente registrado exitosamente', 'success');
  }

  resetClienteModal();
  toggleModal('clienteModal');
}

export function editCliente(btn) {
  openConfirmModal('¿Está seguro que desea editar este cliente?', function(result) {
    if (!result) return;
    const row = btn.closest('tr');
    editingRow = row;

    document.getElementById('clienteModalTitle').textContent = 'Editar Cliente';
    document.getElementById('clienteNombre').value = row.getAttribute('data-nombre');
    document.getElementById('clienteApellido').value = row.getAttribute('data-apellido');
    document.getElementById('clienteINYM').value = row.getAttribute('data-inym');
    document.getElementById('clienteDNI').value = row.getAttribute('data-dni');
    document.getElementById('clienteTelefono').value = row.getAttribute('data-telefono');
    document.getElementById('clienteEmail').value = row.getAttribute('data-email');
    document.getElementById('clienteDireccion').value = row.getAttribute('data-direccion');

    toggleModal('clienteModal');
  });
}

export function deleteCliente(btn) {
  openConfirmModal('¿Está seguro que quiere eliminar este cliente? Esta acción no se puede deshacer.', function(result) {
    if (!result) return;
    const row = btn.closest('tr');
    row.style.transition = 'all 0.3s ease';
    row.style.opacity = '0';
    row.style.transform = 'translateX(20px)';
    setTimeout(() => {
      row.remove();
      showToast('Cliente eliminado permanentemente', 'success');
    }, 300);
  });
}

export function disableCliente(btn) {
  const icon = btn.querySelector('i');
  const isDisabled = icon.classList.contains('text-red-600');

  if (isDisabled) {
    openConfirmModal('¿Quiere volver a habilitar este cliente?', function(result) {
      if (!result) return;
      icon.className = 'fa-solid fa-ban';
      btn.className = 'p-2 rounded-lg hover:bg-yellow-50 text-yellow-600 transition-colors';
      btn.title = 'Deshabilitar';
      showToast('Cliente habilitado nuevamente', 'success');
    });
  } else {
    openConfirmModal('¿Está seguro que quiere deshabilitar este cliente?', function(result) {
      if (!result) return;
      icon.className = 'fa-solid fa-ban text-red-600';
      btn.className = 'p-2 rounded-lg hover:bg-red-50 text-red-600 transition-colors';
      btn.title = 'Habilitar';
      showToast('Cliente deshabilitado', 'warning');
    });
  }
}

export function resetClienteModal() {
  document.getElementById('clienteModalTitle').textContent = 'Nuevo Cliente';
  document.getElementById('clienteNombre').value = '';
  document.getElementById('clienteApellido').value = '';
  document.getElementById('clienteINYM').value = '';
  document.getElementById('clienteDNI').value = '';
  document.getElementById('clienteTelefono').value = '';
  document.getElementById('clienteEmail').value = '';
  document.getElementById('clienteDireccion').value = '';
  editingRow = null;
}

export function filtrarClientes() {
  const search = document.getElementById('searchClientes').value.toLowerCase().trim();
  const rows = document.querySelectorAll('#clientesTableBody tr');
  let visibleCount = 0;

  rows.forEach(row => {
    const nombre = (row.getAttribute('data-nombre') || '').toLowerCase();
    const apellido = (row.getAttribute('data-apellido') || '').toLowerCase();
    const inym = (row.getAttribute('data-inym') || '').toLowerCase();
    const dni = (row.getAttribute('data-dni') || '').toLowerCase();
    const telefono = (row.getAttribute('data-telefono') || '').toLowerCase();
    const email = (row.getAttribute('data-email') || '').toLowerCase();

    const match = nombre.includes(search) ||
                  apellido.includes(search) ||
                  inym.includes(search) ||
                  dni.includes(search) ||
                  telefono.includes(search) ||
                  email.includes(search);

    if (match || search === '') {
      row.classList.remove('hidden');
      visibleCount++;
    } else {
      row.classList.add('hidden');
    }
  });

  let emptyRow = document.getElementById('clientesEmptyRow');
  if (visibleCount === 0 && search !== '') {
    if (!emptyRow) {
      emptyRow = document.createElement('tr');
      emptyRow.id = 'clientesEmptyRow';
      emptyRow.innerHTML = `<td colspan="6" class="text-center py-8 text-gray-500"><i class="fa-solid fa-search text-2xl mb-2 block"></i>No se encontraron clientes con ese criterio</td>`;
      document.getElementById('clientesTableBody').appendChild(emptyRow);
    }
    emptyRow.classList.remove('hidden');
  } else if (emptyRow) {
    emptyRow.classList.add('hidden');
  }
}

export function openClientDetail(clientName) {
  const client = clientData[clientName];
  if (!client) return;

  const statusColor = client.status === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600';
  const lotsHtml = client.lots.map(lot => `
    <div class="bg-gray-50 rounded-lg p-3 border border-border flex items-center justify-between">
      <div>
        <p class="text-sm font-semibold text-text-dark">${lot.number}</p>
        <p class="text-xs text-text-muted">${lot.date} | ${lot.weight}</p>
      </div>
      <span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">${lot.stage}</span>
    </div>
  `).join('');

  document.getElementById('clientDetailContent').innerHTML = `
    <div class="flex items-center gap-4 mb-4">
      <div class="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold text-xl">
        ${clientName.split(' ').map(n => n[0]).join('')}
      </div>
      <div>
        <h4 class="font-display text-xl font-bold text-primary">${clientName}</h4>
        <span class="${statusColor} px-3 py-1 rounded-full text-xs font-medium">${client.status}</span>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <div class="space-y-3">
        <div><p class="text-text-muted text-xs">N° INYM</p><p class="font-medium text-text-dark">${client.inym}</p></div>
        <div><p class="text-text-muted text-xs">DNI</p><p class="font-medium text-text-dark">${client.dni}</p></div>
        <div><p class="text-text-muted text-xs">Teléfono</p><p class="font-medium text-text-dark">${client.phone}</p></div>
      </div>
      <div class="space-y-3">
        <div><p class="text-text-muted text-xs">Email</p><p class="font-medium text-text-dark">${client.email}</p></div>
        <div><p class="text-text-muted text-xs">Dirección</p><p class="font-medium text-text-dark">${client.address}</p></div>
      </div>
    </div>
    <div class="pt-4 border-t border-border">
      <h5 class="font-semibold text-text-dark mb-3">Lotes Asociados (${client.lots.length})</h5>
      <div class="space-y-2">${lotsHtml}</div>
    </div>
  `;
  toggleModal('clientDetailModal');
}
