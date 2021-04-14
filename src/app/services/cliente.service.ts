import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    url = "https://localhost:44362/"
    api = "api/Cliente/"
    constructor(private http: HttpClient) { }

    getClientes(): Observable<any>{
        return this.http.get(this.url + this.api);
    }

    getClienteById(cedula: string): Observable<any>{
        return this.http.get(this.url + this.api + cedula);
    }
    
    postCliente(cliente: any): Observable<any>{
        return this.http.post(this.url + this.api, cliente);
    }

    updateCliente(cedula: string, cliente: any): Observable<any>{
        return this.http.put(this.url + this.api + cedula, cliente);
    }
    
    deleteCliente(cedula: string): Observable<any>{
        return this.http.delete(this.url + this.api + cedula);
    }
}
