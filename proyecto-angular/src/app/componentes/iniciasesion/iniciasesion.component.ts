import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Usuario } from 'src/app/models/usuario';
import { InicioSesionService } from '../../services/iniciosesion.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-iniciasesion',
  templateUrl: './iniciasesion.component.html',
  styleUrls: ['./iniciasesion.component.css']
})
export class IniciasesionComponent implements OnInit {

  public usuarioAux: Usuario;
  public usuario: Usuario;
  public mensajeInicioSesion: string;
  private mensajeInicioFallido: string = "Lo sentimos, el usuario y/o contraseña no son válidos";

  constructor(
    private _inicioSesionService: InicioSesionService,
    private router:Router,
    public _authS: AuthService
    ) {
    this.usuario = new Usuario('', '', '', '', '', '');
    this.usuarioAux = new Usuario('', '', '', '' ,'' ,'');
   }

  ngOnInit(): void {
  }

  validarInicioSesion():void{
    this.usuario = this._inicioSesionService.validarSesion(this.usuarioAux);
    this.usuarioAux = new Usuario('', '', '', '', '', '');
    if(this.usuario._id != ''){
      this.mensajeInicioSesion = "Bienvenido"+ " "+ this.usuario.nombre + " " +this.usuario.apellidos;
      this.router.navigateByUrl('inicio'); 
      var elemento = document.getElementById('bienvenida');
      elemento.style.display = 'block';
      elemento.innerHTML = this.mensajeInicioSesion;
      var elemento = document.getElementById('encabezadooculto');
      elemento.style.display = 'inline-block';

      // var divRegistro = document.getElementById('botonesregistro');
      // let seccionregistro = document.getElementById('seccionbotonera');
      // console.log('DIV REGISTRO');
      // console.log(divRegistro);
      // console.log('DIV REGISTRO 2');
      // console.log(seccionregistro);
    
      // var divLogout = document.getElementById('logout');
      // divLogout.style.display = 'inline';
    }else{
      this.mensajeInicioSesion = this.mensajeInicioFallido;
    }
   
    
    // document.getElementById('bienvenida').innerText('');
    
  }

 
}
