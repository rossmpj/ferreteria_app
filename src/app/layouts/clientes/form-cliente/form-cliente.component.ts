import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriaService } from '../../../services/categoria.service';
import { ColorService } from '../../../services/color.service';
import { MarcaService } from '../../../services/marca.service';
import { ICategoria } from 'src/app/interfaces/icategoria';
import { IColor } from 'src/app/interfaces/icolor';
import { IMarca } from 'src/app/interfaces/imarca';
import { ICliente } from 'src/app/interfaces/icliente';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {
  formInstance!: FormGroup;
  datosCat: ICategoria[] | undefined;
  datosCol: IColor[] | undefined;
  datosMar: IMarca[] | undefined;
  constructor(
      private _serviceCategoria: CategoriaService,
      private _serviceColor: ColorService,
      private _serviceMarca: MarcaService,
      public dialogRef: MatDialogRef<FormClienteComponent>,
      @Inject(MAT_DIALOG_DATA) public data: ICliente){
          this.formInstance = new FormGroup({                
              "cedula":  new FormControl({value: '', disabled: true}, Validators.required),
              "nombre": new FormControl('', Validators.required),
              "apellido": new FormControl('', Validators.required),
              "telefono": new FormControl('', Validators.required),
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
