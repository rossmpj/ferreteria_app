import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MarcaService } from 'src/app/services/marca.service';

@Component({
    selector: 'app-form-marca',
    templateUrl: './form-marca.component.html',
    styleUrls: ['./form-marca.component.css']
})
export class FormMarcaComponent implements OnInit {
    formInstanceMarca!: FormGroup;
    accion!: string;
    constructor(
        public dialogRef: MatDialogRef<FormMarcaComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private _serviceMarca: MarcaService,
        private snackBar: MatSnackBar){
            this.formInstanceMarca = new FormGroup({                
                "idMarca":  new FormControl({value: '', disabled: true}, Validators.required),
                "nombre": new FormControl('', Validators.required),
                "accion": new FormControl('', Validators.required),
            });
            this.dialogRef.disableClose = true;
            this.formInstanceMarca.setValue(data);
            this.formInstanceMarca.removeControl('accion');
    }

    ngOnInit(): void {
        this.accion = this.data.accion;
        if (this.accion == "Agregar"){
            $('#idMar').hide();
            $("#aceptarbtn").hide();
        }
        if (this.accion == "Editar"){
            $("#aceptarbtn").hide();
            this.formInstanceMarca.controls.idMarca.disable();

        }
        if (this.accion == "Detalle de "){
            $("#cancelarbtn").hide();
            $("#guardarbtn").hide();
            this.formInstanceMarca.disable();
        }
    }
  
    public guardarMarca(){
        this._serviceMarca.postMarca(this.formInstanceMarca.value).subscribe(() => {
            this.snackBar.open("✔ La marca se ha guardado con éxito", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['green-snackbar'],
            }); 
            this.formInstanceMarca.reset();
            this.dialogRef.close();
        },(error: any) => {
            console.log(error);
            this.snackBar.open("✘ ¡Ha ocurrido un error!, la marca no se ha podido guardar", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['red-snackbar'],
            });
        });
    }
    
    public editarMarca(id: number){
        this._serviceMarca.updateMarca(id, this.formInstanceMarca.value).subscribe(() => {
            this.snackBar.open("✔ La marca se ha actualizado con éxito", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['green-snackbar'],
            }); 
        },(error: any) => {
            console.log(error);
            this.snackBar.open("✘ ¡Ha ocurrido un error!, la marca no se ha podido actualizar", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['red-snackbar'],
            });
        });
        this.formInstanceMarca.reset();
        this.dialogRef.close();
    }
}
