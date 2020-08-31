import { Injectable } from '@angular/core';
import { AngularFirestore,
        AngularFirestoreCollection,
        AngularFirestoreDocument } from '@angular/fire/firestore';
import { Producto } from '../interfaces/producto';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ConexionService {
    private productosCollection: AngularFirestoreCollection<Producto>;
    productos: Observable<Producto[]>;

    // Esto se utiliza para el evento delete
    private productDoc: AngularFirestoreDocument<Producto>;
    // Editar
    private productoEditar: any = {
        consola: '',
        nombre: '',
        descripcion: '',
        imagen: '',
        precio: ''
    };

    constructor(
        private _afs: AngularFirestore
        ){
        this.productosCollection = _afs.collection<Producto>("productos");
        // sirve solamente para desplegar la lista
        // this.productos = this.productosCollection.valueChanges();
        // para obtener tambien el ID se usa lo siguiente
        this.productos = this.productosCollection.snapshotChanges().pipe(
            map(actions =>{
                return actions.map(a =>{
                    const data = a.payload.doc.data() as Producto;
                    const id = a.payload.doc.id;
                    return {id, ...data};
                })
            })
        )

    }

    listaProductos(){
        return this.productos;
    }

    addProducto(producto: Producto){
        this.productosCollection.add(producto);
        // console.log("Conexcion Service");
        
    }

    deleteProducto(producto){
        this.productDoc = this._afs.doc<Producto>(`productos/${producto.id}`);
        this.productDoc.delete();
    }

    updateProducto(producto){
        this.productDoc = this._afs.doc<Producto>(`productos/${producto.id}`);
        this.productDoc.update(producto);
    }
}