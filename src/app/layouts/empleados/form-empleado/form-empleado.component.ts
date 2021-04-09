import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriaService } from '../../../services/categoria.service';
import { ColorService } from '../../../services/color.service';
import { MarcaService } from '../../../services/marca.service';
import { ICategoria } from 'src/app/interfaces/icategoria';
import { IColor } from 'src/app/interfaces/icolor';
import { IMarca } from 'src/app/interfaces/imarca';
import { IEmpleado } from '../../user-profile/user-profile.component';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit {
  formInstance!: FormGroup;
  datosCat: ICategoria[] | undefined;
  datosCol: IColor[] | undefined;
  datosMar: IMarca[] | undefined;
  constructor(
      private _serviceCategoria: CategoriaService,
      private _serviceColor: ColorService,
      private _serviceMarca: MarcaService,
      public dialogRef: MatDialogRef<FormEmpleadoComponent>,
      @Inject(MAT_DIALOG_DATA) public data: IEmpleado){
          this.formInstance = new FormGroup({                
              "idEmpleado":  new FormControl({value: '', disabled: true}, Validators.required),
              "nombre": new FormControl('', Validators.required),
              "apellido": new FormControl('', Validators.required),
              "correo": new FormControl('', Validators.required),
              "cedula": new FormControl('', Validators.required),
            });
        
            this.formInstance.setValue(data);
      }

  ngOnInit(): void {
      this.obtenerCategorias();
      this.obtenerColores();
      this.obtenerMarcas();
  }

  public obtenerCategorias = () => {
      this._serviceCategoria.getCategorias().subscribe((cat: ICategoria[]) => {
      // this.dataSrcCat.data = cat as ICategoria[];
      // console.log("dataa",this.dataSrcCat.data);
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
      // console.log("dataa",this.dataSource.data);
      },(error: any) => {
      console.log(error)
      });
  }
}
