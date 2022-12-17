import { Local } from 'src/app/model/local';
import { Component } from '@angular/core';
import { LocalService } from 'src/app/service/local.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalle-local',
  templateUrl: './detalle-local.component.html',
  styleUrls: ['./detalle-local.component.css']
})
export class DetalleLocalComponent {
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
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/local']);
  }
}
