import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ColorService } from 'src/app/services/color.service';

@Component({
    selector: 'app-form-color',
    templateUrl: './form-color.component.html',
    styleUrls: ['./form-color.component.css']
})
export class FormColorComponent implements OnInit {
    formInstanceColor!: FormGroup;
    accion!: string;
    constructor(
        public dialogRef: MatDialogRef<FormColorComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private _serviceColor: ColorService,
            private snackBar: MatSnackBar){
            this.formInstanceColor = new FormGroup({                
                "idColor":  new FormControl({value: '', disabled: true}, Validators.required),
                "nombre": new FormControl('', Validators.required), 
                "accion": new FormControl('', Validators.required),
                });
                this.dialogRef.disableClose = true;
                this.formInstanceColor.setValue(data);
                this.formInstanceColor.removeControl('accion');
    }

    ngOnInit(): void {
        this.accion = this.data.accion;
        if (this.accion == "Agregar"){
            $('#idCol').hide();
            $("#aceptarbtn").hide();
        }
        if (this.accion == "Editar"){
            $("#aceptarbtn").hide();
            this.formInstanceColor.controls.idColor.disable();

        }
        if (this.accion == "Detalle de "){
            $("#cancelarbtn").hide();
            $("#guardarbtn").hide();
            this.formInstanceColor.disable();
        }
    }

    public guardarColor(){
        this._serviceColor.postColor(this.formInstanceColor.value).subscribe(() => {
            this.snackBar.open("✔ El color se ha guardado con éxito", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['green-snackbar'],
            }); 
            this.formInstanceColor.reset();
            this.dialogRef.close();
        },(error: any) => {
            console.log(error);
            this.snackBar.open("✘ ¡Ha ocurrido un error!, el color no se ha podido guardar", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['red-snackbar'],
            });
        });
    }

    public editarColor(id: number){
        this._serviceColor.updateColor(id, this.formInstanceColor.value).subscribe(() => {
            this.snackBar.open("✔ El color se ha actualizado con éxito", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['green-snackbar'],
            });
        },(error: any) => {
            console.log(error);
            this.snackBar.open("✘ ¡Ha ocurrido un error!, el color no se ha podido actualizar", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['red-snackbar'],
            });
        }); 
        this.formInstanceColor.reset();
        this.dialogRef.close();
    }
}
