import { Local } from './../../model/local';
import { Component } from '@angular/core';
import { LocalService } from 'src/app/service/local.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-local',
  templateUrl: './editar-local.component.html',
  styleUrls: ['./editar-local.component.css']
})
export class EditarLocalComponent {
  local: Local = null;

  constructor(
    private localService: LocalService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const idLocal = this.activatedRoute.snapshot.params.idLocal;
    this.localService.LocalPorId(idLocal).subscribe(
      data => {
        this.local = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/local']);
      }
    );

  }

  onUpdateLocal(): void {
    const idLocal = this.activatedRoute.snapshot.params.idLocal;
    this.localService.ActualizarLocal(idLocal, this.local).subscribe(
      data => {
        this.toastr.success('Local Actualizado', 'OK', {
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
