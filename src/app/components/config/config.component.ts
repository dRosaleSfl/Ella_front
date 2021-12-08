import { Component, OnInit } from '@angular/core';
import { ChangesService } from 'src/app/services/changes/changes.service';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  idval: any

  constructor(private changes: ChangesService, private servicio: ServicioService) {
    this.idval = sessionStorage.getItem("UserID")
   }

  ngOnInit(): void {
  }

  delete() {
    this.servicio.deleteusuario(this.idval).subscribe(res=>{
      sessionStorage.removeItem("UserID")
      sessionStorage.removeItem("tipo")
      this.changes.sesionCheck()
    })
  }

}
