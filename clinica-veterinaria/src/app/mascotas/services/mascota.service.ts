import { Injectable } from '@angular/core';
import { Dueno } from '../../shared/models/dueno';
import { Mascota } from '../../shared/models/mascota';
import { NuevaMascota } from '../../shared/models/nueva-mascota';

@Injectable({ providedIn: 'root' })
export class MascotaService {
  private mascotas: Mascota[] = [];
  private siguienteId = 1;

  registrar(datos: NuevaMascota): Mascota {
    const dueno = new Dueno(
      datos.duenoNombre,
      datos.duenoTelefono,
      datos.duenoEmail,
      datos.duenoDni
    );
    const mascota = new Mascota(
      this.siguienteId++,
      datos.nombre,
      datos.especie,
      datos.raza,
      datos.edad,
      dueno
    );
    this.mascotas.push(mascota);
    return mascota;
  }

  listar(): Mascota[] {
    return [...this.mascotas];
  }

  buscarPorId(id: number): Mascota | undefined {
    return this.mascotas.find((m) => m.id === id);
  }
}