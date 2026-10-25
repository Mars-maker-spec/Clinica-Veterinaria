import { Persona } from './persona';

export class Dueno extends Persona {
  constructor(
    nombre: string,
    telefono: string,
    private _email: string,
    public readonly dni: string
  ) {
    super(nombre, telefono);
  }

  get email(): string {
    return this._email;
  }

  override obtenerResumen(): string {
    return `${this.nombre} - Tel: ${this.telefono}`;
  }
}