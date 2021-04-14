import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ColorService } from 'src/app/services/color.service';
import { MarcaService } from 'src/app/services/marca.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MatDialog } from '@angular/material/dialog';
import { IMarca } from 'src/app/interfaces/imarca';
import { IColor } from 'src/app/interfaces/icolor';
import { ICategoria } from 'src/app/interfaces/icategoria';
import { FormCategoriaComponent } from '../form-categoria/form-categoria.component';
import { FormColorComponent } from '../form-color/form-color.component';
import { FormMarcaComponent } from '../form-marca/form-marca.component';
import { DeleteDialogComponent } from '../../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-tabla-extras',
  templateUrl: './tabla-extras.component.html',
  styleUrls: ['./tabla-extras.component.css']
})
export class TablaExtrasComponent implements OnInit {
    public displayedColumns = ['idMarca', 'nombre', 'acciones'];
    public displayedColumns1 = ['idColor', 'nombre', 'acciones'];
    public displayedColumns2 = ['idCategoria', 'nombre', 'descripcion','acciones'];
    public dataSource = new MatTableDataSource<IMarca>();
    public dataSrc = new MatTableDataSource<IColor>();
    public dataSrcCat = new MatTableDataSource<ICategoria>();
    private paginator1!: MatPaginator;
    private paginator2!: MatPaginator;
    private paginator3!: MatPaginator;
    private MatSort1!: MatSort;
    private MatSort2!: MatSort;
    private MatSort3!: MatSort;

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

    @ViewChild('MatSort3') set matSort3(ms: MatSort) {
        this.MatSort3 = ms;
        this.setDataSourceAttributes();
    }

    @ViewChild('MatPaginator3') set matPaginator3(mp: MatPaginator) {
        this.paginator3 = mp;
        this.setDataSourceAttributes();
    }

    setDataSourceAttributes() {
        this.dataSrc.sort = this.MatSort1;
        this.dataSource.sort = this.MatSort2;
        this.dataSrcCat.sort = this.MatSort3;
        this.dataSrc.paginator = this.paginator1;
        this.dataSource.paginator = this.paginator2;
        this.dataSrcCat.paginator = this.paginator3;
    }

    titulo = "marca";

    constructor(private _serviceColor: ColorService,
                private _serviceMarca: MarcaService,
                private _serviceCategoria: CategoriaService,
                public dialog: MatDialog) { 
                    this.dialog.afterAllClosed.subscribe(()=> this.obtenerMarcas());
                    this.dialog.afterAllClosed.subscribe(()=> this.obtenerColores()) 
                    this.dialog.afterAllClosed.subscribe(()=> this.obtenerCategorias()) 
                }

    ngOnInit(): void {
        this.obtenerColores();
        this.obtenerMarcas();
        this.obtenerCategorias();
        $("#cat").on("click", this.setTituloCategoria.bind(this));
        $("#mar").on("click", this.setTituloMarca.bind(this));
        $("#col").on("click", this.setTituloColor.bind(this));
    }

    setTituloCategoria(){
        this.titulo = "categoría";
    }

    setTituloColor(){
        this.titulo = "color";
    }

    setTituloMarca(){
        this.titulo = "marca";
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        this.dataSrc.filter = filterValue;
        this.dataSrcCat.filter = filterValue;
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

    openDialog(producto: ICategoria) {
        console.log("prod: ",producto);
        this.obtenerProductoId(producto.idCategoria);
    }

    agregarCategoria() {
        if(this.titulo === 'categoría'){
            this.dialog.open(FormCategoriaComponent, {
                disableClose: true,
                width: '500px',
                data: {idCategoria: "", nombre: "", descripcion: "", accion: "Agregar"}
            });
        } else if (this.titulo === 'color'){
            this.dialog.open(FormColorComponent, {
                disableClose: true,
                width: '500px',
                data: {idColor: "", nombre: "", accion: "Agregar"}
            });
        } else if (this.titulo === 'marca'){
            this.dialog.open(FormMarcaComponent, {
                disableClose: true,
                width: '500px',
                data: {idMarca: "", nombre: "", accion: "Agregar"}
            });
        }
      }

    eliminarMarca(id: Number){
        this.dialog.open(DeleteDialogComponent, {
            data: {
                id: id,
                clase: "marca"
            }
        });
    }

    eliminarColor(id: Number){
        this.dialog.open(DeleteDialogComponent, {
            data: {
                id: id,
                clase: "color"
            }
        });
    }

    eliminarCategoria(id: Number){
        this.dialog.open(DeleteDialogComponent, {
            data: {
                id: id,
                clase: "categoria"
            }
        });
    }

    openDialogCol(producto: IColor) {
        console.log("prod: ",producto);
        this.obtenerColorId(producto.idColor);
    }

    openDialogMarca(producto: IMarca) {
        console.log("prod: ",producto);
        this.obtenerMarcaId(producto.idMarca);
    }

    public obtenerProductoId = (id: number) => {
        this._serviceCategoria.getCategoriaById(id).subscribe(data => {
            console.log("p ",data);
            this.dialog.open(FormCategoriaComponent, {
                width: '500px',
                data: {
                    idCategoria: data.idCategoria,
                    nombre: data.nombre,
                    descripcion: data.descripcion,
                    accion: "Editar"
                }
            });
        },error => {
            console.log(error)
        });
    }

    public obtenerColorId = (id: number) => {
        this._serviceColor.getColorById(id).subscribe(data => {
            console.log("p ",data);
            this.dialog.open(FormColorComponent, {
                width: '500px',
                data: {
                    idColor: data.idColor,
                    nombre: data.nombre,
                    accion: "Editar"
                }
            });
        },error => {
            console.log(error)
        });
    }

    public obtenerMarcaId = (id: number) => {
        this._serviceMarca.getMarcaById(id).subscribe(data => {
            console.log("p ",data);
            this.dialog.open(FormMarcaComponent, {
                width: '500px',
                data: {
                    idMarca: data.idMarca,
                    nombre: data.nombre,
                    accion: "Editar"
                }
            });
        },error => {
            console.log(error)
        });
    }
}

