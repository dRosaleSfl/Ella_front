import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  select

  constructor() {
    this.select = 1
   }

  ngOnInit(): void {
  }

  setSelect(a: any) {
    this.select = a
  }

}
