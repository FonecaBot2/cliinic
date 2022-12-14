export class Categoria {
  idCategoria: number;
  descripcion: string;

  constructor(
    idCategoria: number,
    descripcion: string,
  ) {
    this.idCategoria = idCategoria;
    this.descripcion = descripcion;
  }
}

export interface getCategorias{
  lista: Categoria[];
  totalDatos: number
}
