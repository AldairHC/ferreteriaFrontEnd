import { Categoria } from './../model/categoria';
import { Component } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  categoria: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarCategoria();
  }

  cargarCategoria(): void {
    this.categoriaService.ListaCategoria().subscribe(
      data => {
        this.categoria = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrarCategoria(idCategoria: number) {
    this.categoriaService.ElimnarCategoria(idCategoria).subscribe(
      data => {
        this.toastr.success('Categoria Eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarCategoria();
      },
      err => {
         this.toastr.success('Categoria Eliminada', 'OK', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.cargarCategoria();
      }
    );
  }


}
