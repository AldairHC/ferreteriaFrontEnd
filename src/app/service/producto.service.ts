import { Proveedor } from './../model/proveedor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/categoria';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  baseUrl = 'http://localhost:8082/producto';
  baseUrl2 = 'http://localhost:8082/categoria';
  baseUrl3 = 'http://localhost:8082/proveedor';

  constructor(private httpClient: HttpClient) { }

  public ListaProducto(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.baseUrl);
  }

  public ProductoPorId(idProducto: number): Observable<Producto> {
    return this.httpClient.get<Producto>(this.baseUrl + `/${idProducto}`);
  }


  public GuardarProducto(Producto: Producto): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, Producto);
  }

  public ActualizarProducto(idProducto: number, Producto: Producto): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/${idProducto}`, Producto);
  }

  public ElimnarProducto(idProducto: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/${idProducto}`);
  }

  public ListaCategoria(): Observable<Categoria[]> {
    return this.httpClient.get<Categoria[]>(this.baseUrl2);
  }

  public ListaProveedor(): Observable<Proveedor[]> {
    return this.httpClient.get<Proveedor[]>(this.baseUrl2);
  }

}
