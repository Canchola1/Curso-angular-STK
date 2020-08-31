import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public productos: any;
  public agregar: boolean;
  private productosFiltrados: any;
  private productosTodos: any;
  productoEditar: any = {
    consola: "",
    nombre: "",
    precio: "",
    descripcion: ""
  };

  constructor(private _conexion: ConexionService, public _authS: AuthService) {
    this._conexion.listaProductos().subscribe(
      data => {
        this.productos = data;
        this.productosTodos = data;
        console.log("Productos: ");
        console.log(JSON.stringify(this.productos));
        console.log("ProductosTodos1: ");
        console.log(JSON.stringify(this.productosTodos));


      },
      err => {
        console.log(err);

      }
    );
    // this.productosTodos = this.productos;
    console.log('Productos Todos: ', JSON.stringify(this.productosTodos));
    
  }

  ngOnInit(): void {
  }

  botonAgregar() {
    this.agregar = true;
  }

  pruebaClick() {
    console.log('Prueba Click');
    this.agregar = false;

  }

  eliminar(producto: any) {
    console.log('eliminar');
    console.log(producto);
    
    
    this._conexion.deleteProducto(producto);
  }

  editar(producto: any) {
    this.productoEditar = producto;
    // this._conexion.updateProducto(producto)
  }

  agregarProductoEditado() {
    this._conexion.updateProducto(this.productoEditar);
  }

  comprar(producto: any){
    producto.comprador = this._authS.usuario.uid;
    this._conexion.updateProducto(producto);
  }

  filtrarTodos(){
    this.productos = this.productosTodos;
    this.agregar = false;
  }

  filtrarPS4(){
    this.productosFiltrados = [];    
    this.productosTodos.forEach(element => {
      if(element.consola == "PS4"){
        this.productosFiltrados.push(element);
      }
    });
    this.productos = this.productosFiltrados;
    this.agregar = false;
  }

  filtrarXbox(){
    this.productosFiltrados = [];    
    this.productosTodos.forEach(element => {
      if(element.consola == "XBox One"){
        this.productosFiltrados.push(element);
      }
    });
    this.productos = this.productosFiltrados;
    this.agregar = false;
  }

  filtrarWiiU(){
    this.productosFiltrados = [];    
    this.productosTodos.forEach(element => {
      if(element.consola == "WiiU"){
        this.productosFiltrados.push(element);
      }
    });
    this.productos = this.productosFiltrados;
    this.agregar = false;
  }

}
