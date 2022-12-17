import { Proveedor } from './../../model/proveedor';
import { Component } from '@angular/core';
import { ProveedorService } from 'src/app/service/proveedor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalle-proveedor',
  templateUrl: './detalle-proveedor.component.html',
  styleUrls: ['./detalle-proveedor.component.css']
})
export class DetalleProveedorComponent {
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
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/proveedors']);
  }
}
