import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClienteService } from 'src/app/services/cliente.service';
export interface IEmpleado{
  nombre: string,
  apellido: string,
  cedula: string,
  telefono: string
}
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private _servicioCliente: ClienteService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  displayedColumns: string[] = ['cedula', 'nombre', 'apellido', 'telefono', 'actions'];
  dataSource = new MatTableDataSource<IEmpleado>();

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  public obtenerClientes = () => {
    this._servicioCliente.getClientes().subscribe(data => {
      this.dataSource.data = data as IEmpleado[];
    },error => {
      console.log(error)
    });
  }
}
