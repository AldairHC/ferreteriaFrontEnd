import { Producto } from './../model/producto';
import { Component } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  producto: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarProducto();
  }

  cargarProducto(): void {
    this.productoService.ListaProducto().subscribe(
      data => {
        this.producto = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrarProducto(idProducto: number) {
    this.productoService.ElimnarProducto(idProducto).subscribe(
      data => {
        this.toastr.success('Producto Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarProducto();
      },
      err => {
         this.toastr.success('Producto Eliminada', 'OK', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.cargarProducto();
      }
    );
  }
}
