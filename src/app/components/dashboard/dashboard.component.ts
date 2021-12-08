import { Component, OnInit } from '@angular/core';
import { ChangesService } from 'src/app/services/changes/changes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  select

  constructor(private changes: ChangesService) {
    this.select = 1
   }

  ngOnInit(): void {
  }

  setSelect(a: any) {
    this.select = a
  }

  logout() {
    sessionStorage.removeItem("UserID")
    sessionStorage.removeItem("tipo")
    this.changes.sesionCheck()
  }

}
