import { Empleado } from './../../model/empleado';
import { Component } from '@angular/core';
import { Local } from 'src/app/model/local';
import { EmpleadoService } from 'src/app/service/empleado.service';
import { LocalService } from 'src/app/service/local.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent {
  empleado: Empleado = null;
  local: Local[] = [];


  constructor(
    private empleadoService: EmpleadoService,
    private localService: LocalService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const idEmpleado = this.activatedRoute.snapshot.params.idEmpleado;
    this.empleadoService.EmpleadoPorId(idEmpleado).subscribe(
      data => {
        this.empleado = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/empleados']);
      }
    );
    this.cargarLocal();
  }

  onUpdateEmpleado(): void {
    const idEmpleado = this.activatedRoute.snapshot.params.idEmpleado;
    this.empleadoService.ActualizarEmpleado(idEmpleado, this.empleado).subscribe(
      data => {
        this.toastr.success('Empleado Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/empleados']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/empleados']);
      }
    );
  }

  cargarLocal(): void {
    this.localService.ListaLocal().subscribe(
      data => {
        this.local = data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  compararLocal(o1:Local,o2:Local):boolean{
    if(o1 === undefined && o2 === undefined) return true;
    return o1 === null || o2 ===null ||o1 === undefined || o2 === undefined ? false: o1.idLocal ==o2.idLocal;
  }


}
