import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VentasService } from 'src/app/services/ventas.service';
import { IProducto } from '../../../interfaces/iproducto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-ventas',
  templateUrl: './tabla-ventas.component.html',
  styleUrls: ['./tabla-ventas.component.css']
})
export class TablaVentasComponent implements OnInit {
  ngOnInit(): void {
    this.obtenerVentas();
    // this.paginator._intl.itemsPerPageLabel="Test String";
  }
  displayedColumns: string[] = ['codigo', 'fecha', 'total', 'cliente', 'empleado', 'actions'];
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

   constructor (private _servicioVentas: VentasService,
    public dialog: MatDialog,
    private router: Router){}

    openDialog() {
      this.router.navigate(['/form-venta']) 
      // this.dialog.open(FormVentaComponent, {
      //   width: '700px',
      //   // height: '75%',
      //   data: ''
      // });
    }
  public obtenerVentas = () => {
    this._servicioVentas.getVentas().subscribe(data => {
      this.dataSource.data = data as IProducto[];
      console.log("dataa",this.dataSource.data);
    },error => {
      console.log(error)
    });
  }
}
