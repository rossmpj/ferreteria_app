import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ProductoService } from '../../../services/producto.service';

export interface IProducto {
  idProducto: number;
  nombre: string;
  precio: number;
  medida: string;
  imagen: string;
  stock: number;
  idColor: number;
  idCategoria: number;
  idMarca: number;
}
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  animal!: string;
  name!: string;
  ngOnInit(): void {
    this.obtenerProductos();
  }
  displayedColumns: string[] = ['idProducto', 'nombre', 'precio', 'medida', 'stock', 'categoria', 'color', 'marca', 'actions'];
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

   constructor (private _serviceProducto: ProductoService,
    public dialog: MatDialog,
    private router: Router,
    ){}

  public obtenerProductos = () => {
    this._serviceProducto.getProductos().subscribe(data => {
      this.dataSource.data = data as IProducto[];
      console.log("dataa",this.dataSource.data);
    },error => {
      console.log(error)
    });
  }
  onSubmit():void {  
    this.router.navigate(['/form-producto']);
    
}  
}
