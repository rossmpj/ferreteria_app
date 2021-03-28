import { Component, AfterViewInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  precio: number;
  categoria: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', precio:4.3, categoria: 'Plomería' },
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', precio:4.3, categoria: 'Electricidad' },
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', precio:4.3, categoria: 'Jardinería' },
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', precio:4.3, categoria: 'Pintura' },
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', precio:4.3, categoria: 'Plomería' },
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', precio:4.3, categoria: 'Electricos' },
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', precio:4.3, categoria: '' },
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', precio:4.3, categoria: '' },
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', precio:4.3, categoria: '' },
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', precio:4.3, categoria: '' },
];

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements AfterViewInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'precio', 'categoria', 'color', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
