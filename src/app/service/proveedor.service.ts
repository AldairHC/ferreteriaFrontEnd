import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../model/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  baseUrl = 'http://localhost:8082/proveedor';

  constructor(private httpClient: HttpClient) { }

  public ListaProveedor(): Observable<Proveedor[]> {
    return this.httpClient.get<Proveedor[]>(this.baseUrl);
  }

  public ProveedorPorId(idProveedor: number): Observable<Proveedor> {
    return this.httpClient.get<Proveedor>(this.baseUrl + `/${idProveedor}`);
  }


  public GuardarProveedor(proveedor: Proveedor): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, proveedor);
  }

  public ActualizarProveedor(idProveedor: number, proveedor: Proveedor): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/${idProveedor}`, proveedor);
  }

  public ElimnarProveedor(idProveedor: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/${idProveedor}`);
  }
}
