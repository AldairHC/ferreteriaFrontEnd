import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = 'http://localhost:8082/cliente';

  constructor(private httpClient: HttpClient) { }

  public ListaCliente(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.baseUrl);
  }

  public ClientePorId(idCliente: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.baseUrl + `/${idCliente}`);
  }


  public GuardarCliente(Cliente: Cliente): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, Cliente);
  }

  public ActualizarCliente(idCliente: number, Cliente: Cliente): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/${idCliente}`, Cliente);
  }

  public ElimnarCliente(idCliente: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/${idCliente}`);
  }
}
