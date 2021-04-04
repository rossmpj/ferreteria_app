import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  url = "https://localhost:44362/"
  api = "api/Empleado"
  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<any>{
    return this.http.get(this.url+this.api);
  }
}
