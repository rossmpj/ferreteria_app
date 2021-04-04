import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmpleadoService } from 'src/app/services/empleado.service';
export interface IEmpleado{
  usuario: string,
  nombre: string,
  apellido: string,
  cedula: string,
  correo: string
}
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(private _servicioEmpleado: EmpleadoService) { }
  public obtenerEmpleados = () => {
    this._servicioEmpleado.getEmpleados().subscribe(data => {
      this.dataSource.data = data as IEmpleado[];
    },error => {
      console.log(error)
    });
  }
  displayedColumns: string[] = ['idEmpleado', 'nombre', 'apellido', 'cedula', 'correo', 'actions'];
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

  ngAfterViewInit() {    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.obtenerEmpleados();
  }

}
