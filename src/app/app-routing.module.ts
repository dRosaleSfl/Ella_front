import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RedirectComponent } from './components/redirect/redirect.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: RedirectComponent},
  {
    path: 'dashboard', 
    component: DashboardComponent, 
    children: [
      {path: 'calendar', component: CalendarComponent},
      {path: 'perfil', component: PerfilComponent}
      ]
  },
  {path: 'calendar', component: CalendarComponent},
  {path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
