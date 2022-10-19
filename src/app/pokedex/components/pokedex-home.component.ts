import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Models
import { ProfileModel } from 'src/app/models/Models/ProfileModel';
import { PokedexDetailResponse } from 'src/app/service-models/Responses/PokedexDetailResponse';
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
 
  //pagination perameters 
  nextActionDisbale=false;
  backActionDisbale=true;
  defaultPageLength:number=50;
  initialCount:number=0;



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
    this._pokedexService.getPokedexList(this.initialCount,this.defaultPageLength).subscribe((x: PokedexResponse) => {
      this._PokedexResponse = x;
      this.display = this._PokedexResponse.results

      this.display.forEach((x: ProfileModel) => {
        this._pokedexService.getProfile(x.name).subscribe((p: PokedexDetailResponse) => {
          x.image = p.sprites.other.home.front_default;
          this.isLoad = false;
        })
      });
    })

  }

  //On click redirecting to details page
  onClickKnowMoreDetails(name: string | undefined) {
      let selectedName = (name == undefined) ? undefined : name;
    this.routes.navigateByUrl("/pokedex-details/" + selectedName);
  }

  onClickNext(){
      //for loader loads in UI
      this.isLoad = true;

      //Page Sroll to Top
      window.scrollTo(0, 0); 

      if(this.initialCount==150){
        this.defaultPageLength=1;
        this.nextActionDisbale=true;
      }
      else if(this.initialCount<=150){
        this.defaultPageLength=50;
        this.initialCount=this.initialCount+this.defaultPageLength;
        this.nextActionDisbale=false;
        this.backActionDisbale=false;
      }
   
      else{
        console.log("this.initialCount:",this.initialCount ,"defaultPageLength: ",this.defaultPageLength)
      }

      


    this._pokedexService.getPokedexList(this.initialCount,this.defaultPageLength).subscribe((x: PokedexResponse) => {
      this._PokedexResponse = x;
      this.display = this._PokedexResponse.results

      this.display.forEach((x: ProfileModel) => {
        this._pokedexService.getProfile(x.name).subscribe((p: PokedexDetailResponse) => {
          x.image = p.sprites.other.home.front_default;
          this.isLoad = false;
        })
      });
    })
  }

  onClickBack(){
      //for loader loads in UI
      this.isLoad = true;

      //Page Sroll to Top
      window.scrollTo(0, 0);

    this.defaultPageLength=50;
    if(this.initialCount>0){  
      this.initialCount=this.initialCount-this.defaultPageLength;
      this.backActionDisbale=false;
      this.nextActionDisbale=false;
    }
    else{
      console.log("this.initialCount:",this.initialCount ,"defaultPageLength: ",this.defaultPageLength)
    }
    
    if(this.initialCount==0){
      this.defaultPageLength=50;
      this.backActionDisbale=true;
    }

    this._pokedexService.getPokedexList(this.initialCount,this.defaultPageLength).subscribe((x: PokedexResponse) => {
      this._PokedexResponse = x;
      this.display = this._PokedexResponse.results

      this.display.forEach((x: ProfileModel) => {
        this._pokedexService.getProfile(x.name).subscribe((p: PokedexDetailResponse) => {
          x.image = p.sprites.other.home.front_default;
          this.isLoad = false;
        })
      });
    })
  }

}
