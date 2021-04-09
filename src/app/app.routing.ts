import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { UserProfileComponent } from './layouts/user-profile/user-profile.component';
import { ReportesComponent } from './layouts/reportes/reportes.component';
import { VentasComponent } from './layouts/ventas/ventas.component';
import { FormProductoComponent } from './layouts/productos/form-producto/form-producto.component';
import { TablaProductosComponent } from './layouts/productos/tabla-productos/tabla-productos.component';
import { TablaExtrasComponent } from './layouts/extras/tabla-extras/tabla-extras.component';
import { TablaClientesComponent } from './layouts/clientes/tabla-clientes/tabla-clientes.component';
import { TablaEmpleadosComponent } from './layouts/empleados/tabla-empleados/tabla-empleados.component';

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
    //   loadChildren: './layouts/admin-layout.module#AdminLayoutModule'
    // }]
  }, {
    path: 'producto',
    component: TablaProductosComponent,
    // children: [{
    //   path: '',
    //   loadChildren: './layouts/admin-layout.module#AdminLayoutModule'
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
    component: TablaExtrasComponent,
  }, 
  {
    path: 'ventas',
    component: VentasComponent,
  }, {
    path: 'cliente',
    component: TablaClientesComponent,
  }, 
  {
    path: 'empleado',
    component: TablaEmpleadosComponent,
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
