import { Pedido } from 'src/app/model/pedido';
import { Component } from '@angular/core';
import { PedidoService } from 'src/app/service/pedido.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent {
  pedido: Pedido = null;

  constructor(
    private pedidoService: PedidoService,
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
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/pedidos']);
  }
}
