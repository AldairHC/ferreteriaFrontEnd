import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  baseUrl = 'http://localhost:8082/categoria';

  constructor(private httpClient: HttpClient) { }

  public ListaCategoria(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(this.baseUrl);
  }

  public CategoriaPorId(idCategoria: number): Observable<Categoria> {
    return this.httpClient.get<Categoria>(this.baseUrl + `/${idCategoria}`);
  }


  public GuardarCategoria(Categoria: Categoria): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, Categoria);
  }

  public ActualizarCategoria(idCategoria: number, Categoria: Categoria): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/${idCategoria}`, Categoria);
  }

  public ElimnarCategoria(idCategoria: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/${idCategoria}`);
  }
}
