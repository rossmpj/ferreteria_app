import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    children?: [{}]
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Inicio',  icon: 'dashboard', class: '' },
    { path: '/product-list', title: 'Productos',  icon:'content_paste', class: '',
      // children: [
      //   { path: '/child1', title: 'Child Menu 1',  icon: 'home', class: '' }
      // ] 
    }
      ,
    { path: '/user-profile', title: 'Mi Perfil',  icon:'person', class: '' },
    { path: '/reportes', title: 'Reportes',  icon:'library_books', class: ''},
    // { path: '/color', title: 'Colores',  icon:'bubble_chart', class: '' },
    { path: '/extras', title: 'Extras',  icon:'category', class: '' },
    // { path: '/notifications', title: 'Notificaciones',  icon:'notifications', class: ''},
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  //menuItems: any[];
  //menuItems: any[];
  menuItems: any[] = [];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  // constructor() { }
  
  // ngOnInit() {
    //Toggle Click Function
    // $("#wrapper2").toggle(1500,"toggled");
//      $("#wrapper2").hide().css("visibility", "hidden");
// $("#menu-toggle").click(function(e) {
// e.preventDefault();
// $("#wrapper").toggleClass("toggled");

// $("#wrapper2").show().css("visibility", "visible");
// });

// $("#menu-toggle2").click(function(e) {
//   e.preventDefault();
//   $("#wrapper2").hide()
//   });
// }
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
