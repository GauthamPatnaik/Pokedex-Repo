import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PokedexService } from '../services/pokedex.service';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [
    PokedexService
  ],
  exports: [

  ],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PokedoxModule { }
