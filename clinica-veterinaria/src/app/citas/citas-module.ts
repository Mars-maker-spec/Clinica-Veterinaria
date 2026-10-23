import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing-module';
import { AgendaCitas } from './agenda-citas/agenda-citas';

@NgModule({
  declarations: [AgendaCitas],
  imports: [CommonModule, CitasRoutingModule],
})
export class CitasModule {}
