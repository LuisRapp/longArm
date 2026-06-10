// ==================== MAIN: PUNTO DE ENTRADA ====================
// Importa todos los módulos y asigna funciones globales para onclick handlers

// Auth
import { handleLogin, validatePassword, handleLogout } from './modules/auth.js';

// Utils
import {
  toggleModal, toggleSidebar, showSection, showToast,
  openConfirmModal, confirmModalYes, confirmModalNo,
  openTrazabilidadModal, toggleHistorialCompleto, descargarPDF
} from './modules/utils.js';

// Clientes
import {
  saveCliente, editCliente, deleteCliente, disableCliente,
  resetClienteModal, filtrarClientes, openClientDetail
} from './modules/clientes.js';

// Lotes
import {
  registrarLote, generarComprobante, applyFilters, clearFilters,
  calcularNetoEdicion, openEditLoteModal, guardarCambiosLote
} from './modules/lotes.js';

// Ordenes
import {
  renderOrdenes, filtrarOrdenes, selectOrden, toggleSelectAllLotes,
  openCrearOrdenModal, actualizarPesoAcumulado, confirmarCrearOrden,
  eliminarOrden, registrarAvance, registrarFinProceso,
  registrarEnvio, confirmarRegistrarEnvio
} from './modules/ordenes.js';

// Usuarios
import {
  renderUsuarios, filtrarUsuarios, guardarUsuario, editUsuario,
  toggleUsuarioEstado, resetUsuarioModal
} from './modules/usuarios.js';

// ==================== ASIGNAR FUNCIONES GLOBALES ====================
// Necesario para onclick="" handlers en el HTML
window.handleLogin = handleLogin;
window.validatePassword = validatePassword;
window.handleLogout = handleLogout;

window.toggleModal = toggleModal;
window.toggleSidebar = toggleSidebar;
window.showSection = showSection;
window.showToast = showToast;
window.openConfirmModal = openConfirmModal;
window.confirmModalYes = confirmModalYes;
window.confirmModalNo = confirmModalNo;
window.openTrazabilidadModal = openTrazabilidadModal;
window.toggleHistorialCompleto = toggleHistorialCompleto;
window.descargarPDF = descargarPDF;

window.saveCliente = saveCliente;
window.editCliente = editCliente;
window.deleteCliente = deleteCliente;
window.disableCliente = disableCliente;
window.resetClienteModal = resetClienteModal;
window.filtrarClientes = filtrarClientes;
window.openClientDetail = openClientDetail;

window.registrarLote = registrarLote;
window.generarComprobante = generarComprobante;
window.applyFilters = applyFilters;
window.clearFilters = clearFilters;
window.openEditLoteModal = openEditLoteModal;
window.calcularNetoEdicion = calcularNetoEdicion;
window.guardarCambiosLote = guardarCambiosLote;

window.renderOrdenes = renderOrdenes;
window.filtrarOrdenes = filtrarOrdenes;
window.selectOrden = selectOrden;
window.toggleSelectAllLotes = toggleSelectAllLotes;
window.openCrearOrdenModal = openCrearOrdenModal;
window.actualizarPesoAcumulado = actualizarPesoAcumulado;
window.confirmarCrearOrden = confirmarCrearOrden;
window.eliminarOrden = eliminarOrden;
window.registrarAvance = registrarAvance;
window.registrarFinProceso = registrarFinProceso;
window.registrarEnvio = registrarEnvio;
window.confirmarRegistrarEnvio = confirmarRegistrarEnvio;

window.renderUsuarios = renderUsuarios;
window.filtrarUsuarios = filtrarUsuarios;
window.guardarUsuario = guardarUsuario;
window.editUsuario = editUsuario;
window.toggleUsuarioEstado = toggleUsuarioEstado;
window.resetUsuarioModal = resetUsuarioModal;

// ==================== INICIALIZACIÓN ====================
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('[id$="Modal"]').forEach(function(modal) {
      modal.classList.add('hidden');
    });
    document.body.style.overflow = '';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('login').classList.remove('hidden');
});

// Kanban cards: clickable for trazabilidad
document.querySelectorAll('[data-lote]:not(.lot-row)').forEach(function(card) {
  card.addEventListener('click', function(e) {
    if (e.target.closest('[onclick*="openClientDetail"]')) return;
    var lote = this.getAttribute('data-lote');
    if (lote) openTrazabilidadModal(lote);
  });
});

// Listado rows: clickable for trazabilidad
document.querySelectorAll('.lot-row').forEach(function(row) {
  row.style.cursor = 'pointer';
  row.addEventListener('click', function() {
    openTrazabilidadModal(this.getAttribute('data-lote'));
  });
});

// Render inicial
renderOrdenes();

renderUsuarios();
