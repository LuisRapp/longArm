// ==================== UTILIDADES ====================

// Navigation state
export let currentSection = 'login';

// Toggle modal
export function toggleModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  } else {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Toggle mobile sidebar
export function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// Show specific section
export function showSection(sectionId) {
  const sections = ['dashboard', 'clientes', 'registro-lote', 'listado-lotes', 'usuarios', 'ordenes-produccion'];
  sections.forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });

  document.getElementById(sectionId).classList.remove('hidden');

  const titles = {
    'dashboard': 'Dashboard',
    'clientes': 'Gestión de Clientes',
    'registro-lote': 'Registro de Lote',
    'listado-lotes': 'Listado de Lotes',
    
    'usuarios': 'Gestión de Usuarios',
    'ordenes-produccion': 'Órdenes de Producción'
  };
  document.getElementById('pageTitle').textContent = titles[sectionId] || '';

  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    if (item.getAttribute('onclick') && item.getAttribute('onclick').includes(`'${sectionId}'`)) {
      item.classList.add('active');
    }
  });

  currentSection = sectionId;

  document.getElementById('sidebar').classList.remove('open');
  window.scrollTo(0, 0);
}

// ==================== TOAST NOTIFICATION SYSTEM ====================
export function showToast(message, type) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');

  const icons = {
    success: 'fa-check-circle',
    error: 'fa-circle-xmark',
    warning: 'fa-triangle-exclamation',
    info: 'fa-circle-info'
  };
  const colors = {
    success: 'border-l-green-500 bg-green-50 text-green-800',
    error: 'border-l-red-500 bg-red-50 text-red-800',
    warning: 'border-l-amber-500 bg-amber-50 text-amber-800',
    info: 'border-l-blue-500 bg-blue-50 text-blue-800'
  };
  const iconColors = {
    success: 'text-green-500',
    error: 'text-red-500',
    warning: 'text-amber-500',
    info: 'text-blue-500'
  };

  toast.className = `flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border-l-4 ${colors[type]} transform transition-all duration-300 translate-x-full opacity-0`;
  toast.innerHTML = `
    <i class="fa-solid ${icons[type]} ${iconColors[type]} text-lg"></i>
    <span class="text-sm font-medium flex-1">${message}</span>
    <button onclick="this.parentElement.remove()" class="text-text-muted hover:text-text-dark transition-colors">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-x-full', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('translate-x-full', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ==================== MODAL DE CONFIRMACIÓN ====================
let confirmCallback = null;

export function openConfirmModal(message, callback) {
  confirmCallback = callback;
  document.getElementById('confirmModalMessage').textContent = message;
  toggleModal('confirmModal');
}

export function confirmModalYes() {
  toggleModal('confirmModal');
  if (confirmCallback) confirmCallback(true);
  confirmCallback = null;
}

export function confirmModalNo() {
  toggleModal('confirmModal');
  if (confirmCallback) confirmCallback(false);
  confirmCallback = null;
}

// ==================== TRAZABILIDAD ====================
import { lotTraceData } from '../data/database.js';

export function getTraceData(lotNumber) {
  if (lotTraceData[lotNumber]) return lotTraceData[lotNumber];

  return {
    cliente: 'Cliente desconocido',
    fecha: '—',
    pesaje: { bruto: '—', tara: '—', neto: '—' },
    pesoInicial: '—',
    pesoActual: '—',
    perdida: '—',
    etapas: [
      { nombre:'Recepción', inicio:'—', fin:'—', pesoInicio:'—', pesoFin:'—', perdida:'—', duracion:'—', status:'pendiente' },
      { nombre:'Sapecado', inicio:'—', fin:'—', pesoInicio:'—', pesoFin:'—', perdida:'—', duracion:'—', status:'pendiente' },
      { nombre:'Secado', inicio:'—', fin:'—', pesoInicio:'—', pesoFin:'—', perdida:'—', duracion:'—', status:'pendiente' },
      { nombre:'Molienda', inicio:'—', fin:'—', pesoInicio:'—', pesoFin:'—', perdida:'—', duracion:'—', status:'pendiente' },
      { nombre:'Envío', inicio:'—', fin:'—', pesoInicio:'—', pesoFin:'—', perdida:'—', duracion:'—', status:'pendiente' }
    ]
  };
}

export function openTrazabilidadModal(lotNumber) {
  window.currentTraceLot = lotNumber;
  const data = getTraceData(lotNumber);

  document.getElementById('trazModalTitle').textContent = 'Lote #' + lotNumber;
  document.getElementById('trazModalCliente').textContent = 'Cliente: ' + data.cliente + ' | Ingreso: ' + data.fecha;

  let html = `<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <div class="text-center p-3 bg-gray-50 rounded-lg"><p class="text-xs text-text-muted">Peso Inicial</p><p class="text-lg font-bold text-primary">${data.pesoInicial}</p></div>
    <div class="text-center p-3 bg-gray-50 rounded-lg"><p class="text-xs text-text-muted">Peso Actual</p><p class="text-lg font-bold text-accent">${data.pesoActual}</p></div>
    <div class="text-center p-3 bg-gray-50 rounded-lg"><p class="text-xs text-text-muted">Pérdida Total</p><p class="text-lg font-bold text-red-600">${data.perdida}</p></div>
  </div>

  <h4 class="font-display text-lg font-bold text-primary mb-4">Historial de Etapas</h4>`;

  const statusConfig = {
    completado: { icon: 'fa-check', circle: 'bg-primary text-white', badge: 'bg-green-100 text-green-700', text: 'Completado', opacity: '' },
    actual: { icon: 'fa-gear fa-spin', circle: 'bg-white border-4 border-primary text-primary pulse-ring', badge: 'bg-blue-100 text-blue-700', text: 'En Curso', opacity: '' },
    pendiente: { icon: 'fa-clock', circle: 'bg-gray-100 border-4 border-gray-300 text-gray-400', badge: 'bg-gray-100 text-gray-600', text: 'Pendiente', opacity: 'opacity-60' }
  };

  data.etapas.forEach(e => {
    const cfg = statusConfig[e.status];
    const perdidaVal = e.perdida !== undefined && e.perdida !== '—' && e.perdida !== '' ? e.perdida : '—';
    const perdidaPorc = e.perdidaPorcentaje !== undefined && e.perdidaPorcentaje !== '—' ? e.perdidaPorcentaje + '%' : '';
    const perdidaDisplay = perdidaVal !== '—' ? `${perdidaVal} kg ${perdidaPorc ? '(' + perdidaPorc + ')' : ''}` : '—';

    html += `
    <div class="bg-white rounded-xl border border-border p-5 shadow-sm hover-lift ${cfg.opacity}">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 ${cfg.circle} rounded-full flex items-center justify-center flex-shrink-0" style="animation-duration:3s">
          <i class="fa-solid ${cfg.icon}"></i>
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-semibold ${e.status === 'actual' ? 'text-primary' : e.status === 'pendiente' ? 'text-gray-400' : 'text-text-dark'}">${e.nombre}</h4>
            <span class="${cfg.badge} px-3 py-1 rounded-full text-xs font-medium">${cfg.text}</span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
            <div><p class="text-text-muted text-xs">Inicio</p><p class="font-medium text-text-dark">${e.inicio}</p></div>
            <div><p class="text-text-muted text-xs">Fin</p><p class="font-medium text-text-dark">${e.fin}</p></div>
            <div><p class="text-text-muted text-xs">Duración</p><p class="font-medium text-text-dark">${e.duracion}</p></div>
            <div><p class="text-text-muted text-xs">Peso Inicial</p><p class="font-medium text-text-dark">${e.pesoInicio} kg</p></div>
            <div><p class="text-text-muted text-xs">Peso Final</p><p class="font-medium text-text-dark">${e.pesoFin} kg</p></div>
            <div><p class="text-text-muted text-xs">Pérdida</p><p class="font-medium ${e.status === 'completado' ? 'text-red-600' : 'text-text-muted'}">${perdidaDisplay}</p></div>
          </div>
        </div>
      </div>
    </div>`;
  });

  document.getElementById('trazModalContent').innerHTML = html;
  toggleModal('trazabilidadModal');
}

export function toggleHistorialCompleto() {
  const detail = document.getElementById('historialCompleto');
  const btn = document.getElementById('btnHistorialCompleto');
  if (detail.classList.contains('hidden')) {
    detail.classList.remove('hidden');
    btn.innerHTML = '<i class="fa-solid fa-chevron-up mr-2"></i>Ocultar Historial Completo';
  } else {
    detail.classList.add('hidden');
    btn.innerHTML = '<i class="fa-solid fa-clock-rotate-left mr-2"></i>Ver Historial Completo';
  }
}

export function descargarPDF() {
  showToast('Descargando comprobante...', 'info');
  setTimeout(() => {
    showToast('Comprobante descargado exitosamente', 'success');
  }, 2000);
}
