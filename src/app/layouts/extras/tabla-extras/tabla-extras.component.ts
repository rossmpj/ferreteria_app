import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-tabla-extras',
  templateUrl: './tabla-extras.component.html',
  styleUrls: ['./tabla-extras.component.css']
})
export class TablaExtrasComponent implements OnInit, AfterViewInit {
    public displayedColumns = ['idMarca', 'nombre', 'acciones'];
    public displayedColumns1 = ['idColor', 'nombre', 'acciones'];
    public displayedColumns2 = ['idCategoria', 'nombre', 'descripcion','acciones'];
    public dataSource = new MatTableDataSource<IMarca>();
    public dataSrc = new MatTableDataSource<IColor>();
    public dataSrcCat = new MatTableDataSource<ICategoria>();
    @ViewChild('MatSort1') MatSort1: MatSort = new MatSort;
    @ViewChild('MatSort2') MatSort2: MatSort = new MatSort;
    @ViewChild('MatSort3') MatSort3: MatSort = new MatSort;
    @ViewChild('MatPaginator1') paginator1!: MatPaginator;
    @ViewChild('MatPaginator2') paginator2!: MatPaginator;
    @ViewChild('MatPaginator3') paginator3!: MatPaginator;
    titulo = "marca";

    constructor(private _serviceColor: ColorService,
                private _serviceMarca: MarcaService,
                private _serviceCategoria: CategoriaService,
                public dialog: MatDialog) { }

    ngOnInit(): void {
        this.obtenerColores();
        this.obtenerMarcas();
        this.obtenerCategorias();
        $("#cat").on("click", this.setTituloCategoria.bind(this));
        $("#mar").on("click", this.setTituloMarca.bind(this));
        $("#col").on("click", this.setTituloColor.bind(this));
    }

    setTituloCategoria(){
        this.titulo = "categoria";
    }

    setTituloColor(){
        this.titulo = "color";
    }

    setTituloMarca(){
        this.titulo = "marca";
    }
  
   // $("some selector").click({param1: "Hello", param2: "World"}, cool_function);

// function cool_function(event){
//     alert(event.data.param1);
//     alert(event.data.param2);
// }
  

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

    eliminarTarjeta(id: number){
        this._serviceCategoria.deleteCategoria(id).subscribe(data => {
        this.obtenerCategorias();
        }, error => {
        console.log(error);
        })
    }

    eliminarMarca(id: number){
        this._serviceMarca.deleteMarca(id).subscribe(data => {
        this.obtenerMarcas();
        }, error => {
        console.log(error);
        })
    }

    eliminarColor(id: number){
        this._serviceColor.deleteColor(id).subscribe(data => {
        this.obtenerColores();
        }, error => {
        console.log(error);
        })
    }

    ngAfterViewInit() {
        this.dataSrc.sort = this.MatSort1;
        this.dataSource.sort = this.MatSort2;
        this.dataSrcCat.sort = this.MatSort3;
        this.dataSrc.paginator = this.paginator1;
        this.dataSource.paginator = this.paginator2;
        this.dataSrcCat.paginator = this.paginator3;
    }

    openDialog(producto: ICategoria) {
        console.log("prod: ",producto);
        this.obtenerProductoId(producto.idCategoria);
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
                width: '700px',
                data: data as ICategoria[]
            });
        },error => {
            console.log(error)
        });
    }

    public obtenerColorId = (id: number) => {
        this._serviceColor.getColorById(id).subscribe(data => {
            console.log("p ",data);
            this.dialog.open(FormColorComponent, {
                width: '700px',
                data: data as IColor[]
            });
        },error => {
            console.log(error)
        });
    }

    public obtenerMarcaId = (id: number) => {
        this._serviceMarca.getMarcaById(id).subscribe(data => {
            console.log("p ",data);
            this.dialog.open(FormMarcaComponent, {
                width: '700px',
                data: data as IMarca[]
            });
        },error => {
            console.log(error)
        });
    }
}

