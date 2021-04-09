import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
  }
  onSubmit():void {  
    // this.router.navigate(['/table-list']) 
    this.location.back(); 
}  
}
