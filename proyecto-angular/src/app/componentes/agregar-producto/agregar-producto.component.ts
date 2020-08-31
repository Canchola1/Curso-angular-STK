import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';
import { AuthService } from '../../services/auth.service';
declare var $:any;

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  producto: any = {
    consola: '',
    nombre: '',
    precio: '',
    uid: '',
    descripcion: '',
    comprador: ''
  };
  constructor(
    private _conexion: ConexionService,
    public _authS: AuthService
  ) { }

  ngOnInit(): void {
  }

  agregar() {
    this.producto.uid = this._authS.usuario.uid;
    this._conexion.addProducto(this.producto);
    // $('#modalAgregarProducto').on('shown.bs.modal', function () {
    //   $('#myInput').trigger('focus')
    // })
  }

  limpiarProducto(){
    this.producto = {};
  }

}
