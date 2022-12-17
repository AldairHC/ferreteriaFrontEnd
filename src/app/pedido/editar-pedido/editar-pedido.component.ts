import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pedido } from 'src/app/model/pedido';
import { Producto } from 'src/app/model/producto';
import { PedidoService } from 'src/app/service/pedido.service';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.css']
})
export class EditarPedidoComponent {
  pedido : Pedido = new Pedido();
  producto: Producto[] = [];

  constructor(
    private pedidoService: PedidoService,
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
    ) { }

    ngOnInit() {
      const idPedido = this.activatedRoute.snapshot.params.idPedido;
      this.pedidoService.PedidoPorId(idPedido).subscribe(
        data => {
          this.pedido = data;
        },
        err => {
          this.toastr.error(err.error.mensaje, 'Error', {
            timeOut: 3000,  positionClass: 'toast-top-center',
          });
          this.router.navigate(['/pedido']);
        }
      );
      this.cargarProducto();

    }

    onUpdatePedido(): void {
      const idPedido = this.activatedRoute.snapshot.params.idPedido;
      this.pedidoService.ActualizarPedido(idPedido, this.pedido).subscribe(
        data => {
          this.toastr.success('Pedido Actualizado', 'OK', {
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

  compararProducto(p1:Pedido,p2:Pedido):boolean{
    if(p1 === undefined && p2 === undefined) return true;
    return p1 === null || p2 ===null ||p1 === undefined || p2 === undefined ? false: p1.idPedido ==p2.idPedido;
  }
}
