import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pedido } from 'src/app/model/pedido';
import { Producto } from 'src/app/model/producto';
import { PedidoService } from 'src/app/service/pedido.service';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-guardar-pedido',
  templateUrl: './guardar-pedido.component.html',
  styleUrls: ['./guardar-pedido.component.css']
})
export class GuardarPedidoComponent {
  pedido : Pedido = new Pedido();
  producto: Producto[] = [];

  constructor(
    private pedidoService: PedidoService,
    private productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
    this.cargarProducto();
  }

  crearPedido(): void {
    this.pedidoService.GuardarPedido(this.pedido).subscribe(
      pedido => {
        this.toastr.success('Pedido Registrado Correctamente', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/pedidos']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/pedidos']);
      }
    );
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
}
