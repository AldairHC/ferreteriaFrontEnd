import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-guardar-categoria',
  templateUrl: './guardar-categoria.component.html',
  styleUrls: ['./guardar-categoria.component.css']
})
export class GuardarCategoriaComponent {
  categoria : Categoria = new Categoria();

  constructor(
    private categoriaService: CategoriaService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  crearCAtegoria(): void {
    this.categoriaService.GuardarCategoria(this.categoria).subscribe(
      categoria => {
        this.toastr.success('Categoria Registrado Correctamente', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/categorias']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/categorias']);
      }
    );
  }

  guardar(){
    console.log(this.categoria);
    this.crearCAtegoria();
  }
}
