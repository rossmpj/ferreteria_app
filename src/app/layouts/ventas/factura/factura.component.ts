import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs/internal/Observable';
import { IProducto } from 'src/app/interfaces/iproducto';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit, OnChanges {

  constructor( private changeDetectorRefs: ChangeDetectorRef) { }
  // @Input() Addition: any[] = []; //Note you need to import Input from @angular/core  
  // @Input() values: Array<Object> = [];
  @Input() set Addition(val) {
    this.transactions.data = val;
  }
  get Addition() {
    return this.transactions.data;
  }
  @Output() valueUpdate = new EventEmitter(); 
  displayedColumns2: string[] = ['idProducto', 'nombre', 'precio', 'medida', 'stock', 'idColor', 'idMarca', 'actions'];
  transactions = new MatTableDataSource<any>();
  private paginator!: MatPaginator;
  private sort!: MatSort;

  @ViewChild(MatSort, {static: false}) set matSort(ms: MatSort) {
      this.sort = ms;
      this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator, {static: false}) set matPaginator(mp: MatPaginator) {
      this.paginator = mp;
      this.setDataSourceAttributes();
  }
  @ViewChild(MatTable, {static: false})
  table!: MatTable<any>;

  setDataSourceAttributes() {
      this.transactions.paginator = this.paginator;
      this.transactions.sort = this.sort;
  }
  ngOnInit(): void {
    // this.refreshTableSorce();
    this.transactions = new MatTableDataSource<any>(this.Addition);
    // this.Addition.subscribe((els: any[]) => {this.transactions.data = els});
    // this.updateValue();
    // this.transactions.data.push(this.Addition);
    
    // this.transactions.connect().next(this.Addition);
    
// this.paginator._changePageSize(this.paginator.pageSize);
     this.transactions.data = this.transactions.data; 
     console.log("wq:",this.transactions.data);
  }
  
  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes.Addition) {
  //     this.transactions._updateChangeSubscription();
  //     console.log("add: ", changes.Addition);
  //     console.log("add2 : ", this.transactions.filteredData);
      // this.changeDetectorRefs.detectChanges();
  //   }
  // }
  refreshTableSorce() {
    // this.transactions = new MatTableDataSource<Element>(this.Addition);
    this.table.renderRows();
}
  ngOnChanges(changes: SimpleChanges) {
this.transactions.data = this.Addition;
    if (changes["Addition"]) {
      this.transactions = new MatTableDataSource<any>(this.Addition);
      if (this.transactions != undefined) {
        this.transactions = new MatTableDataSource<any>(this.Addition);
        this.transactions.sort = this.sort;
      }
      setTimeout(() => {
        this.transactions.paginator = this.paginator;
        this.transactions.sort = this.sort;
      });
    }
    
// this.paginator._changePageSize(this.paginator.pageSize);
    // this.transactions.connect().next(this.Addition);
  }
  // ngOnChanges(){
  //   if(this.Addition){
  //     console.log("add ", this.Addition);
      // this.transactions.data = this.Addition as IProducto[] ;
  //   }
  // }
  // obtener(){
  //   this.transactions.data = this.Addition;
  // }

  // updateValue(val: any) {  
    // this.Addition.forEach(element => {
    //   this.transactions.data.push(element);
    // });
    
//     this.valueUpdate.emit();  
// }
updateValue() {  
  this.table.renderRows();
    this.valueUpdate.emit(this.Addition);  
}
}
