import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/iproducto';
import { FormProductoComponent } from 'src/app/layouts/productos/form-producto/form-producto.component';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
    selector: 'app-tabla-productos',
    templateUrl: './tabla-productos.component.html',
    styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent implements OnInit {    
    ngOnInit(): void {
        this.obtenerProductos();
    }

    openDialog(producto: IProducto) {
        console.log("prod: ",producto);
        this.obtenerProductoId(producto.idProducto, "Editar");
    }

    agregarProducto(){
        this.dialog.open(FormProductoComponent, {
            disableClose: true,
            width: '700px',
            data: {idProducto: "", nombre: "", precio: "", medida: "", stock: "", idCategoria: "", idColor: "", idMarca: "", accion: "Agregar"}
        });
    }

    verProducto(producto: IProducto){        
        this.obtenerProductoId(producto.idProducto, "Detalle de ");
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

  public obtenerProductoId = (id: number, accion: string) => {
      this._serviceProducto.getProductoById(id).subscribe(data => {
          console.log("p ",data);
          this.dialog.open(FormProductoComponent, {
              width: '700px',
              data: {
                idProducto: data.idProducto,
                nombre: data.nombre,
                precio: data.precio,
                stock: data.stock,
                medida: data.medida,
                idCategoria: data.idCategoria,
                idMarca: data.idMarca,
                idColor: data.idColor,
                accion: accion
            }
          });
      },error => {
          console.log(error)
      });
  }

  onSubmit():void {  
      this.router.navigate(['/form-producto']); 
  }
}
