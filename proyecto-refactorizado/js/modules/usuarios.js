// ==================== USUARIOS ====================
import { showToast, toggleModal, openConfirmModal } from './utils.js';
import { usuarios } from '../data/database.js';

let editingUsuarioId = null;

export function renderUsuarios() {
  const tbody = document.getElementById('usuariosTableBody');
  const search = document.getElementById('searchUsuarios').value.toLowerCase();
  const filtered = usuarios.filter(function(u) {
    return u.nombre.toLowerCase().includes(search) ||
           u.apellido.toLowerCase().includes(search) ||
           u.username.toLowerCase().includes(search) ||
           u.rol.toLowerCase().includes(search);
  });

  if (filtered.length === 0) {
    tbody.innerHTML = '';
    document.getElementById('usuariosEmptyState').classList.remove('hidden');
    return;
  }
  document.getElementById('usuariosEmptyState').classList.add('hidden');

  tbody.innerHTML = filtered.map(function(u) {
    var estadoClass = u.estado === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600';
    var rolClass = u.rol === 'Administrador' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent-brown';
    return '<tr class="hover:bg-gray-50 transition-colors" data-id="' + u.id + '">' +
      '<td class="px-6 py-4 text-sm text-text-muted">#' + String(u.id).padStart(3, '0') + '</td>' +
      '<td class="px-6 py-4">' +
        '<div class="flex items-center gap-3">' +
          '<div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">' + u.nombre[0] + u.apellido[0] + '</div>' +
          '<div><p class="text-sm font-medium text-text-dark">@' + u.username + '</p></div>' +
        '</div>' +
      '</td>' +
      '<td class="px-6 py-4 text-sm text-text-dark">' + u.nombre + ' ' + u.apellido + '</td>' +
      '<td class="px-6 py-4"><span class="px-3 py-1 rounded-full text-xs font-medium ' + rolClass + '">' + u.rol + '</span></td>' +
      '<td class="px-6 py-4"><span class="px-3 py-1 rounded-full text-xs font-medium ' + estadoClass + '">' + u.estado + '</span></td>' +
      '<td class="px-6 py-4">' +
        '<div class="flex items-center gap-2">' +
          '<button onclick="editUsuario(' + u.id + ')" class="p-2 rounded-lg hover:bg-blue-50 text-primary transition-colors" title="Editar"><i class="fa-solid fa-pen-to-square"></i></button>' +
          '<button onclick="toggleUsuarioEstado(' + u.id + ')" class="p-2 rounded-lg hover:bg-yellow-50 text-yellow-600 transition-colors" title="' + (u.estado === 'Activo' ? 'Deshabilitar' : 'Habilitar') + '"><i class="fa-solid ' + (u.estado === 'Activo' ? 'fa-user-slash' : 'fa-user-check') + '"></i></button>' +
        '</div>' +
      '</td>' +
    '</tr>';
  }).join('');
}

export function filtrarUsuarios() {
  renderUsuarios();
}

export function guardarUsuario() {
  var nombre = document.getElementById('usuarioNombre').value.trim();
  var apellido = document.getElementById('usuarioApellido').value.trim();
  var username = document.getElementById('usuarioUsername').value.trim();
  var password = document.getElementById('usuarioPassword').value;
  var rol = document.getElementById('usuarioRol').value;

  if (!nombre || !apellido) {
    showToast('El nombre y apellido son obligatorios', 'error');
    return;
  }
  if (!username || username.length < 3) {
    showToast('El usuario debe tener al menos 3 caracteres', 'error');
    return;
  }
  if (!editingUsuarioId && (!password || password.length < 6)) {
    showToast('La contraseña debe tener al menos 6 caracteres', 'error');
    return;
  }
  if (!rol) {
    showToast('Debe seleccionar un rol', 'error');
    return;
  }

  if (editingUsuarioId) {
    var u = usuarios.find(function(us) { return us.id === editingUsuarioId; });
    if (u) {
      u.nombre = nombre;
      u.apellido = apellido;
      u.username = username;
      u.rol = rol;
      if (password) u.password = password;
      showToast('Usuario actualizado exitosamente', 'success');
    }
  } else {
    var newId = usuarios.length > 0 ? Math.max.apply(Math, usuarios.map(function(u) { return u.id; })) + 1 : 1;
    usuarios.push({
      id: newId, nombre, apellido, username, password, rol, estado: 'Activo'
    });
    showToast('Usuario creado exitosamente', 'success');
  }

  resetUsuarioModal();
  toggleModal('usuarioModal');
  renderUsuarios();
}

export function editUsuario(id) {
  var u = usuarios.find(function(us) { return us.id === id; });
  if (!u) return;

  editingUsuarioId = id;
  document.getElementById('usuarioModalTitle').textContent = 'Editar Usuario';
  document.getElementById('usuarioNombre').value = u.nombre;
  document.getElementById('usuarioApellido').value = u.apellido;
  document.getElementById('usuarioUsername').value = u.username;
  document.getElementById('usuarioPassword').value = '';
  document.getElementById('usuarioPassword').placeholder = 'Dejar vacío para mantener actual';
  document.getElementById('usuarioRol').value = u.rol;

  toggleModal('usuarioModal');
}

export function toggleUsuarioEstado(id) {
  var u = usuarios.find(function(us) { return us.id === id; });
  if (!u) return;

  var msg = u.estado === 'Activo'
    ? '¿Está seguro que desea deshabilitar al usuario @' + u.username + '?'
    : '¿Está seguro que desea habilitar al usuario @' + u.username + '?';

  openConfirmModal(msg, function(result) {
    if (!result) return;
    u.estado = u.estado === 'Activo' ? 'Inactivo' : 'Activo';
    showToast('Usuario ' + (u.estado === 'Activo' ? 'habilitado' : 'deshabilitado'), 'success');
    renderUsuarios();
  });
}

export function resetUsuarioModal() {
  editingUsuarioId = null;
  document.getElementById('usuarioModalTitle').textContent = 'Nuevo Usuario';
  document.getElementById('usuarioNombre').value = '';
  document.getElementById('usuarioApellido').value = '';
  document.getElementById('usuarioUsername').value = '';
  document.getElementById('usuarioPassword').value = '';
  document.getElementById('usuarioPassword').placeholder = 'Mínimo 6 caracteres';
  document.getElementById('usuarioRol').value = '';
}
