import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  //menuItems: any[];

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // ngOnInit() {
  //   this.menuItems = ROUTES.filter(menuItem => menuItem);
  // }
  // isMobileMenu() {
  //     if ($(window).width() > 991) {
  //         return false;
  //     }
  //     return true;
  // };
}
