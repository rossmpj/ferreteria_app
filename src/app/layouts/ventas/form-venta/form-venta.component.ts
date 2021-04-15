import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Location } from '@angular/common';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProductoService } from 'src/app/services/producto.service';
import { IProducto } from 'src/app/interfaces/iproducto';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FacturaComponent } from '../factura/factura.component';
import { IVenta } from 'src/app/interfaces/iventa';

@Component({
  providers:  [FacturaComponent],
  selector: 'app-form-venta',
  templateUrl: './form-venta.component.html',
  styleUrls: ['./form-venta.component.css'],
  // animations: [
  //   trigger('detailExpand', [
  //     state('collapsed', style({height: '0px', minHeight: '0'})),
  //     state('expanded', style({height: '*'})),
  //     transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  //   ]),
  // ],
})
export class FormVentaComponent implements OnInit {
  datos!: any;  
  accion!: string;
  value = 0;
  formInstance!: FormGroup;
  articulo: IProducto[] = [];
  venta: IVenta[] = [];

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
  displayedColumns2: string[] = ['idProducto', 'nombre', 'precio', 'cantidad', 'total', 'actions'];
  transactions = new MatTableDataSource<IProducto>();

  displayedColumns: string[] = ['idProducto', 'nombre', 'precio', 'medida', 'stock', 'idColor', 'idMarca', 'actions'];
  dataSource = new MatTableDataSource<IProducto>();

    private paginator1!: MatPaginator;
    private paginator2!: MatPaginator;
    private MatSort1!: MatSort;
    private MatSort2!: MatSort;
    @ViewChild(MatTable, {static: false})
    table1!: MatTable<any>;
    @ViewChild(MatTable, {static: false})
    table2!: MatTable<any>;

    @ViewChild('MatSort1') set matSort1(ms: MatSort) {
        this.MatSort1 = ms;
        this.setDataSourceAttributes();
    }

    @ViewChild('MatPaginator1') set matPaginator1(mp: MatPaginator) {
        this.paginator1 = mp;
        this.setDataSourceAttributes();
    }

    @ViewChild('MatSort2') set matSort2(ms: MatSort) {
        this.MatSort2 = ms;
        this.setDataSourceAttributes();
    }

    @ViewChild('MatPaginator2') set matPaginator2(mp: MatPaginator) {
        this.paginator2 = mp;
        this.setDataSourceAttributes();
    }

    getTotalCost(cantidad: number) {
      // let ttotal = precio*cantidad;
      let total = this.articulo.map(t => t.precio*cantidad).reduce((acc: any, value: any) => acc + value, 0);
      // console.log("cant", this.articulo);
      return total.toFixed(2);
    }

    getPrecioFinal(precio: number, cantidad: number, id: number) {
      console.log("trans: ", this.transactions.data);

      if(cantidad == undefined){
        cantidad = 1;
      }

      let total = precio * cantidad;
      // console.log("total ",total*cantidad);
     
  for( var i = 0; i < this.venta.length; i++){ 
    
    if ( this.venta[i].idProducto === id) { 

        this.venta[i].cantidad=cantidad;
    }

}
   console.log("ventass:  ",this.venta);
      return total.toFixed(2);
      // map(t => t.precio).reduce((acc: any, value: any) => acc + value, 0);
      // return Math.round(total * 100) / 100;
    }
    emailUpdated(event: any) {
      // console.log("vev",event.target.value);
      // this.cantidad = event.target.value;
      return event.target.value;
    }
    setDataSourceAttributes() {
      this.dataSource.sort = this.MatSort1;
      this.transactions.sort = this.MatSort2;
      this.dataSource.paginator = this.paginator1;
      this.transactions.paginator = this.paginator2;
      if (this.paginator1 && this.MatSort1) {
        this.applyFilter('');
      }
      if (this.paginator2 && this.MatSort2) {
        this.applyFilter('');
      }
  }

    applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
}
 addCart(element: IProducto){
  var index = this.articulo.findIndex(x => x.idProducto==element.idProducto); 
  // here you can check specific property for an object whether it exist in your array or not
  
  index === -1 ? this.articulo.push(element) : console.log("object already exists")
  //  this.articulo.push(element);
  //  this.articulo?.forEach(e => {
  //  console.log("art: ",e);
  //  });
  this.transactions.data = this.articulo;
  var index1 = this.venta.findIndex(x => x.idProducto==element.idProducto); 
  index1 === -1 ? this.venta.push({idProducto: element.idProducto, cedula: '0000000000', 
  idEmpleado: 'rmpincay', fecha: '', cantidad: 1, codigo: '3333'}) : console.log("object already exists")
  
 }

 removeCart(element: number){
for (var i = this.articulo.length - 1; i >= 0; --i) {
  // console.log(this.transactions.data[i].idCategoria
  if (this.articulo[i].idProducto.toString() === element.toString()) {
    this.articulo.splice(i,1);
  }
}
// console.log("art: ", this.articulo)
 //  this.articulo?.forEach(e => {
 //  console.log("art: ",e);
 //  });
 this.transactions.data= this.articulo;
 this.table2.renderRows();
  // console.log(this.articulo);
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
