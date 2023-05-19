import { Component, Input, OnInit } from '@angular/core';
import { Receta } from '../receta';

@Component({
  selector: 'app-receta-detail',
  templateUrl: './receta-detail.component.html',
  styleUrls: ['./receta-detail.component.css']
})
export class RecetaDetailComponent implements OnInit {

  @Input() recetaDetail!: Receta;

  constructor() { }

  ngOnInit() {
  }

}
