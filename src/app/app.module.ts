import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './layouts/admin-layout/dashboard/dashboard.component';
import { UserProfileComponent } from './layouts/admin-layout/user-profile/user-profile.component';
import { ReportesComponent } from './layouts/admin-layout/reportes/reportes.component';
import { ExtrasComponent } from './layouts/admin-layout/extras/extras.component';
import { VentasComponent } from './layouts/admin-layout/ventas/ventas.component';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'  
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ClienteComponent } from './layouts/admin-layout/cliente/cliente.component';
import { EmpleadoComponent } from './layouts/admin-layout/empleado/empleado.component';
import { ModalComponent } from './modal/modal.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { ProductoComponent } from './layouts/admin-layout/producto/producto.component';
import { MatSelectModule } from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import en from '@angular/common/locales/en';
import { ChartistModule } from 'ng-chartist';

registerLocaleData(en);
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    MatChipsModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatTableModule, 
    MatSortModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    MatListModule,
    ChartistModule
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    ProductoComponent,
    UserProfileComponent,
    ReportesComponent,
    ExtrasComponent,
    VentasComponent,
    ClienteComponent,
    EmpleadoComponent,
    ModalComponent,
    FormProductoComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    MatFormFieldModule,
    SidebarComponent,
    RouterModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatListModule
  ],
  entryComponents: [ModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
