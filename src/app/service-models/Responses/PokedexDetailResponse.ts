import { AbilitiesModel } from "src/app/models/Models/AbilitiesModel";


export class PokedexDetailResponse{
name:string | undefined;
height:number | undefined;
weight:number | undefined;
types:any[]=[];
sprites:any;
abilities:AbilitiesModel[]=[];
}