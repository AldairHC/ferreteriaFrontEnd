import { Local } from "./local";

export class Empleado{
  idEmpleado: number;
  nombres: string;
  apellidos: string;
  direccion: string;
  telefono: string;
  tipo_documento: string;
  numero_documento: string;
  cargo: string;
  local:Local;
}
