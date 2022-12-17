import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../model/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  baseUrl = 'http://localhost:8082/empleado';

  constructor(private httpClient: HttpClient) { }

  public ListaEmpleado(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(this.baseUrl);
  }

  public EmpleadoPorId(idEmpleado: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(this.baseUrl + `/${idEmpleado}`);
  }


  public GuardarEmpleado(Empleado: Empleado): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl, Empleado);
  }

  public ActualizarEmpleado(idEmpleado: number, Empleado: Empleado): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + `/${idEmpleado}`, Empleado);
  }

  public ElimnarEmpleado(idEmpleado: number): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + `/${idEmpleado}`);
  }
}
