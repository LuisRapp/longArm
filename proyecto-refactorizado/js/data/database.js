// ==================== DATOS DE TRAZABILIDAD ====================
export const lotTraceData = {
  '2025-001': { cliente: 'Juan Pérez', fecha: '02/06/2026', pesaje: { bruto: '19.000 kg', tara: '3.800 kg', neto: '15.200 kg' }, pesoInicial: '15.200 kg', pesoActual: '13.500 kg', perdida: '1.700 kg (11.2%)',
    etapas: [
      { nombre: 'Recepción', inicio: '02/06/2026', fin: '02/06/2026', pesoInicio: '15.200', pesoFin: '15.200', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '02/06/2026', fin: '04/06/2026', pesoInicio: '15.200', pesoFin: '14.600', perdida: '600 kg (3.9%)', duracion: '3 días', status: 'completado' },
      { nombre: 'Secado', inicio: '04/06/2026', fin: '06/06/2026', pesoInicio: '14.600', pesoFin: '13.500', perdida: '1.100 kg (7.5%)', duracion: '3 días', status: 'completado' },
      { nombre: 'Molienda', inicio: '06/06/2026', fin: '—', pesoInicio: '13.500', pesoFin: '13.500', perdida: '0 kg (0%)', duracion: '3 días', status: 'actual' },
      { nombre: 'Envío', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' }
    ]
  },
  '2025-002': { cliente: 'María González', fecha: '03/06/2026', pesaje: { bruto: '13.300 kg', tara: '2.800 kg', neto: '10.500 kg' }, pesoInicial: '10.500 kg', pesoActual: '9.800 kg', perdida: '700 kg (6.7%)',
    etapas: [
      { nombre: 'Recepción', inicio: '03/06/2026', fin: '03/06/2026', pesoInicio: '10.500', pesoFin: '10.500', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '03/06/2026', fin: '05/06/2026', pesoInicio: '10.500', pesoFin: '10.100', perdida: '400 kg (3.8%)', duracion: '3 días', status: 'completado' },
      { nombre: 'Secado', inicio: '05/06/2026', fin: '07/06/2026', pesoInicio: '10.100', pesoFin: '9.800', perdida: '300 kg (3.0%)', duracion: '3 días', status: 'completado' },
      { nombre: 'Molienda', inicio: '07/06/2026', fin: '—', pesoInicio: '9.800', pesoFin: '9.800', perdida: '0 kg (0%)', duracion: '2 días', status: 'actual' },
      { nombre: 'Envío', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' }
    ]
  },
  '2025-003': { cliente: 'Pedro Sánchez', fecha: '05/06/2026', pesaje: { bruto: '26.600 kg', tara: '4.500 kg', neto: '22.100 kg' }, pesoInicial: '22.100 kg', pesoActual: '21.400 kg', perdida: '700 kg (3.2%)',
    etapas: [
      { nombre: 'Recepción', inicio: '05/06/2026', fin: '05/06/2026', pesoInicio: '22.100', pesoFin: '22.100', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '05/06/2026', fin: '07/06/2026', pesoInicio: '22.100', pesoFin: '21.700', perdida: '400 kg (1.8%)', duracion: '3 días', status: 'completado' },
      { nombre: 'Secado', inicio: '07/06/2026', fin: '—', pesoInicio: '21.700', pesoFin: '21.400', perdida: '300 kg (1.4%)', duracion: '2 días', status: 'actual' },
      { nombre: 'Molienda', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Envío', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' }
    ]
  },
  '2025-004': { cliente: 'Juan Pérez', fecha: '06/06/2026', pesaje: { bruto: '19.000 kg', tara: '3.800 kg', neto: '15.200 kg' }, pesoInicial: '15.200 kg', pesoActual: '14.600 kg', perdida: '600 kg (3.9%)',
    etapas: [
      { nombre: 'Recepción', inicio: '06/06/2026', fin: '06/06/2026', pesoInicio: '15.200', pesoFin: '15.200', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '06/06/2026', fin: '08/06/2026', pesoInicio: '15.200', pesoFin: '14.800', perdida: '400 kg (2.6%)', duracion: '3 días', status: 'completado' },
      { nombre: 'Secado', inicio: '08/06/2026', fin: '—', pesoInicio: '14.800', pesoFin: '14.600', perdida: '200 kg (1.4%)', duracion: '1 día', status: 'actual' },
      { nombre: 'Molienda', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Envío', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' }
    ]
  },
  '2025-005': { cliente: 'Diego Torres', fecha: '06/06/2026', pesaje: { bruto: '14.500 kg', tara: '3.000 kg', neto: '11.500 kg' }, pesoInicial: '11.500 kg', pesoActual: '11.000 kg', perdida: '500 kg (4.3%)',
    etapas: [
      { nombre: 'Recepción', inicio: '06/06/2026', fin: '06/06/2026', pesoInicio: '11.500', pesoFin: '11.500', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '06/06/2026', fin: '07/06/2026', pesoInicio: '11.500', pesoFin: '11.200', perdida: '300 kg (2.6%)', duracion: '2 días', status: 'completado' },
      { nombre: 'Secado', inicio: '07/06/2026', fin: '—', pesoInicio: '11.200', pesoFin: '11.000', perdida: '200 kg (1.8%)', duracion: '2 días', status: 'actual' },
      { nombre: 'Molienda', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Envío', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' }
    ]
  },
  '2025-006': { cliente: 'Carlos Martínez', fecha: '07/06/2026', pesaje: { bruto: '22.200 kg', tara: '4.000 kg', neto: '18.200 kg' }, pesoInicial: '18.200 kg', pesoActual: '18.000 kg', perdida: '200 kg (1.1%)',
    etapas: [
      { nombre: 'Recepción', inicio: '07/06/2026', fin: '07/06/2026', pesoInicio: '18.200', pesoFin: '18.200', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '07/06/2026', fin: '—', pesoInicio: '18.200', pesoFin: '18.000', perdida: '200 kg (1.1%)', duracion: '2 días', status: 'actual' },
      { nombre: 'Secado', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Molienda', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Envío', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' }
    ]
  },
  '2025-007': { cliente: 'Ana López', fecha: '08/06/2026', pesaje: { bruto: '12.200 kg', tara: '2.400 kg', neto: '9.800 kg' }, pesoInicial: '9.800 kg', pesoActual: '9.600 kg', perdida: '200 kg (2.0%)',
    etapas: [
      { nombre: 'Recepción', inicio: '08/06/2026', fin: '08/06/2026', pesoInicio: '9.800', pesoFin: '9.800', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '08/06/2026', fin: '—', pesoInicio: '9.800', pesoFin: '9.600', perdida: '200 kg (2.0%)', duracion: '1 día', status: 'actual' },
      { nombre: 'Secado', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Molienda', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Envío', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' }
    ]
  },
  '2025-008': { cliente: 'María González', fecha: '08/06/2026', pesaje: { bruto: '10.600 kg', tara: '2.100 kg', neto: '8.500 kg' }, pesoInicial: '8.500 kg', pesoActual: '8.500 kg', perdida: '0 kg (0%)',
    etapas: [
      { nombre: 'Recepción', inicio: '08/06/2026', fin: '08/06/2026', pesoInicio: '8.500', pesoFin: '8.500', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Secado', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Molienda', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Envío', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' }
    ]
  },
  '2025-009': { cliente: 'Roberto Silva', fecha: '08/06/2026', pesaje: { bruto: '15.400 kg', tara: '3.100 kg', neto: '12.300 kg' }, pesoInicial: '12.300 kg', pesoActual: '12.300 kg', perdida: '0 kg (0%)',
    etapas: [
      { nombre: 'Recepción', inicio: '08/06/2026', fin: '08/06/2026', pesoInicio: '12.300', pesoFin: '12.300', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Secado', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Molienda', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Envío', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' }
    ]
  },
  '2025-010': { cliente: 'Laura Fernández', fecha: '09/06/2026', pesaje: { bruto: '7.000 kg', tara: '1.300 kg', neto: '5.700 kg' }, pesoInicial: '5.700 kg', pesoActual: '5.700 kg', perdida: '0 kg (0%)',
    etapas: [
      { nombre: 'Recepción', inicio: '09/06/2026', fin: '09/06/2026', pesoInicio: '5.700', pesoFin: '5.700', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Secado', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Molienda', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Envío', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' }
    ]
  },
  '2025-011': { cliente: 'Sofía Ramírez', fecha: '09/06/2026', pesaje: { bruto: '17.500 kg', tara: '3.500 kg', neto: '14.000 kg' }, pesoInicial: '14.000 kg', pesoActual: '13.800 kg', perdida: '200 kg (1.4%)',
    etapas: [
      { nombre: 'Recepción', inicio: '09/06/2026', fin: '09/06/2026', pesoInicio: '14.000', pesoFin: '14.000', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '09/06/2026', fin: '—', pesoInicio: '14.000', pesoFin: '13.800', perdida: '200 kg (1.4%)', duracion: '1 día', status: 'actual' },
      { nombre: 'Secado', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Molienda', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Envío', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' }
    ]
  },
  '2024-089': { cliente: 'Carlos Martínez', fecha: '15/05/2026', pesaje: { bruto: '24.000 kg', tara: '4.000 kg', neto: '20.000 kg' }, pesoInicial: '20.000 kg', pesoActual: '18.500 kg', perdida: '1.500 kg (7.5%)',
    etapas: [
      { nombre: 'Recepción', inicio: '15/05/2026', fin: '15/05/2026', pesoInicio: '20.000', pesoFin: '20.000', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '15/05/2026', fin: '17/05/2026', pesoInicio: '20.000', pesoFin: '19.500', perdida: '500 kg (2.5%)', duracion: '3 días', status: 'completado' },
      { nombre: 'Secado', inicio: '17/05/2026', fin: '20/05/2026', pesoInicio: '19.500', pesoFin: '18.800', perdida: '700 kg (3.6%)', duracion: '4 días', status: 'completado' },
      { nombre: 'Molienda', inicio: '20/05/2026', fin: '23/05/2026', pesoInicio: '18.800', pesoFin: '18.500', perdida: '300 kg (1.6%)', duracion: '4 días', status: 'completado' },
      { nombre: 'Envío', inicio: '23/05/2026', fin: '—', pesoInicio: '18.500', pesoFin: '18.500', perdida: '0 kg (0%)', duracion: '17 días', status: 'actual' }
    ]
  },
  '2026-042': { cliente: 'Juan Pérez', fecha: '09/06/2026', pesaje: { bruto: '15.700 kg', tara: '3.250 kg', neto: '12.450 kg' }, pesoInicial: '12.450 kg', pesoActual: '12.450 kg', perdida: '0 kg (0%)',
    etapas: [
      { nombre: 'Recepción', inicio: '09/06/2026', fin: '09/06/2026', pesoInicio: '12.450', pesoFin: '12.450', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Secado', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Molienda', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Envío', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' }
    ]
  },
  '2026-041': { cliente: 'María González', fecha: '08/06/2026', pesaje: { bruto: '10.600 kg', tara: '2.100 kg', neto: '8.500 kg' }, pesoInicial: '8.500 kg', pesoActual: '8.500 kg', perdida: '0 kg (0%)',
    etapas: [
      { nombre: 'Recepción', inicio: '08/06/2026', fin: '08/06/2026', pesoInicio: '8.500', pesoFin: '8.500', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Secado', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Molienda', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Envío', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' }
    ]
  },
  '2026-040': { cliente: 'Roberto Silva', fecha: '08/06/2026', pesaje: { bruto: '15.400 kg', tara: '3.100 kg', neto: '12.300 kg' }, pesoInicial: '12.300 kg', pesoActual: '12.100 kg', perdida: '200 kg (1.6%)',
    etapas: [
      { nombre: 'Recepción', inicio: '08/06/2026', fin: '08/06/2026', pesoInicio: '12.300', pesoFin: '12.300', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '08/06/2026', fin: '—', pesoInicio: '12.300', pesoFin: '12.100', perdida: '200 kg (1.6%)', duracion: '1 día', status: 'actual' },
      { nombre: 'Secado', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Molienda', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Envío', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' }
    ]
  },
  '2026-039': { cliente: 'Carlos Martínez', fecha: '07/06/2026', pesaje: { bruto: '22.200 kg', tara: '4.000 kg', neto: '18.200 kg' }, pesoInicial: '18.200 kg', pesoActual: '17.800 kg', perdida: '400 kg (2.2%)',
    etapas: [
      { nombre: 'Recepción', inicio: '07/06/2026', fin: '07/06/2026', pesoInicio: '18.200', pesoFin: '18.200', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '07/06/2026', fin: '08/06/2026', pesoInicio: '18.200', pesoFin: '17.800', perdida: '400 kg (2.2%)', duracion: '2 días', status: 'completado' },
      { nombre: 'Secado', inicio: '08/06/2026', fin: '—', pesoInicio: '17.800', pesoFin: '17.800', perdida: '0 kg (0%)', duracion: '1 día', status: 'actual' },
      { nombre: 'Molienda', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Envío', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' }
    ]
  },
  '2026-038': { cliente: 'Ana López', fecha: '07/06/2026', pesaje: { bruto: '12.200 kg', tara: '2.400 kg', neto: '9.800 kg' }, pesoInicial: '9.800 kg', pesoActual: '9.200 kg', perdida: '600 kg (6.1%)',
    etapas: [
      { nombre: 'Recepción', inicio: '07/06/2026', fin: '07/06/2026', pesoInicio: '9.800', pesoFin: '9.800', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '07/06/2026', fin: '08/06/2026', pesoInicio: '9.800', pesoFin: '9.500', perdida: '300 kg (3.1%)', duracion: '2 días', status: 'completado' },
      { nombre: 'Secado', inicio: '08/06/2026', fin: '—', pesoInicio: '9.500', pesoFin: '9.200', perdida: '300 kg (3.2%)', duracion: '1 día', status: 'actual' },
      { nombre: 'Molienda', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' },
      { nombre: 'Envío', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' }
    ]
  },
  '2026-037': { cliente: 'Pedro Sánchez', fecha: '06/06/2026', pesaje: { bruto: '26.600 kg', tara: '4.500 kg', neto: '22.100 kg' }, pesoInicial: '22.100 kg', pesoActual: '21.000 kg', perdida: '1.100 kg (5.0%)',
    etapas: [
      { nombre: 'Recepción', inicio: '06/06/2026', fin: '06/06/2026', pesoInicio: '22.100', pesoFin: '22.100', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '06/06/2026', fin: '07/06/2026', pesoInicio: '22.100', pesoFin: '21.500', perdida: '600 kg (2.7%)', duracion: '2 días', status: 'completado' },
      { nombre: 'Secado', inicio: '07/06/2026', fin: '09/06/2026', pesoInicio: '21.500', pesoFin: '21.000', perdida: '500 kg (2.3%)', duracion: '3 días', status: 'completado' },
      { nombre: 'Molienda', inicio: '09/06/2026', fin: '—', pesoInicio: '21.000', pesoFin: '21.000', perdida: '0 kg (0%)', duracion: '1 día', status: 'actual' },
      { nombre: 'Envío', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' }
    ]
  },
  '2026-036': { cliente: 'Diego Torres', fecha: '05/06/2026', pesaje: { bruto: '14.500 kg', tara: '3.000 kg', neto: '11.500 kg' }, pesoInicial: '11.500 kg', pesoActual: '10.900 kg', perdida: '600 kg (5.2%)',
    etapas: [
      { nombre: 'Recepción', inicio: '05/06/2026', fin: '05/06/2026', pesoInicio: '11.500', pesoFin: '11.500', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '05/06/2026', fin: '06/06/2026', pesoInicio: '11.500', pesoFin: '11.200', perdida: '300 kg (2.6%)', duracion: '2 días', status: 'completado' },
      { nombre: 'Secado', inicio: '06/06/2026', fin: '07/06/2026', pesoInicio: '11.200', pesoFin: '10.900', perdida: '300 kg (2.7%)', duracion: '2 días', status: 'completado' },
      { nombre: 'Molienda', inicio: '07/06/2026', fin: '—', pesoInicio: '10.900', pesoFin: '10.900', perdida: '0 kg (0%)', duracion: '3 días', status: 'actual' },
      { nombre: 'Envío', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' }
    ]
  },
  '2026-035': { cliente: 'Laura Fernández', fecha: '04/06/2026', pesaje: { bruto: '17.500 kg', tara: '3.500 kg', neto: '14.000 kg' }, pesoInicial: '14.000 kg', pesoActual: '13.200 kg', perdida: '800 kg (5.7%)',
    etapas: [
      { nombre: 'Recepción', inicio: '04/06/2026', fin: '04/06/2026', pesoInicio: '14.000', pesoFin: '14.000', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '04/06/2026', fin: '05/06/2026', pesoInicio: '14.000', pesoFin: '13.600', perdida: '400 kg (2.9%)', duracion: '2 días', status: 'completado' },
      { nombre: 'Secado', inicio: '05/06/2026', fin: '06/06/2026', pesoInicio: '13.600', pesoFin: '13.200', perdida: '400 kg (2.9%)', duracion: '2 días', status: 'completado' },
      { nombre: 'Molienda', inicio: '06/06/2026', fin: '—', pesoInicio: '13.200', pesoFin: '13.200', perdida: '0 kg (0%)', duracion: '4 días', status: 'actual' },
      { nombre: 'Envío', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' }
    ]
  },
  '2026-034': { cliente: 'Sofía Ramírez', fecha: '03/06/2026', pesaje: { bruto: '9.600 kg', tara: '1.800 kg', neto: '7.800 kg' }, pesoInicial: '7.800 kg', pesoActual: '7.000 kg', perdida: '800 kg (10.3%)',
    etapas: [
      { nombre: 'Recepción', inicio: '03/06/2026', fin: '03/06/2026', pesoInicio: '7.800', pesoFin: '7.800', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '03/06/2026', fin: '04/06/2026', pesoInicio: '7.800', pesoFin: '7.500', perdida: '300 kg (3.8%)', duracion: '2 días', status: 'completado' },
      { nombre: 'Secado', inicio: '04/06/2026', fin: '05/06/2026', pesoInicio: '7.500', pesoFin: '7.100', perdida: '400 kg (5.3%)', duracion: '2 días', status: 'completado' },
      { nombre: 'Molienda', inicio: '05/06/2026', fin: '06/06/2026', pesoInicio: '7.100', pesoFin: '7.000', perdida: '100 kg (1.4%)', duracion: '2 días', status: 'completado' },
      { nombre: 'Envío', inicio: '06/06/2026', fin: '—', pesoInicio: '7.000', pesoFin: '7.000', perdida: '0 kg (0%)', duracion: '3 días', status: 'actual' }
    ]
  },
  '2026-033': { cliente: 'Juan Pérez', fecha: '02/06/2026', pesaje: { bruto: '19.000 kg', tara: '3.800 kg', neto: '15.200 kg' }, pesoInicial: '15.200 kg', pesoActual: '13.500 kg', perdida: '1.700 kg (11.2%)',
    etapas: [
      { nombre: 'Recepción', inicio: '02/06/2026', fin: '02/06/2026', pesoInicio: '15.200', pesoFin: '15.200', perdida: '0 kg (0%)', duracion: '1 día', status: 'completado' },
      { nombre: 'Sapecado', inicio: '02/06/2026', fin: '04/06/2026', pesoInicio: '15.200', pesoFin: '14.600', perdida: '600 kg (3.9%)', duracion: '3 días', status: 'completado' },
      { nombre: 'Secado', inicio: '04/06/2026', fin: '06/06/2026', pesoInicio: '14.600', pesoFin: '13.500', perdida: '1.100 kg (7.5%)', duracion: '3 días', status: 'completado' },
      { nombre: 'Molienda', inicio: '06/06/2026', fin: '—', pesoInicio: '13.500', pesoFin: '13.500', perdida: '0 kg (0%)', duracion: '3 días', status: 'actual' },
      { nombre: 'Envío', inicio: '—', fin: '—', pesoInicio: '—', pesoFin: '—', perdida: '—', duracion: '—', status: 'pendiente' }
    ]
  }
};

// ==================== DATOS DE CLIENTES ====================
export const clientData = {
  'Juan Pérez': {
    inym: '12345', dni: '30123456', phone: '+54 3751 123456', email: 'juancito@email.com',
    address: 'Calle Falsa 123, Posadas, Misiones', status: 'Activo',
    lots: [
      { number: '#2026-042', date: '09/06/2026', weight: '12.450 kg', stage: 'Pendiente' },
      { number: '#2026-033', date: '02/06/2026', weight: '15.200 kg', stage: 'Molienda' },
      { number: '#2025-004', date: '06/06/2026', weight: '15.200 kg', stage: 'Secado' }
    ]
  },
  'María González': {
    inym: '12346', dni: '31234567', phone: '+54 3751 234567', email: 'mgonzalez@email.com',
    address: 'Av. Siempre Viva 456, Posadas, Misiones', status: 'Activo',
    lots: [
      { number: '#2026-041', date: '08/06/2026', weight: '8.500 kg', stage: 'Pendiente' },
      { number: '#2025-002', date: '03/06/2026', weight: '10.500 kg', stage: 'Molienda' }
    ]
  },
  'Carlos Martínez': {
    inym: '12347', dni: '32345678', phone: '+54 3751 345678', email: 'cmartinez@email.com',
    address: 'Calle 123, Posadas, Misiones', status: 'Activo',
    lots: [
      { number: '#2026-039', date: '07/06/2026', weight: '18.200 kg', stage: 'Sapecado' },
      { number: '#2024-089', date: 'Listo para despacho', weight: '20.000 kg', stage: 'Envío' }
    ]
  },
  'Ana López': {
    inym: '12348', dni: '33456789', phone: '+54 3751 456789', email: 'alopez@email.com',
    address: 'Av. Principal 789, Posadas, Misiones', status: 'Inactivo',
    lots: [
      { number: '#2026-038', date: '07/06/2026', weight: '9.800 kg', stage: 'Secado' }
    ]
  },
  'Pedro Sánchez': {
    inym: '12349', dni: '34567890', phone: '+54 3751 567890', email: 'psanchez@email.com',
    address: 'Calle Secundaria 321, Posadas, Misiones', status: 'Activo',
    lots: [
      { number: '#2026-037', date: '06/06/2026', weight: '22.100 kg', stage: 'Secado' }
    ]
  },
  'Roberto Silva': {
    inym: '12350', dni: '35678901', phone: '+54 3751 678901', email: 'rsilva@email.com',
    address: 'Calle Tercera 555, Posadas, Misiones', status: 'Activo',
    lots: [
      { number: '#2026-040', date: '08/06/2026', weight: '12.300 kg', stage: 'Sapecado' }
    ]
  },
  'Laura Fernández': {
    inym: '12351', dni: '36789012', phone: '+54 3751 789012', email: 'lfernandez@email.com',
    address: 'Av. Cuarta 999, Posadas, Misiones', status: 'Activo',
    lots: [
      { number: '#2025-010', date: '09/06/2026', weight: '5.700 kg', stage: 'Pendiente' },
      { number: '#2026-035', date: '04/06/2026', weight: '14.000 kg', stage: 'Molienda' }
    ]
  },
  'Diego Torres': {
    inym: '12352', dni: '37890123', phone: '+54 3751 890123', email: 'dtorres@email.com',
    address: 'Calle Quinta 111, Posadas, Misiones', status: 'Activo',
    lots: [
      { number: '#2026-036', date: '05/06/2026', weight: '11.500 kg', stage: 'Molienda' }
    ]
  },
  'Sofía Ramírez': {
    inym: '12353', dni: '38901234', phone: '+54 3751 901234', email: 'sramirez@email.com',
    address: 'Av. Sexta 222, Posadas, Misiones', status: 'Activo',
    lots: [
      { number: '#2026-034', date: '03/06/2026', weight: '7.800 kg', stage: 'Envío' },
      { number: '#2025-011', date: '09/06/2026', weight: '14.000 kg', stage: 'Secado' }
    ]
  }
};

// ==================== ÓRDENES DE PRODUCCIÓN ====================
export const ordenesProduccion = [
  { id: 'OP-001', fechaInicio: '10/06/2025', pesoTotal: 15200, estado: 'En proceso', lotes: ['2025-001'] },
  { id: 'OP-002', fechaInicio: '12/06/2025', pesoTotal: 18750, estado: 'Pendiente', lotes: ['2025-002'] },
  { id: 'OP-003', fechaInicio: '05/06/2025', pesoTotal: 9200, estado: 'En proceso', lotes: ['2025-003'] },
  { id: 'OP-004', fechaInicio: '01/06/2025', pesoTotal: 20400, estado: 'Finalizado', lotes: ['2025-004'] }
];

// ==================== USUARIOS ====================
export const usuarios = [
  { id: 1, nombre: 'Admin', apellido: 'Sistema', username: 'admin', password: 'admin123', rol: 'Administrador', estado: 'Activo' },
  { id: 2, nombre: 'María', apellido: 'González', username: 'mgonzalez', password: 'comercial1', rol: 'Administrador Comercial', estado: 'Activo' },
  { id: 3, nombre: 'Carlos', apellido: 'Martínez', username: 'cmartinez', password: 'admin2', rol: 'Administrador', estado: 'Inactivo' }
];
