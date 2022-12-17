import { ProveedorService } from './../../service/proveedor.service';
import { Proveedor } from './../../model/proveedor';
import { CategoriaService } from './../../service/categoria.service';
import { ProductoService } from './../../service/producto.service';
import { Producto } from './../../model/producto';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/categoria';

@Component({
  selector: 'app-guardar-producto',
  templateUrl: './guardar-producto.component.html',
  styleUrls: ['./guardar-producto.component.css']
})
export class GuardarProductoComponent {
  producto : Producto = new Producto();
  categoria: Categoria[] = [];
  proveedor: Proveedor[] = [];
  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private proveedorService: ProveedorService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
    this.cargarCategoria();
    this.cargarProveedor();
  }

  crearProducto(): void {
    this.productoService.GuardarProducto(this.producto).subscribe(
      producto => {
        this.toastr.success('Categoria Registrado Correctamente', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/productos']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/productos']);
      }
    );
  }

  cargarCategoria(): void {
    this.categoriaService.ListaCategoria().subscribe(
      data => {
        this.categoria = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  cargarProveedor(): void {
    this.proveedorService.ListaProveedor().subscribe(
      data => {
        this.proveedor = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
