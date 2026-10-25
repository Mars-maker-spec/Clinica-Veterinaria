import { Injectable } from '@angular/core';
import { Cita } from '../../shared/models/cita';
import { EstadoCita } from '../../shared/models/estado-cita';
import { Mascota } from '../../shared/models/mascota';

@Injectable({ providedIn: 'root' })
export class CitaService {
  private citas: Cita[] = [];
  private siguienteId = 1;

  horarioOcupado(fecha: Date): boolean {
    return this.citas.some(
      (c) =>
        c.estado !== EstadoCita.Cancelada &&
        c.fecha.getTime() === fecha.getTime()
    );
  }

  agendar(mascota: Mascota, fecha: Date, motivo: string): Cita {
    if (this.horarioOcupado(fecha)) {
      throw new Error('Ese horario ya está ocupado');
    }
    const cita = new Cita(this.siguienteId++, mascota, fecha, motivo);
    this.citas.push(cita);
    return cita;
  }

  listar(): Cita[] {
    return [...this.citas].sort(
      (a, b) => a.fecha.getTime() - b.fecha.getTime()
    );
  }

  listarPorMascota(mascotaId: number): Cita[] {
    return this.listar().filter((c) => c.mascota.id === mascotaId);
  }

  cambiarEstado(id: number, estado: EstadoCita, notas: string = ''): void {
    const cita = this.citas.find((c) => c.id === id);
    if (cita) {
      cita.estado = estado;
      cita.notas = notas;
    }
  }
}