import { Proveedor } from './../model/proveedor';
import { Component } from '@angular/core';
import { ProveedorService } from '../service/proveedor.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent {
  proveedor: Proveedor[] = [];

  constructor(
    private proveedorService: ProveedorService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarProveedor();
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

  borrarProveedor(idProveedor: number) {
    this.proveedorService.ElimnarProveedor(idProveedor).subscribe(
      data => {
        this.toastr.success('Proveedor Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarProveedor();
      },
      err => {
         this.toastr.success('Proveedor Eliminada', 'OK', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.cargarProveedor();
      }
    );
  }
}
