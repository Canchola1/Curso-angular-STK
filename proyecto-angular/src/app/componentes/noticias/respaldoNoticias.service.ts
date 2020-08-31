import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
// import { Noticia } from '../../models/noticia';

@Injectable({
    providedIn: 'root'
  })
export class RespaldoNoticiasService{

    constructor(
        private _http: HttpClient
    ){

    }

    getNoticias(){
        return this._http.get("https://jsonplaceholder.typicode.com/posts");
    }
    
  
}