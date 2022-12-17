import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from '../model/empleado';
import { EmpleadoService } from '../service/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  empleado: Empleado[] = [];

  constructor(
    private empleadoService: EmpleadoService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarEmpleado();
  }

  cargarEmpleado(): void {
    this.empleadoService.ListaEmpleado().subscribe(
      data => {
        this.empleado = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrarEmpleado(idEmpleado: number) {
    this.empleadoService.ElimnarEmpleado(idEmpleado).subscribe(
      data => {
        this.toastr.success('Empleado Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarEmpleado();
      },
      err => {
         this.toastr.success('Empleado Eliminada', 'OK', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.cargarEmpleado();
      }
    );
  }
}
