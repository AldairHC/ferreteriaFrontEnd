import { LocalService } from './../../service/local.service';
import { EmpleadoService } from './../../service/empleado.service';
import { Empleado } from './../../model/empleado';
import { Component } from '@angular/core';
import { Local } from 'src/app/model/local';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardar-empleado',
  templateUrl: './guardar-empleado.component.html',
  styleUrls: ['./guardar-empleado.component.css']
})
export class GuardarEmpleadoComponent {
  empleado : Empleado = new Empleado();
  local: Local[] = [];

  constructor(
    private empleadoService: EmpleadoService,
    private localService: LocalService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
    this.cargarLocal();
  }

  crearEmpleado(): void {
    this.empleadoService.GuardarEmpleado(this.empleado).subscribe(
      empleado => {
        this.toastr.success('Empleado Registrado Correctamente', 'OK', {
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
      },
      err => {
        console.log(err);
      }
    );
  }

}
