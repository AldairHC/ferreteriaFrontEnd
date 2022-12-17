import { Local } from './../../model/local';
import { Component } from '@angular/core';
import { LocalService } from 'src/app/service/local.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardar-local',
  templateUrl: './guardar-local.component.html',
  styleUrls: ['./guardar-local.component.css']
})
export class GuardarLocalComponent {
  local : Local = new Local();

  constructor(
    private localService: LocalService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {

  }

  crearLocal(): void {
    this.localService.GuardarLocal(this.local).subscribe(
      local => {
        this.toastr.success('Local Registrado Correctamente', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/local']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/local']);
      }
    );
  }

}
