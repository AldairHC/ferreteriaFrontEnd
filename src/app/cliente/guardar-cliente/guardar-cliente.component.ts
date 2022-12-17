import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/model/cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-guardar-cliente',
  templateUrl: './guardar-cliente.component.html',
  styleUrls: ['./guardar-cliente.component.css']
})
export class GuardarClienteComponent {
  cliente : Cliente = new Cliente();

  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {

  }

  crearCliente(): void {
    this.clienteService.GuardarCliente(this.cliente).subscribe(
      cliente => {
        this.toastr.success('Cliente Registrado Correctamente', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/clientes']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/clientes']);
      }
    );
  }

}
