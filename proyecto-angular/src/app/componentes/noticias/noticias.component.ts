import { Component, OnInit } from '@angular/core';
import { RespaldoNoticiasService } from "./respaldoNoticias.service";
import { Noticia } from '../../models/noticia';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  public noticias: any;
  public noticiasPrincipales: Array<Noticia>;

  constructor(
    private noticiasService: RespaldoNoticiasService
  ) { 
    
  }

  ngOnInit(): void {
    this.getNoticias();
   
  }

  getNoticias(){
    this.noticiasService.getNoticias().subscribe(
      (noticias: Noticia) => {
        this.noticias = noticias
        // console.log("noticias:" +JSON.stringify(this.noticias));
        
      },
      (err: HttpErrorResponse) => {
        // console.log(err);
        console.log(err.message);
      },
      () => {
        console.log('petición finalizó');
      }
      );

  }

}
