import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
export interface IEmpleado{
  usuario: string,
  nombre: string,
  apellido: string,
  cedula: string,
  correo: string
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private _servicioEmpleado: EmpleadoService) { }
  

  ngOnInit() {

  }

}
