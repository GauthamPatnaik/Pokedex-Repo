import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileDetailsViewModel } from 'src/app/models/ViewModels/ProfileDetailsViewModel';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokedex-details',
  templateUrl: '../templates/pokedex-details.component.html',
})
export class PokedexDetailsComponent implements OnInit {
  // to display loader when request sends to the server
  isLoad: boolean = false;

  //Initilazing Viewmodel to view data in HTML
  profileDetailsViewModel!: ProfileDetailsViewModel;


  //Injecting
  //ActivatedRoute: To take route perameter,
  //Router: To redicting from one to another
  // Service to consume Rest Api in componet
  constructor(private route: ActivatedRoute,
    private routes: Router,
    private _pokedexService: PokedexService) {

  }

  ngOnInit(): void {
    //for loader loads in UI
    this.isLoad = true;
    this.profileDetailsViewModel = new ProfileDetailsViewModel();

    //Captureing query string perameter 
    this.route.paramMap.subscribe((params) => {
      let name = params.get("name");
      let newdata = (name == '') ? undefined : name;

      if (newdata == undefined) {
          //for OFF loader loads in UI
        this.isLoad = false;
        //redirecting to Home Page as NO Query String is available with this perameter
        this.routes.navigateByUrl("/");
      }
      else {

        //Consuming Service to get Data from an api of a Pokimon
        this._pokedexService.getProfile(newdata).subscribe(x => {

          this.profileDetailsViewModel.Abilities = x.abilities;
          this.profileDetailsViewModel.Heigth = x.height;
          this.profileDetailsViewModel.Weight = x.weight;
          this.profileDetailsViewModel.Image = x.sprites.other.home.front_default;
          this.profileDetailsViewModel.Types = x.types;
          this.profileDetailsViewModel.Name = x.name;
          this.isLoad = false;
        })
      }
    })
  }

}
