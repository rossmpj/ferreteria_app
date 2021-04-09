import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VentasService } from 'src/app/services/ventas.service';
import { FormProductoComponent } from '../productos/form-producto/form-producto.component';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    this.obtenerProductos();
    // this.paginator._intl.itemsPerPageLabel="Test String";
  }
  displayedColumns: string[] = ['codigo', 'fecha', 'total', 'cliente', 'empleado', 'actions'];
  dataSource = new MatTableDataSource<IProducto>();

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {    
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

   constructor (private _servicioVentas: VentasService,
    public dialog: MatDialog){}

    openDialog() {
      this.dialog.open(FormProductoComponent, {
        width: '700px',
        // height: '75%',
        data: ''
      });
    }
  public obtenerProductos = () => {
    this._servicioVentas.getVentas().subscribe(data => {
      this.dataSource.data = data as IProducto[];
      console.log("dataa",this.dataSource.data);
    },error => {
      console.log(error)
    });
  }
}

export interface IProducto {
  codigo: string;
  fecha: string;
  total: number;
  cliente: string;
  empleado: string;
}