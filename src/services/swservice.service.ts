import { SWShip } from './../models/swship';
import { SWPerson } from './../models/swperson';
import { Observable } from  'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class SwserviceService {

  private readonly _baseUrl = 'https://swapi.co/api';

  constructor(private _http: Http) 
  { 

  }

  public listCast(): Observable<Array<SWPerson>> 
  {
    return this._http.get(`${this._baseUrl}/people`)
    .map((response: Response) => response.json())
    .map(json => json.results);
  }

  public cast(id: number): Observable<SWPerson> {
        return this._http.get(`${this._baseUrl}/people/${id}`)
            .map((response: Response) => response.json());
  }

  public listShips(): Observable<Array<SWShip>>
  {
    return this._http.get(`${this._baseUrl}/starships`)
    .map((response: Response) => response.json())
    .map(result => result.results);
  }

  public ship(id:number): Observable<SWShip>
  {
    return this._http.get(`${this._baseUrl}/starships/${id}`)
    .map((response: Response) => response.json());
  }
}
