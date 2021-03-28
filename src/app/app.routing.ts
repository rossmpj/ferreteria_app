import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { TableListComponent } from '../app/table-list/table-list.component';
import { UserProfileComponent } from '../app/user-profile/user-profile.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ExtrasComponent } from './extras/extras.component';

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
    path: 'product-list',
    component: TableListComponent,
    // children: [{
    //   path: '',
    //   loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    // }]
  }, {
    path: 'user-profile',
    component: UserProfileComponent,
    // children: [{
    //   path: '',
    //   loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    // }]
  }, {
    path: 'reportes',
    component: ReportesComponent,
  }, {
    path: 'extras',
    component: ExtrasComponent,
  }, 
  // {
  //   path: 'color',
  //   component: ColorComponent,
  // }
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
