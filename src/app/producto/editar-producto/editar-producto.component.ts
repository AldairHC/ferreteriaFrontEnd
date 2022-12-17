import { ProveedorService } from './../../service/proveedor.service';
import { Proveedor } from './../../model/proveedor';
import { Producto } from './../../model/producto';
import { Component } from '@angular/core';
import { ProductoService } from 'src/app/service/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {
  producto: Producto = null;
  categoria: Categoria[] = [];
  proveedor: Proveedor[] = [];

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private proveedorService: ProveedorService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const idProducto = this.activatedRoute.snapshot.params.idProducto;
    this.productoService.ProductoPorId(idProducto).subscribe(
      data => {
        this.producto = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/productos']);
      }
    );
    this.cargarCategoria();
    this.cargarProveedor();
  }

  onUpdateProducto(): void {
    const idProducto = this.activatedRoute.snapshot.params.idProducto;
    this.productoService.ActualizarProducto(idProducto, this.producto).subscribe(
      data => {
        this.toastr.success('Producto Actualizado', 'OK', {
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
        console.log(data);
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
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  compararCategoria(o1:Categoria,o2:Categoria):boolean{
    if(o1 === undefined && o2 === undefined) return true;
    return o1 === null || o2 ===null ||o1 === undefined || o2 === undefined ? false: o1.idCategoria ==o2.idCategoria;
  }

  compararProveedor(o1:Proveedor,p2:Proveedor):boolean{
    if(o1 === undefined && p2 === undefined) return true;
    return o1 === null || p2 ===null ||o1 === undefined || p2 === undefined ? false: o1.idProveedor ==p2.idProveedor;
  }


}
