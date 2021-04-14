import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {
    formInstance!: FormGroup;
    accion!: string;
    constructor(
        public dialogRef: MatDialogRef<FormClienteComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private snackBar: MatSnackBar,
        private _serviceCliente: ClienteService){
            this.formInstance = new FormGroup({                
                "cedula":  new FormControl('', Validators.required),
                "nombre": new FormControl('', Validators.required),
                "apellido": new FormControl('', Validators.required),
                "telefono": new FormControl('', Validators.required),
                "accion": new FormControl('', Validators.required),
                });
                this.dialogRef.disableClose = true;
                this.formInstance.setValue(data);
                this.formInstance.removeControl('accion');
    }

    ngOnInit(): void {
        this.accion = this.data.accion;
        if (this.accion == "Agregar"){
            $("#aceptarbtn").hide();
        }
        if (this.accion == "Editar"){
            $("#aceptarbtn").hide();
            this.formInstance.controls.cedula.disable();

        }
        if (this.accion == "Detalle de "){
            $("#cancelarbtn").hide();
            $("#guardarbtn").hide();
            this.formInstance.disable();
        }
    }

    public guardarCliente(){
        this._serviceCliente.postCliente(this.formInstance.value).subscribe(() => {
            this.snackBar.open("✔ El cliente se ha guardado con éxito", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['green-snackbar'],
            }); 
            this.formInstance.reset();
            this.dialogRef.close();
        },(error: any) => {
            console.log(error);
            this.snackBar.open("✘ ¡Ha ocurrido un error!, el cliente no se ha podido guardar", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['red-snackbar'],
            });
        });
    }
    
    public editarEmpleado(id: string){
        this._serviceCliente.updateCliente(id, this.formInstance.value).subscribe(() => {
            this.snackBar.open("✔ El cliente se ha actualizado con éxito", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['green-snackbar'],
            }); 
            this.formInstance.reset();
            this.dialogRef.close();
        },(error: any) => {
            console.log(error);
            this.snackBar.open("✘ ¡Ha ocurrido un error!, el cliente no se ha podido actualizar", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['red-snackbar'],
            });
        });
    }

    public editarCliente(id: string){
        this._serviceCliente.updateCliente(id, this.formInstance.value).subscribe(() => {
            this.snackBar.open("✔ El cliente se ha actualizado con éxito", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['green-snackbar'],
            });
        },(error: any) => {
            console.log(error);
            this.snackBar.open("✘ ¡Ha ocurrido un error!, el cliente no se ha podido actualizar", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['red-snackbar'],
            });
        });        
        this.formInstance.reset();
        this.dialogRef.close();
    }
}
