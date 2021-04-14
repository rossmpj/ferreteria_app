import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IEmpleado } from 'src/app/interfaces/iempleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { DeleteDialogComponent } from '../../delete-dialog/delete-dialog.component';
import { FormEmpleadoComponent } from '../form-empleado/form-empleado.component';

@Component({
    selector: 'app-tabla-empleados',
    templateUrl: './tabla-empleados.component.html',
    styleUrls: ['./tabla-empleados.component.css']
})
export class TablaEmpleadosComponent implements OnInit {
    constructor(
        private _servicioEmpleado: EmpleadoService,
        public dialog: MatDialog ) {
            this.dialog.afterAllClosed.subscribe(()=> this.obtenerEmpleados()) 
        }

    public obtenerEmpleados = () => {
        this._servicioEmpleado.getEmpleados().subscribe(data => {
            this.dataSource.data = data as IEmpleado[];
        }, error => {
            console.log(error)
        });
    }

    openDialog(producto: IEmpleado) {
        console.log("prod: ",producto);
        this.obtenerProductoId(producto.idEmpleado, "Editar");
    }

    agregarEmp() {
        this.dialog.open(FormEmpleadoComponent, {
            disableClose: true,
            width: '700px',
            data: {idEmpleado: "", nombre: "", apellido: "", cedula: "", correo: "", accion: "Agregar"}
        });
    }

    public obtenerProductoId = (id: string, accion: string) => {
        this._servicioEmpleado.getEmpleadoById(id).subscribe(data => {
            this.dialog.open(FormEmpleadoComponent, {
                width: '700px',
                data: {
                    nombre: data.nombre, 
                    idEmpleado: data.idEmpleado,
                    apellido: data.apellido, 
                    cedula: data.cedula, 
                    correo: data.correo,
                    accion: accion
                }
            });
        },error => {
            console.log(error)
        });
    }

    displayedColumns: string[] = ['idEmpleado', 'nombre', 'apellido', 'cedula', 'correo', 'actions'];
    dataSource = new MatTableDataSource<IEmpleado>();

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

    ngOnInit(): void {
        this.obtenerEmpleados();
    }

    eliminarEmpleado(id: string){
        this.dialog.open(DeleteDialogComponent, {
            data: {
                id: id,
                clase: "empleado"
            }
        });
    }
}
