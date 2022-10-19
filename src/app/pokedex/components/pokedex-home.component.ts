import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Models
import { ProfileModel } from 'src/app/models/Models/ProfileModel';
import { PokedexResponse } from 'src/app/service-models/Responses/PokedexResponse';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokedex-home',
  templateUrl: '../templates/pokedex-home.component.html',
})
export class PokedexHomeComponent implements OnInit {
  // to display loader when request sends to the server
  isLoad: boolean = false;


  //Initilazing Viewmodel to view data in HTML
  _PokedexResponse: PokedexResponse | undefined;
  display: ProfileModel[] = [];

  //Injecting
  //Router: To redicting from one to another
  // Service to consume Rest Api in componet
  constructor(private _pokedexService: PokedexService,
    private routes: Router,) {

  }

  ngOnInit(): void {
    this.getInitialLoadData();

  }

  getInitialLoadData() {
    //for loader loads in UI
    this.isLoad = true;

    //Consuming Service to get List of Data from an api of a Pokimon
    this._pokedexService.getPokedexList().subscribe((x: PokedexResponse) => {
      this._PokedexResponse = x;
      this.display = this._PokedexResponse.results

      this.display.forEach((x: ProfileModel) => {
        this._pokedexService.getProfile(x.name).subscribe((p: any) => {
          x.image = p.sprites.other.home.front_default;
          this.isLoad = false;
        })
      });
    })

  }

  //On click redirecting to details page
  onClickKnowMoreDetails(name: string | undefined) {
    console.log(name);
    let selectedName = (name == undefined) ? undefined : name;
    this.routes.navigateByUrl("/pokedex-details/" + selectedName);
  }



}
