import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Location } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductoService } from 'src/app/services/producto.service';
import { IProducto } from 'src/app/interfaces/iproducto';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FacturaComponent } from '../factura/factura.component';

@Component({
  providers:  [FacturaComponent],
  selector: 'app-form-venta',
  templateUrl: './form-venta.component.html',
  styleUrls: ['./form-venta.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class FormVentaComponent implements OnInit {
  datos!: any;  
  accion!: string;
  value = 0;
  formInstance!: FormGroup;
  articulo: any[] = [];
  getUpdatedvalue() {  
    console.log("ev:",this.articulo);  
    // this.articulo = $event;  
} 
  handleMinus() {
    this.value--;  
  }
  handlePlus() {
    this.value++;    
  }
  displayedColumns: string[] = ['idProducto', 'nombre', 'precio', 'medida', 'stock', 'idColor', 'idMarca', 'actions'];
  dataSource = new MatTableDataSource<IProducto>();

    private paginator!: MatPaginator;
    private sort!: MatSort;

    @ViewChild(MatSort) set matSort(ms: MatSort) {
        this.sort = ms;
        this.setDataSourceAttributes();
    }

    @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
        this.paginator = mp;
        this.setDataSourceAttributes();
    }

    setDataSourceAttributes() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
}
 addCart(element: IProducto){
   this.articulo.push(element);
  //  this.articulo?.forEach(e => {
  //  console.log("art: ",e);
  //  });
   console.log(this.articulo);
 }
  onSubmit():void {  
    // this.router.navigate(['/table-list']) 
    this.location.back(); 
}  
  constructor(
    private _servicioClientes: ClienteService,
    private _servicioProducto: ProductoService,
    private location: Location
  ) {
    this.formInstance = new FormGroup({                
      "idCliente":  new FormControl('', Validators.required),
      "fecha":  new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
    this.obtenerClientes();
    // this.articulo = 
    this.obtenerProductos();
    // this.transactions?.push({
    //   "idCategoria": 1,
    //   "idColor": 2,
    //   "idMarca": 2,
    //   "idProducto": 3,
    //   "medida": null,
    //   "nombre": "Piola de construcción",
    //   "precio": 0.7,
    //   "stock": 2})
  }
  
  public obtenerProductos = () => {
    this._servicioProducto.getProductos().subscribe(data => {
        this.dataSource.data = data as IProducto[];
        console.log("dataa", this.dataSource.data);
    },error => {
        console.log(error)
    });
}

  public obtenerClientes = () => {
    this._servicioClientes.getClientes().subscribe(data => {
      this.datos = data as any[];
    },error => {
      console.log(error)
    });
  }
  

  /** Gets the total cost of all transactions. */
  // getTotalCost() {
  //   return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  // }
}
