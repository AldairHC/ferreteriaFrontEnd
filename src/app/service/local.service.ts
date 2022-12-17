import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Local } from '../model/local';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  baseUrl = 'http://localhost:8082/local';

  constructor(private httpClient: HttpClient) { }

  public ListaLocal(): Observable<Local[]> {
    return this.httpClient.get<Local[]>(this.baseUrl);
  }

  public LocalPorId(idLocal: number): Observable<Local> {
    return this.httpClient.get<Local>(this.baseUrl + `/${idLocal}`);
  }


  public GuardarLocal(Local: Local): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, Local);
  }

  public ActualizarLocal(idLocal: number, Local: Local): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/${idLocal}`, Local);
  }

  public ElimnarLocal(idLocal: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/${idLocal}`);
  }
}
