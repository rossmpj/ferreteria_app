import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmpleadoService {
    url = "https://localhost:44362/"
    api = "api/Empleado/"
    constructor(private http: HttpClient) { }

    getEmpleados(): Observable<any>{
        return this.http.get(this.url + this.api);
    }

    getEmpleadoById(cedula: string): Observable<any>{
        return this.http.get(this.url + this.api + cedula);
    }
    
    postEmpleado(empleado: any): Observable<any>{
        return this.http.post(this.url + this.api, empleado);
    }

    updateEmpleado(cedula: string, empleado: any): Observable<any>{
        return this.http.put(this.url + this.api + cedula, empleado);
    }
    
    deleteEmpleado(cedula: string): Observable<any>{
        return this.http.delete(this.url + this.api + cedula);
    }
}
