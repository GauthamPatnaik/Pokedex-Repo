import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokedexHomeComponent } from './pokedex/components/pokedex-home.component';
import { LayoutComponent } from './pokedex/components/layout.component';
import { PokedoxModule } from './pokedex/pokedox.module';
import { HeaderComponent } from './globle/components/header.component';
import { FooterComponent } from './globle/components/footer.component';
import { PokedexDetailsComponent } from './pokedex/components/pokedex-details.component';




@NgModule({
  declarations: [
    AppComponent,
    PokedexHomeComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    PokedexDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    PokedoxModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
