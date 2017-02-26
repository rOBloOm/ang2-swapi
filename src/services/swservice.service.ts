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

  public listCast(page?:number): Observable<any>
  {
    let getRequestUrl:string = `${this._baseUrl}/people`;
    
    if(page != null && !isNaN(page))
    {
      getRequestUrl = getRequestUrl.concat(`?page=${page}`);
    }

    return this._http.get(getRequestUrl)
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public cast(id: number): Observable<SWPerson> {
        return this._http.get(`${this._baseUrl}/people/${id}`)
            .map((response: Response) => response.json());
  }

  public listShips(page?:number): Observable<any>
  {
    let getRequestUrl:string = `${this._baseUrl}/starships`
    if(page != null && !isNaN(page))
    {
      getRequestUrl = getRequestUrl.concat(`?page=${page}`);
    }

    return this._http.get(getRequestUrl)
    .map((response: Response) => response.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }  

  public ship(id:number): Observable<SWShip>
  {
    return this._http.get(`${this._baseUrl}/starships/${id}`)
    .map((response: Response) => response.json());
  }
}
