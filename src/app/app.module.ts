import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD

=======
>>>>>>> 5b000c7 (Agregado de varias cosas)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { ExpedienteComponent } from './components/expediente/expediente.component';
<<<<<<< HEAD
import { Dashboard2Component } from './components/dashboard2/dashboard2.component';

=======
import { RegisterComponent } from './components/register/register.component';
>>>>>>> 5b000c7 (Agregado de varias cosas)

@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CalendarComponent,
    PerfilComponent,
    RedirectComponent,
    ExpedienteComponent,
<<<<<<< HEAD
    Dashboard2Component
=======
    RegisterComponent
>>>>>>> 5b000c7 (Agregado de varias cosas)
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
