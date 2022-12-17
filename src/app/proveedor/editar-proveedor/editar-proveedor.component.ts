import { Proveedor } from './../../model/proveedor';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProveedorService } from 'src/app/service/proveedor.service';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent {
  proveedor: Proveedor = null;

  constructor(
    private proveedorService: ProveedorService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const idProveedor = this.activatedRoute.snapshot.params.idProveedor;
    this.proveedorService.ProveedorPorId(idProveedor).subscribe(
      data => {
        this.proveedor = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/proveedor']);
      }
    );

  }

  onUpdateProveedor(): void {
    const idProveedor = this.activatedRoute.snapshot.params.idProveedor;
    this.proveedorService.ActualizarProveedor(idProveedor, this.proveedor).subscribe(
      data => {
        this.toastr.success('Proveedor Actualizado', 'OK', {
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
