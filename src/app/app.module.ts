import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { ExpedienteComponent } from './components/expediente/expediente.component';
import { Dashboard2Component } from './components/dashboard2/dashboard2.component';
import { RegisterComponent } from './components/register/register.component';
import { NuevocmComponent } from './components/nuevocm/nuevocm.component';
import { EditperfilComponent } from './components/editperfil/editperfil.component';
import { RegisterdocComponent } from './components/registerdoc/registerdoc.component';
import { ConfigComponent } from './components/config/config.component';
import { StatsComponent } from './components/stats/stats.component';

@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CalendarComponent,
    PerfilComponent,
    RedirectComponent,
    ExpedienteComponent,
    Dashboard2Component,
    RegisterComponent,
    NuevocmComponent,
    EditperfilComponent,
    RegisterdocComponent,
    ConfigComponent,
    StatsComponent
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
