import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Pedido } from '../model/pedido';
import { PedidoService } from '../service/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  pedido: Pedido[] = [];

  constructor(
    private pedidoService: PedidoService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarPedido();
  }

  cargarPedido(): void {
    this.pedidoService.ListaPedido().subscribe(
      data => {
        this.pedido = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrarPedido(idPedido: number) {
    this.pedidoService.ElimnarPedido(idPedido).subscribe(
      data => {
        this.toastr.success('Pedido Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarPedido();
      },
      err => {
         this.toastr.success('Pedido Eliminada', 'OK', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.cargarPedido();
      }
    );
  }
}
