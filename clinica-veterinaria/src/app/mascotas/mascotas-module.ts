import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing-module';
import { RegistroMascota } from './registro-mascota/registro-mascota';
import { HistorialMascota } from './historial-mascota/historial-mascota';

@NgModule({
  declarations: [RegistroMascota, HistorialMascota],
  imports: [CommonModule, MascotasRoutingModule],
})
export class MascotasModule {}
