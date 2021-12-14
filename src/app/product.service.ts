import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operator/map';
Http

@Injectable()
export class ProductService {

  private _albumUrl = "../assets/album.json";

  getAlbum(id:number){
    this._http.get(this._albumUrl).pipe(
      
    );
  }

  constructor(private _http:Http) { }

}
