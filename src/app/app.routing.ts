import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layouts/admin-layout/dashboard/dashboard.component';
import { UserProfileComponent } from './layouts/admin-layout/user-profile/user-profile.component';
import { ReportesComponent } from './layouts/admin-layout/reportes/reportes.component';
import { ExtrasComponent } from './layouts/admin-layout/extras/extras.component';
import { VentasComponent } from './layouts/admin-layout/ventas/ventas.component';
import { ClienteComponent } from './layouts/admin-layout/cliente/cliente.component';
import { EmpleadoComponent } from './layouts/admin-layout/empleado/empleado.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { ProductoComponent } from './layouts/admin-layout/producto/producto.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: 'dashboard',
    component: DashboardComponent,
    // children: [{
    //   path: '',
    //   loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    // }]
  }, {
    path: 'producto',
    component: ProductoComponent,
    // children: [{
    //   path: '',
    //   loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    // }]
  },
  // {
  //   path: 'user-profile',
  //   component: UserProfileComponent,
  // }, 
  {
    path: 'reportes',
    component: ReportesComponent,
  }, {
    path: 'extras',
    component: ExtrasComponent,
  }, 
  {
    path: 'ventas',
    component: VentasComponent,
  }, {
    path: 'cliente',
    component: ClienteComponent,
  }, 
  {
    path: 'empleado',
    component: EmpleadoComponent,
  }, 
  {
    path: 'form-producto',
    component: FormProductoComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
