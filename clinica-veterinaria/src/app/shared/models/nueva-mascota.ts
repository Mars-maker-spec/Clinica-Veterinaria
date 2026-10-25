import { Especie } from './mascota';

export interface NuevaMascota {
  nombre: string;
  especie: Especie;
  raza: string;
  edad: number;
  duenoNombre: string;
  duenoTelefono: string;
  duenoEmail: string;
  duenoDni: string;
}