import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material.module';
import { RolPipe } from './pipes/rol.pipe';
import { TitlesDirective } from './directives/titles.directive';
import { ItemNameDirective } from './directives/item-name.directive';



@NgModule({
  declarations: [
    RolPipe,
    TitlesDirective,
    ItemNameDirective
  ],
  imports: [
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    ReactiveFormsModule,
    MaterialModule,
    RolPipe,
    TitlesDirective,
    ItemNameDirective
  ]
})
export class SharedModule { }
