import { FACTURAS } from './mock-factura';
import { PRODUCTOS } from '../mocks-app/mock-producto';
import { Detalle } from './../interfaces/detalle';

export const DETALLES: Detalle[] = [

  { id: 12, cantidad: 1, precio: 100, valorUnitario: 50, producto: PRODUCTOS[0], factura: FACTURAS[0] },
  { id: 14, cantidad: 2, precio: 110, valorUnitario: 60, producto: PRODUCTOS[1], factura: FACTURAS[1] },
  { id: 17, cantidad: 3, precio: 210, valorUnitario: 70, producto: PRODUCTOS[2], factura: FACTURAS[2] },


];
