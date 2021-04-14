import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ICliente } from 'src/app/interfaces/icliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { DeleteDialogComponent } from '../../delete-dialog/delete-dialog.component';
import { FormClienteComponent } from '../form-cliente/form-cliente.component';

@Component({
    selector: 'app-tabla-clientes',
    templateUrl: './tabla-clientes.component.html',
    styleUrls: ['./tabla-clientes.component.css']
})
export class TablaClientesComponent implements OnInit {
    constructor(
        private _servicioCliente: ClienteService,
        public dialog: MatDialog 
    ) 
        {       
            this.dialog.afterAllClosed.subscribe(()=> this.obtenerClientes() )
        }

    ngOnInit(): void {
        this.obtenerClientes();
    }

    displayedColumns: string[] = ['cedula', 'nombre', 'apellido', 'telefono', 'actions'];
    dataSource = new MatTableDataSource<ICliente>();

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
  
    public obtenerClientes = () => {
        this._servicioCliente.getClientes().subscribe(data => {
        this.dataSource.data = data as ICliente[];
        },error => {
        console.log(error)
        });
    }

    openDialog(producto: ICliente) {
        console.log("prod: ",producto);
        this.obtenerProductoId(producto.cedula, "Editar");
    }

    public obtenerProductoId = (id: string, accion: string) => {
        this._servicioCliente.getClienteById(id).subscribe(data => {
            console.log("p ",data);
            this.dialog.open(FormClienteComponent, {
                width: '700px',
                data: {
                    nombre: data.nombre, 
                    cedula: data.cedula,
                    apellido: data.apellido, 
                    telefono: data.telefono,
                    accion: accion
                }
            });
        },error => {
            console.log(error)
        });
    }
    
    agregarCliente() {
        this.dialog.open(FormClienteComponent, {
            disableClose: true,
            width: '700px',
            data: { nombre: "", apellido: "", cedula: "", telefono: "", accion: "Agregar"}
        });
    }

    eliminarCliente(id: string){
        this.dialog.open(DeleteDialogComponent, {
            data: {
                id: id,
                clase: "cliente"
            }
        });
    }
}
