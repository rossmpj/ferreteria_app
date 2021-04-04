import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColorService } from '../../../services/color.service';
import { MarcaService } from '../../../services/marca.service';
import { CategoriaService } from '../../../services/categoria.service';
import { MatPaginator } from '@angular/material/paginator';

export interface IColor {
  idColor: number;
  nombre: string;
}

export interface IMarca {
  idMarca: number;
  nombre: string;
}

export interface ICategoria {
  idCategoria: number;
  nombre: string;
}

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})

export class ExtrasComponent implements OnInit, AfterViewInit {
  public displayedColumns = ['idMarca', 'nombre', 'acciones'];
  public displayedColumns1 = ['idColor', 'nombre', 'acciones'];
  public displayedColumns2 = ['idCategoria', 'nombre', 'acciones'];
  public dataSource = new MatTableDataSource<IMarca>();
  public dataSrc = new MatTableDataSource<IColor>();
  public dataSrcCat = new MatTableDataSource<ICategoria>();
  @ViewChild('MatSort1') MatSort1: MatSort = new MatSort;
  @ViewChild('MatSort2') MatSort2: MatSort = new MatSort;
  @ViewChild('MatSort3') MatSort3: MatSort = new MatSort;
  @ViewChild('MatPaginator1') paginator1!: MatPaginator;
  @ViewChild('MatPaginator2') paginator2!: MatPaginator;
  @ViewChild('MatPaginator3') paginator3!: MatPaginator;

  constructor(private _serviceColor: ColorService,
              private _serviceMarca: MarcaService,
              private _serviceCategoria: CategoriaService) { }

  ngOnInit(): void {
    this.obtenerColores();
    this.obtenerMarcas();
    this.obtenerCategorias();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  public obtenerColores = () => {
    this._serviceColor.getColores().subscribe(data => {
      this.dataSrc.data = data as IColor[];
      console.log("dataa",this.dataSrc.data);
    },error => {
      console.log(error)
    });
  }

  public obtenerMarcas = () => {
    this._serviceMarca.getMarcas().subscribe((marca: IMarca[]) => {
      this.dataSource.data = marca as IMarca[];
      console.log("dataa",this.dataSource.data);
    },(error: any) => {
      console.log(error)
    });
  }
  
  public obtenerCategorias = () => {
    this._serviceCategoria.getCategorias().subscribe((cat: ICategoria[]) => {
      this.dataSrcCat.data = cat as ICategoria[];
      console.log("dataa",this.dataSrcCat.data);
    },(error: any) => {
      console.log(error)
    });
  }

  ngAfterViewInit() {
    this.dataSrc.sort = this.MatSort1;
    this.dataSource.sort = this.MatSort2;
    this.dataSrcCat.sort = this.MatSort3;
    this.dataSrc.paginator = this.paginator1;
    this.dataSource.paginator = this.paginator2;
    this.dataSrcCat.paginator = this.paginator3;
  }
}
