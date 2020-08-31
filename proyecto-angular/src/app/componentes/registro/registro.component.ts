import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario'
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [ UsuarioService ]
})
export class RegistroComponent implements OnInit {

  public usuario : Usuario;

  constructor(
    private _usuarioService: UsuarioService,
    private router:Router
  ) { 
    this.usuario = new Usuario('', '', '', '', '', '');
  }

  ngOnInit(): void {
  }

  guardarUsuarioregistrado(){
    if(this._usuarioService.addUsuario(this.usuario)){     
      this.router.navigateByUrl('inicio');
      var elemento = document.getElementById('encabezadooculto');
      elemento.style.display = 'inline-block';
      console.log(elemento);
      
    }
    
  }

}
