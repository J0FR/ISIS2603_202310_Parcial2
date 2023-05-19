import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetaListComponent } from './receta-list/receta-list.component';
import { RecetaDetailComponent } from './receta-detail/receta-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RecetaListComponent],
  declarations: [RecetaListComponent, RecetaDetailComponent]
})
export class RecetaModule { }
