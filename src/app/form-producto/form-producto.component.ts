import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  constructor(private router: Router,private location: Location) { }

  ngOnInit(): void {
  }
  onSubmit():void {  
    // this.router.navigate(['/table-list']) 
    this.location.back(); 
}  

}
