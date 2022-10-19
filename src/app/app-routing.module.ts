import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pokedex/components/layout.component';
import { PokedexDetailsComponent } from './pokedex/components/pokedex-details.component';
import { PokedexHomeComponent } from './pokedex/components/pokedex-home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: PokedexHomeComponent },
      { path: 'pokedex-details/:name', component: PokedexDetailsComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
