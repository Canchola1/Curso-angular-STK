import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable()
export class UsuarioService{

    
    addUsuario(usuario: Usuario):boolean{
        // Logica para persistir el usuario
        console.log(usuario);
        // validar si fue exitoso
        return true;
    }
}