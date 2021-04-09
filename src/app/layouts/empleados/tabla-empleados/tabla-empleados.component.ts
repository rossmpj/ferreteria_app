import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IEmpleado } from 'src/app/interfaces/iempleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { FormEmpleadoComponent } from '../form-empleado/form-empleado.component';

@Component({
  selector: 'app-tabla-empleados',
  templateUrl: './tabla-empleados.component.html',
  styleUrls: ['./tabla-empleados.component.css']
})
export class TablaEmpleadosComponent implements OnInit {
  constructor(private _servicioEmpleado: EmpleadoService,
    public dialog: MatDialog) { }
  public obtenerEmpleados = () => {
    this._servicioEmpleado.getEmpleados().subscribe(data => {
      this.dataSource.data = data as IEmpleado[];
    },error => {
      console.log(error)
    });
  }
  openDialog(producto: IEmpleado) {
    console.log("prod: ",producto);
     this.obtenerProductoId(producto.idEmpleado);
    // this.dialog.open(ModalComponent, {
    //     width: '700px',
        // height: '75%',
        // data: producto 
    //     {nombre: this.nombre, precio: this.precio,
    //     categoria: this.categoria, medida: this.medida, marca: this.marca,
    // color: this.color, stock: this.stock}
    // });
}
public obtenerProductoId = (id: string) => {
  this._servicioEmpleado.getEmpleadoById(id).subscribe(data => {
      // console.log("dataa",this.dataSource.data);
      // this.nombre = data.nombre;
      // this.precio = data.precio;
      // this.categoria = data.idCategoria;
      // this.color = data.idColor;
      // this.stock = data.stock;
      // this.medida = data.medida;
      // this.marca = data.idMarca;
      console.log("p ",data);
      this.dialog.open(FormEmpleadoComponent, {
          width: '700px',
          // height: '75%',
          data: data as IEmpleado[]
      //     {nombre: this.nombre, precio: this.precio,
      //     categoria: this.categoria, medida: this.medida, marca: this.marca,
      // color: this.color, stock: this.stock}
      });
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
