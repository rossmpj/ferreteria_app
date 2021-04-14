import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriaService } from '../../../services/categoria.service';
import { ColorService } from '../../../services/color.service';
import { MarcaService } from '../../../services/marca.service';
import { ICategoria } from 'src/app/interfaces/icategoria';
import { IColor } from 'src/app/interfaces/icolor';
import { IMarca } from 'src/app/interfaces/imarca';
import { ProductoService } from 'src/app/services/producto.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {
    formInstance!: FormGroup;
    datosCat: ICategoria[] | undefined;
    datosCol: IColor[] | undefined;
    datosMar: IMarca[] | undefined;
    accion: string | undefined;
    constructor(
        private _serviceCategoria: CategoriaService,
        private _serviceColor: ColorService,
        private _serviceMarca: MarcaService,
        private _serviceProducto: ProductoService,
        public dialogRef: MatDialogRef<FormProductoComponent>,
        private snackBar: MatSnackBar,
        @Inject(MAT_DIALOG_DATA) public data: any){
            this.formInstance = new FormGroup({                
                "idProducto":  new FormControl({value: '', disabled: true}, Validators.required),
                "idCategoria":  new FormControl('', Validators.required),
                "idMarca": new FormControl('', Validators.required),
                "idColor": new FormControl('', Validators.required),
                "nombre": new FormControl('', Validators.required),
                "precio": new FormControl('', Validators.required),
                "stock": new FormControl('', Validators.required),
                "medida": new FormControl('', Validators.required),
                "accion": new FormControl('', Validators.required),
              });
            this.dialogRef.disableClose = true;
            this.formInstance.setValue(data);
            this.formInstance.removeControl('accion');
        }

    ngOnInit(): void {
        this.obtenerCategorias();
        this.obtenerColores();
        this.obtenerMarcas();
        this.accion = this.data.accion;
        if (this.accion == "Agregar"){
            $("#idp").hide();
            $("#aceptarbtn").hide();
        }
        if (this.accion == "Editar"){
            $("#aceptarbtn").hide();
        }
        if (this.accion == "Detalle de "){
            $("#cancelarbtn").hide();
            $("#guardarbtn").hide();
            this.formInstance.disable();
        }
    }

    public obtenerCategorias = () => {
        this._serviceCategoria.getCategorias().subscribe((cat: ICategoria[]) => {
        this.datosCat = cat as ICategoria[];
        },(error: any) => {
            console.log(error)
        });
    }
    
    public obtenerColores = () => {
        this._serviceColor.getColores().subscribe(data => {
        this.datosCol = data as IColor[];
        },error => {
        console.log(error)
        });
    }

    public obtenerMarcas = () => {
        this._serviceMarca.getMarcas().subscribe(marca => {
        this.datosMar = marca as IMarca[];
        },(error: any) => {
        console.log(error)
        });
    }

    public guardarProducto(){
        this._serviceProducto.postProducto(this.formInstance.value).subscribe(() => {
            this.snackBar.open("✔ El producto se ha guardado con éxito", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['green-snackbar'],
            }); 
            this.formInstance.reset();
            this.dialogRef.close();
        },(error: any) => {
            console.log(error);
            this.snackBar.open("✘ ¡Ha ocurrido un error!, el producto no se ha podido guardar", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['red-snackbar'],
            });
        });
    }
    
    public editarProducto(id: number){
        this._serviceProducto.updateProducto(id, this.formInstance.value).subscribe(() => {
            this.snackBar.open("✔ El producto se ha actualizado con éxito", "OK", {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                panelClass: ['green-snackbar'],
            });
        },(error: any) => {
            console.log(error);
            this.snackBar.open("✘ ¡Ha ocurrido un error!, el producto no se ha podido actualizar", "OK", {
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
