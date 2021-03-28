import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableListComponent } from './table-list/table-list.component';
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
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MatMenuModule } from '@angular/material/menu';
import { ReportesComponent } from './reportes/reportes.component';
import { ExtrasComponent } from './extras/extras.component';

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
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    TableListComponent,
    UserProfileComponent,
    ReportesComponent,
    ExtrasComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    MatFormFieldModule,
    SidebarComponent,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
