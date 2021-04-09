import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ICliente } from 'src/app/interfaces/icliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormClienteComponent } from '../form-cliente/form-cliente.component';

@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css']
})
export class TablaClientesComponent implements OnInit {
  constructor(private _servicioCliente: ClienteService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  displayedColumns: string[] = ['cedula', 'nombre', 'apellido', 'telefono', 'actions'];
  dataSource = new MatTableDataSource<ICliente>();

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
      this.dataSource.data = data as ICliente[];
    },error => {
      console.log(error)
    });
  }

  openDialog(producto: ICliente) {
    console.log("prod: ",producto);
     this.obtenerProductoId(producto.cedula);
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
  this._servicioCliente.getClienteById(id).subscribe(data => {
      // console.log("dataa",this.dataSource.data);
      // this.nombre = data.nombre;
      // this.precio = data.precio;
      // this.categoria = data.idCategoria;
      // this.color = data.idColor;
      // this.stock = data.stock;
      // this.medida = data.medida;
      // this.marca = data.idMarca;
      console.log("p ",data);
      this.dialog.open(FormClienteComponent, {
          width: '700px',
          // height: '75%',
          data: data as ICliente[]
      //     {nombre: this.nombre, precio: this.precio,
      //     categoria: this.categoria, medida: this.medida, marca: this.marca,
      // color: this.color, stock: this.stock}
      });
  },error => {
      console.log(error)
  });
}
}
