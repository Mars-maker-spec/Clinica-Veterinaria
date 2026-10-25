import { Dueno } from './dueno';

export type Especie = 'Perro' | 'Gato' | 'Ave' | 'Otro';

export class Mascota {
  constructor(
    public readonly id: number,
    public nombre: string,
    public especie: Especie,
    public raza: string,
    public edad: number,
    public readonly dueno: Dueno
  ) {}
}