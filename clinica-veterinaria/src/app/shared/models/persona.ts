export abstract class Persona {
  constructor(
    private _nombre: string,
    private _telefono: string
  ) {}

  get nombre(): string {
    return this._nombre;
  }

  get telefono(): string {
    return this._telefono;
  }

  abstract obtenerResumen(): string;
}