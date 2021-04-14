import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
    selector: 'app-form-empleado',
    templateUrl: './form-empleado.component.html',
    styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit {
    formInstance!: FormGroup;
    accion!: string;
    constructor(
        public dialogRef: MatDialogRef<FormEmpleadoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private _serviceEmpleado: EmpleadoService,
        private snackBar: MatSnackBar){
            this.formInstance = new FormGroup({                
                "idEmpleado":  new FormControl('', Validators.required),
                "nombre": new FormControl('', Validators.required),
                "apellido": new FormControl('', Validators.required),
                "correo": new FormControl('', Validators.required),
                "cedula": new FormControl('', Validators.required),
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
            this.formInstance.controls.idEmpleado.disable();

        }
        if (this.accion == "Detalle de "){
            $("#cancelarbtn").hide();
            $("#guardarbtn").hide();
            this.formInstance.disable();
        }
    }

    public guardarEmpleado(){
        this._serviceEmpleado.postEmpleado(this.formInstance.value).subscribe(() => {
            this.snackBar.open("✔ El empleado se ha guardado con éxito", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['green-snackbar'],
            }); 
            this.formInstance.reset();
            this.dialogRef.close();
        },(error: any) => {
            console.log(error);
            this.snackBar.open("✘ ¡Ha ocurrido un error!, el empleado no se ha podido guardar", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['red-snackbar'],
            });
        });
    }
    
    public editarEmpleado(id: string){
        this._serviceEmpleado.updateEmpleado(id, this.formInstance.value).subscribe(() => {
            this.snackBar.open("✔ El empleado se ha actualizado con éxito", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['green-snackbar'],
            });
        },(error: any) => {
            console.log(error);
            this.snackBar.open("✘ ¡Ha ocurrido un error!, el empleado no se ha podido actualizar", "OK", {
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
