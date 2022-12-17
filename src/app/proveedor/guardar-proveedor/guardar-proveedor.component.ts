import { Proveedor } from './../../model/proveedor';
import { Component } from '@angular/core';
import { ProveedorService } from 'src/app/service/proveedor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardar-proveedor',
  templateUrl: './guardar-proveedor.component.html',
  styleUrls: ['./guardar-proveedor.component.css']
})
export class GuardarProveedorComponent {
  proveedor : Proveedor = new Proveedor();

  constructor(
    private proveedorService: ProveedorService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {

  }

  crearProveedor(): void {
    this.proveedorService.GuardarProveedor(this.proveedor).subscribe(
      proveedor => {
        this.toastr.success('Proveedor Registrado Correctamente', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/proveedor']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/proveedor']);
      }
    );
  }


}
