// ==================== AUTENTICACIÓN ====================
import { showSection } from './utils.js';

export function handleLogin() {
  document.getElementById('login').classList.add('hidden');
  document.getElementById('sidebar').classList.remove('hidden');
  document.getElementById('mainContent').classList.remove('hidden');
  document.getElementById('mobileHeader').classList.remove('hidden');
  showSection('dashboard');
}

export function validatePassword() {
  const input = document.getElementById('passwordInput');
  const hint = document.getElementById('passwordHint');
  const errorBox = document.getElementById('passwordError');
  const successBox = document.getElementById('passwordSuccess');
  const value = input.value;

  if (value.length === 0) {
    input.className = input.className.replace(/input-error|border-green-500|ring-green-500/g, 'border-border');
    hint.classList.remove('hidden');
    errorBox.classList.add('hidden');
    successBox.classList.add('hidden');
  } else if (value.length < 6) {
    input.className = input.className.replace(/border-green-500|ring-green-500/g, '');
    if (!input.className.includes('input-error')) {
      input.className = input.className.replace(/border-border/g, '') + ' input-error';
    }
    hint.classList.add('hidden');
    errorBox.classList.remove('hidden');
    successBox.classList.add('hidden');
  } else {
    input.className = input.className.replace(/input-error|border-border/g, '') + ' border-green-500';
    hint.classList.add('hidden');
    errorBox.classList.add('hidden');
    successBox.classList.remove('hidden');
  }
}

export function handleLogout() {
  document.getElementById('login').classList.remove('hidden');
  document.getElementById('sidebar').classList.add('hidden');
  document.getElementById('mainContent').classList.add('hidden');
  document.getElementById('mobileHeader').classList.add('hidden');

  const sections = ['dashboard', 'clientes', 'registro-lote', 'listado-lotes', 'usuarios', 'ordenes-produccion'];
  sections.forEach(id => {
    document.getElementById(id).classList.add('hidden');
  });
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
}
