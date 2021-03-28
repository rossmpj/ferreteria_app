import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  symbol: string;
  precio: number;
  categoria: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', precio:4.3, categoria: 'Plomería' },
  {id: 2, name: 'Helium', weight: 4.0026, symbol: 'He', precio:4.3, categoria: 'Electricidad' },
  {id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', precio:4.3, categoria: 'Jardinería' },
  {id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', precio:4.3, categoria: 'Pintura' },
  {id: 5, name: 'Boron', weight: 10.811, symbol: 'B', precio:4.3, categoria: 'Plomería' },
  {id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', precio:4.3, categoria: 'Electricos' },
  {id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', precio:4.3, categoria: 'TYTY5' },
  {id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', precio:4.3, categoria: '56Y4EGN' },
  {id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', precio:4.3, categoria: 'RTHRBGN' },
  {id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', precio:4.3, categoria: 'YHTY' },
];

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'actions'];
  displayedColumns1: string[] = ['id', 'weight', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSrc = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSrc.sort = this.sort;
  }

}
