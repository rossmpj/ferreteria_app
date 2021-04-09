import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IColor } from 'src/app/interfaces/icolor';

@Component({
  selector: 'app-form-color',
  templateUrl: './form-color.component.html',
  styleUrls: ['./form-color.component.css']
})
export class FormColorComponent implements OnInit {
  formInstanceCol!: FormGroup;
  constructor(
      public dialogRef: MatDialogRef<FormColorComponent>,
      @Inject(MAT_DIALOG_DATA) public data: IColor){
          this.formInstanceCol = new FormGroup({                
              "idColor":  new FormControl({value: '', disabled: true}, Validators.required),
              "nombre": new FormControl('', Validators.required),
            });
          this.formInstanceCol.setValue(data);
      }

  ngOnInit(): void {
  }

}
