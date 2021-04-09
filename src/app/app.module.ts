import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { UserProfileComponent } from './layouts/user-profile/user-profile.component';
import { ReportesComponent } from './layouts/reportes/reportes.component';
import { VentasComponent } from './layouts/ventas/ventas.component';
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
import { FormProductoComponent } from './layouts/productos/form-producto/form-producto.component';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { ChartistModule } from 'ng-chartist';
import { FormComponent } from './form/form.component';
import { TablaProductosComponent } from './layouts/productos/tabla-productos/tabla-productos.component';
import { TablaExtrasComponent } from './layouts/extras/tabla-extras/tabla-extras.component';
import { FormExtrasComponent } from './layouts/extras/form-extras/form-extras.component';
import { FormClienteComponent } from './layouts/clientes/form-cliente/form-cliente.component';
import { TablaClientesComponent } from './layouts/clientes/tabla-clientes/tabla-clientes.component';
import { TablaEmpleadosComponent } from './layouts/empleados/tabla-empleados/tabla-empleados.component';
import { FormEmpleadoComponent } from './layouts/empleados/form-empleado/form-empleado.component';
import { FormColorComponent } from './layouts/extras/form-color/form-color.component';
import { FormCategoriaComponent } from './layouts/extras/form-categoria/form-categoria.component';
import { FormMarcaComponent } from './layouts/extras/form-marca/form-marca.component';
import {MatDividerModule} from '@angular/material/divider';

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
        ChartistModule,
        ReactiveFormsModule, 
        MatDividerModule
    ],
    declarations: [
        AppComponent,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        DashboardComponent,
        UserProfileComponent,
        ReportesComponent,
        TablaExtrasComponent,
        VentasComponent,
        TablaClientesComponent,
        TablaEmpleadosComponent,
        FormProductoComponent,
        FormComponent,
        TablaProductosComponent,
        TablaExtrasComponent,
        FormExtrasComponent,
        FormClienteComponent,
        FormEmpleadoComponent,
        TablaClientesComponent,
        TablaEmpleadosComponent,
        FormColorComponent,        
        FormColorComponent,
        FormCategoriaComponent,
        FormMarcaComponent
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
    entryComponents: [
        FormProductoComponent, 
        FormExtrasComponent, 
        FormClienteComponent,
        FormEmpleadoComponent,
        FormColorComponent,
        FormCategoriaComponent,
        FormMarcaComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
