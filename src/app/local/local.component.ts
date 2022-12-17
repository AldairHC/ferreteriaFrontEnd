import { Local } from './../model/local';
import { Component } from '@angular/core';
import { LocalService } from '../service/local.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent {
  local: Local[] = [];

  constructor(
    private localService: LocalService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarLocal();
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

  borrarLocal(idLocal: number) {
    this.localService.ElimnarLocal(idLocal).subscribe(
      data => {
        this.toastr.success('Local Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarLocal();
      },
      err => {
         this.toastr.success('Local Eliminado', 'OK', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.cargarLocal();
      }
    );
  }

}
