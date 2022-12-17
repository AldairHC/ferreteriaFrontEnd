import { Categoria } from './../../model/categoria';
import { Component } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent {
  categoria: Categoria = null;

  constructor(
    private categoriaService: CategoriaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const idCategoria = this.activatedRoute.snapshot.params.idCategoria;
    this.categoriaService.CategoriaPorId(idCategoria).subscribe(
      data => {
        this.categoria = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/categorias']);
      }
    );

  }

  onUpdateCategoria(): void {
    const idCategoria = this.activatedRoute.snapshot.params.idCategoria;
    this.categoriaService.ActualizarCategoria(idCategoria, this.categoria).subscribe(
      data => {
        this.toastr.success('Categoria Actualizado', 'OK', {
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
}
