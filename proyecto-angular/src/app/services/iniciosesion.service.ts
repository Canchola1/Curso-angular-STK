import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
    providedIn: 'root'
  })
export class InicioSesionService{

    private usuarios: Array<Usuario>;

    constructor(){
        this.usuarios = [
            new Usuario('1', 'Canchola', 'Jorge Luis', 'López Canchola', 'jorge.lopezc@softtek.com', 'admin'),
            new Usuario('2', 'Admin', 'Admin', 'Admin', 'admin@softtek.com', 'admin')
        ];
    }

    
    validarSesion(usuario: Usuario): Usuario{
        // this.usuarios.forEach(usuarioLoggeo => {
        //     if(usuario.correo == usuarioLoggeo.correo && usuario.contrasenia == usuarioLoggeo.contrasenia){
        //         return usuarioLoggeo;
        //     }
        //     console.log("usuario1: ");
        //     console.log(usuarioLoggeo);
        //     console.log("usuario2: ");
        //     console.log(usuario);
        // });
        // return new Usuario('asdf', 'asdf', 'asdf', 'asdf', 'adsf', 'asdf');

        for(let i = 0; i < this.usuarios.length; i++){
            if(usuario.correo == this.usuarios[i].correo && usuario.contrasenia == this.usuarios[i].contrasenia){
                return this.usuarios[i];
            }

        }
        return new Usuario('', '', '', '', '', '');
    }
}
