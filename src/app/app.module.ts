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
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { ChartistModule } from 'ng-chartist';
import { TablaProductosComponent } from './layouts/productos/tabla-productos/tabla-productos.component';
import { TablaClientesComponent } from './layouts/clientes/tabla-clientes/tabla-clientes.component';
import { TablaEmpleadosComponent } from './layouts/empleados/tabla-empleados/tabla-empleados.component';
import { TablaExtrasComponent } from './layouts/extras/tabla-extras/tabla-extras.component';
import { FormProductoComponent } from './layouts/productos/form-producto/form-producto.component';
import { FormClienteComponent } from './layouts/clientes/form-cliente/form-cliente.component';
import { FormEmpleadoComponent } from './layouts/empleados/form-empleado/form-empleado.component';
import { FormColorComponent } from './layouts/extras/form-color/form-color.component';
import { FormCategoriaComponent } from './layouts/extras/form-categoria/form-categoria.component';
import { FormMarcaComponent } from './layouts/extras/form-marca/form-marca.component';
import {MatDividerModule} from '@angular/material/divider';
import { DeleteDialogComponent } from './layouts/delete-dialog/delete-dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormVentaComponent } from './layouts/ventas/form-venta/form-venta.component';
import { TablaVentasComponent } from './layouts/ventas/tabla-ventas/tabla-ventas.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FacturaComponent } from './layouts/ventas/factura/factura.component';
import {MatTooltipModule} from '@angular/material/tooltip';
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
        MatDividerModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatTooltipModule
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
        FormVentaComponent,
        TablaVentasComponent,
        TablaClientesComponent,
        TablaEmpleadosComponent,
        FormProductoComponent,
        TablaProductosComponent,
        TablaExtrasComponent,
        FormClienteComponent,
        FormEmpleadoComponent,
        TablaClientesComponent,
        TablaEmpleadosComponent,
        FormColorComponent,        
        FormColorComponent,
        FormCategoriaComponent,
        FormMarcaComponent,
        DeleteDialogComponent,
        FormVentaComponent,
        TablaVentasComponent,
        FacturaComponent
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
        FormClienteComponent,
        FormEmpleadoComponent,
        FormColorComponent,
        FormCategoriaComponent,
        FormMarcaComponent,
        DeleteDialogComponent,
        FormVentaComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
