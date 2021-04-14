import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
    selector: 'app-form-categoria',
    templateUrl: './form-categoria.component.html',
    styleUrls: ['./form-categoria.component.css']
})
export class FormCategoriaComponent implements OnInit {
    formInstanceCat!: FormGroup;
    accion!: string;
    constructor(
        public dialogRef: MatDialogRef<FormCategoriaComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private _serviceCategoria: CategoriaService,
        private snackBar: MatSnackBar){
        this.formInstanceCat = new FormGroup({                
            "idCategoria":  new FormControl({value: '', disabled: true}, Validators.required),
            "nombre": new FormControl('', Validators.required),
            "descripcion": new FormControl('', Validators.required),              
            "accion": new FormControl('', Validators.required),
        });
        this.dialogRef.disableClose = true;
        this.formInstanceCat.setValue(data);
        this.formInstanceCat.removeControl('accion');
    }

    ngOnInit(): void {  
        this.accion = this.data.accion;
        if (this.accion == "Agregar"){
            $('#idCat').hide();
            $("#aceptarbtn").hide();
        }
        if (this.accion == "Editar"){
            $("#aceptarbtn").hide();
            this.formInstanceCat.controls.idEmpleado.disable();

        }
        if (this.accion == "Detalle de "){
            $("#cancelarbtn").hide();
            $("#guardarbtn").hide();
            this.formInstanceCat.disable();
        }
    }

    public guardarCategoria(){
        this._serviceCategoria.postCategoria(this.formInstanceCat.value).subscribe(() => {
            this.snackBar.open("✔ La categoría se ha guardado con éxito", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['green-snackbar'],
            }); 
            this.formInstanceCat.reset();
            this.dialogRef.close();
        },(error: any) => {
            console.log(error);
            this.snackBar.open("✘ ¡Ha ocurrido un error!, la categoría no se ha podido guardar", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['red-snackbar'],
            });
        });
    }

    public editarCategoria(id: number){
        this._serviceCategoria.updateCategoria(id, this.formInstanceCat.value).subscribe(() => {
            this.snackBar.open("✔ La categoría se ha actualizado con éxito", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['green-snackbar'],
            });
        },(error: any) => {
            console.log(error);
            this.snackBar.open("✘ ¡Ha ocurrido un error!, la categoría no se ha podido actualizar", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['red-snackbar'],
            });
        });
        this.formInstanceCat.reset();
        this.dialogRef.close();
    }
}
