export class Receta {
  id: number;
  nombre: string;
  descripcion: string;
  dificultad: string;
  duracion: number;
  ingredientes: string;
  categoria: string;
  imagen: string;
  estrellas: number;
  cantidadOpiniones: number;
  autorReceta: string;

  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    dificultad: string,
    duracion: number,
    ingredientes: string,
    categoria: string,
    imagen: string,
    estrellas: number,
    cantidadOpiniones: number,
    autorReceta: string,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.dificultad = dificultad;
    this.duracion = duracion;
    this.ingredientes = ingredientes;
    this.categoria = categoria;
    this.imagen = imagen;
    this.estrellas = estrellas;
    this.cantidadOpiniones = cantidadOpiniones;
    this.autorReceta = autorReceta;
  }
}

