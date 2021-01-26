import { Factura } from './../interfaces/factura';
import { CLIENTES } from './mock-cliente'
export const FACTURAS: Factura[] = [
  { id: 1, fechaEmision: '25/01/2021', numeroFactura: 177, subtotal: 100, iva: 12, total: 112, cliente: CLIENTES[0] },
  { id: 2, fechaEmision: '26/01/2021', numeroFactura: 178, subtotal: 120, iva: 14.40, total: 134.40, cliente: CLIENTES[1] },
  { id: 3, fechaEmision: '27/01/2021', numeroFactura: 179, subtotal: 210, iva: 25.20, total: 235.20, cliente: CLIENTES[2] },

];
