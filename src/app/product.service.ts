import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Album } from './album';

import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {

  private _albumUrl = "../assets/album.json";

  getAlbum: Observable<Album> (id:number){
    return this._http.get(this._albumUrl).map((response)=>response.json() <Album>);
  };

  constructor(private _http:Http) { }

}
