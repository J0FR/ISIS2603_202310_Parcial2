import { Component, OnInit } from '@angular/core';
import { Receta } from '../receta';
import { RecetaService } from '../receta.service';

@Component({
  selector: 'app-receta-list',
  templateUrl: './receta-list.component.html',
  styleUrls: ['./receta-list.component.css']
})
export class RecetaListComponent implements OnInit {

  recetas: Array<Receta> = [];

  selected: Boolean = false;
  selectedReceta!: Receta;

  constructor(private recetaService: RecetaService) { }

  getRecetas(): void {
    this.recetaService.getRecetas().subscribe((recetas) => {
      this.recetas = recetas;
    });
  }

  getPromedioEstrellas(): number {
    var counter = 0;
    this.recetas.forEach( (element) => {
      counter += Number(element.estrellas)
    });
    return Math.round((counter/this.recetas.length) * 100) / 100;
  }

  getCantidadOpiniones(): number {
    var counter = 0;
    this.recetas.forEach( (element) => {
      counter += Number(element.cantidadOpiniones)
    });
    return counter;
  }

  onSelected(receta: Receta): void {
    this.selected = true;
    this.selectedReceta = receta;
  }

  ngOnInit() {
    this.getRecetas();
  }


}
