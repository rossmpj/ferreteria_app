import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ColorService } from 'src/app/services/color.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { MarcaService } from 'src/app/services/marca.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
    selector: 'app-delete-dialog',
    templateUrl: './delete-dialog.component.html',
    styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {
    clase!: string;
    constructor(
        public dialogRef: MatDialogRef<DeleteDialogComponent>,
        private _serviceProducto: ProductoService,
        private _serviceCliente: ClienteService,
        private _serviceEmpleado: EmpleadoService,
        private _serviceMarca: MarcaService,
        private _serviceColor: ColorService,
        private _serviceCategoria: CategoriaService,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private snackBar: MatSnackBar ) {
            this.dialogRef.disableClose = true;
        }

    ngOnInit(): void {
        this.clase = this.data.clase;
        if (this.clase == "producto" || this.clase == "cliente" || this.clase == "empleado")
        {
            $("#alerta").hide();
        }
    }

    public eliminarProducto = (id: any) => {
        if (this.clase == "producto")
        {
            $("#alerta").hide();
            this._serviceProducto.deleteProducto(id).subscribe(() => {
                this.snackBar.open("✔ El producto se ha eliminado con éxito", "OK", {
                    duration: 5000,
                    verticalPosition: 'top',
                    horizontalPosition: 'center',
                    panelClass: ['green-snackbar'],
                }); 
            },error => {
                console.log(error)
            });
        }
        else if (this.clase == "cliente")
        {
            $("#alerta").hide();
            this._serviceCliente.deleteCliente(id).subscribe(() => {
                this.snackBar.open("✔ El cliente se ha eliminado con éxito", "OK", {
                    duration: 5000,
                    verticalPosition: 'top',
                    horizontalPosition: 'center',
                    panelClass: ['green-snackbar'],
                }); 
            },error => {
                console.log(error)
            });
        }
        else if (this.clase == "empleado")
        {
            $("#alerta").hide();
            this._serviceEmpleado.deleteEmpleado(id).subscribe(() => {
                this.snackBar.open("✔ El empleado se ha eliminado con éxito", "OK", {
                    duration: 5000,
                    verticalPosition: 'top',
                    horizontalPosition: 'center',
                    panelClass: ['green-snackbar'],
                }); 
            },error => {
                console.log(error)
            });
        }
        else if (this.clase == "marca")
        {
            this._serviceMarca.deleteMarca(id).subscribe(() => {
                this.snackBar.open("✔ La marca se ha eliminado con éxito", "OK", {
                    duration: 5000,
                    verticalPosition: 'top',
                    horizontalPosition: 'center',
                    panelClass: ['green-snackbar'],
                }); 
            },error => {
                console.log(error);
                this.snackBar.open("✘ ¡Ha ocurrido un error!, la marca no se ha podido eliminar", "OK", {
                    duration: 5000,
                    verticalPosition: 'top',
                    horizontalPosition: 'center',
                    panelClass: ['red-snackbar'],
                }); 
            });
        }
        else if (this.clase == "color")
        {
            this._serviceColor.deleteColor(id).subscribe(() => {
                this.snackBar.open("✔ El color se ha eliminado con éxito", "OK", {
                    duration: 5000,
                    verticalPosition: 'top',
                    horizontalPosition: 'center',
                    panelClass: ['green-snackbar'],
                }); 
            },error => {
                console.log(error)
            });
        }
        else if (this.clase == "categoria")
        {
            this._serviceCategoria.deleteCategoria(id).subscribe(() => {
                this.snackBar.open("✔ La categoría se ha eliminado con éxito", "OK", {
                    duration: 5000,
                    verticalPosition: 'top',
                    horizontalPosition: 'center',
                    panelClass: ['green-snackbar'],
                }); 
            },error => {
                console.log(error)
            });
        }
    }
}
