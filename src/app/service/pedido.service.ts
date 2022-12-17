import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../model/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  baseUrl = 'http://localhost:8082/pedido';

  constructor(private httpClient: HttpClient) { }

  public ListaPedido(): Observable<Pedido[]> {
    return this.httpClient.get<Pedido[]>(this.baseUrl);
  }

  public PedidoPorId(idPedido: number): Observable<Pedido> {
    return this.httpClient.get<Pedido>(this.baseUrl + `/${idPedido}`);
  }


  public GuardarPedido(Pedido: Pedido): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, Pedido);
  }

  public ActualizarPedido(idPedido: number, Pedido: Pedido): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/${idPedido}`, Pedido);
  }

  public ElimnarPedido(idPedido: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/${idPedido}`);
  }
}
