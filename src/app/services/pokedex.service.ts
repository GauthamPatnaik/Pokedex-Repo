import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';//environment
import { PokedexResponse } from '../service-models/Responses/PokedexResponse';


@Injectable()
export class PokedexService {
  baseUrl = environment.baseUrl;
  constructor(public _http: HttpClient) { }

 
  getHeaders() {
    var requestHeaders = new HttpHeaders();
    requestHeaders.append('Content-Type', 'application/json');
    return requestHeaders;
  }


  //Consuming API to get list of pokedex 
  public getPokedexList(): Observable<PokedexResponse> {
    const headerDirect = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
    return this._http.get<PokedexResponse>(this.baseUrl + "?offset=0&limit=151",
      { headers: headerDirect });
  }

  //Consuming api to get information of a pokedex
  public getProfile(name: string | undefined): Observable<any> {
    const headerDirect = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
    return this._http.get<any>(this.baseUrl + name,
      { headers: headerDirect });
  }
}
