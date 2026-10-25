import { Persona } from './persona';

export class Veterinario extends Persona {
  constructor(
    nombre: string,
    telefono: string,
    public readonly especialidad: string
  ) {
    super(nombre, telefono);
  }

  override obtenerResumen(): string {
    return `Dr(a). ${this.nombre} - ${this.especialidad}`;
  }
}