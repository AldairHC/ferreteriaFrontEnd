import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { LocalService } from '../service/local.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  cliente: Cliente[] = [];

  constructor(
    private clienteService: ClienteService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarCliente();
  }

  cargarCliente(): void {
    this.clienteService.ListaCliente().subscribe(
      data => {
        this.cliente = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrarCliente(idCliente: number) {
    this.clienteService.ElimnarCliente(idCliente).subscribe(
      data => {
        this.toastr.success('Cliente Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarCliente();
      },
      err => {
         this.toastr.success('Cliente Eliminada', 'OK', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.cargarCliente();
      }
    );
  }

}
