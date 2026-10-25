import { EstadoCita } from './estado-cita';
import { Mascota } from './mascota';

export class Cita {
  constructor(
    public readonly id: number,
    public readonly mascota: Mascota,
    public fecha: Date,
    public motivo: string,
    public estado: EstadoCita = EstadoCita.Pendiente,
    public notas: string = ''
  ) {}
}