import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IColor } from 'src/app/interfaces/icolor';

@Component({
  selector: 'app-form-marca',
  templateUrl: './form-marca.component.html',
  styleUrls: ['./form-marca.component.css']
})
export class FormMarcaComponent implements OnInit {
  formInstanceMarca!: FormGroup;
  constructor(
      public dialogRef: MatDialogRef<FormMarcaComponent>,
      @Inject(MAT_DIALOG_DATA) public data: IColor){
          this.formInstanceMarca = new FormGroup({                
              "idMarca":  new FormControl({value: '', disabled: true}, Validators.required),
              "nombre": new FormControl('', Validators.required),
            });
          this.formInstanceMarca.setValue(data);
      }

  ngOnInit(): void {
  }

}
