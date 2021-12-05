import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ChangesService } from 'src/app/services/changes/changes.service';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  sesion:any
  tipo: any
  tipoUsr: any
  usrInfo: any
  idval: any
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor(private changes: ChangesService, private servicio: ServicioService) {
    if ( sessionStorage.getItem("UserID") == null ) { // if sesion does not exist
      console.log("UserID Does not exist")
      this.sesion = false
    }
    else {
      console.log("UserID Does exist")
      this.idval = sessionStorage.getItem("UserID") 
      this.servicio.getusuario( this.idval ).subscribe(res=>{
        this.usrInfo = res
        this.tipoUsr = this.usrInfo.data[0].tipo
        console.log(this.tipoUsr)
        if (this.tipoUsr == 0) { // usr = paciente
          this.tipo=true
        }
        else {                   // usr = doctor
          this.tipo=false
        }
        this.sesion = true
        console.log(this.tipo)
      })
    }
   }

  ngOnInit(): void {
    this.changes.change.subscribe(logged => {
      this.sesion = logged
      if ( sessionStorage.getItem("UserID") == null ) { // if sesion does not exist
        console.log("UserID Does not exist")
        this.sesion = false
      }
      else {
        console.log("UserID Does exist")
        this.idval = sessionStorage.getItem("UserID") 
        this.servicio.getusuario( this.idval ).subscribe(res=>{
          this.usrInfo = res
          this.tipoUsr = this.usrInfo.data[0].tipo
          console.log(this.tipoUsr)
          if (this.tipoUsr == 0) { // usr = paciente
            this.tipo=true
          }
          else {                   // usr = doctor
            this.tipo=false
          }
          this.sesion = true
          console.log(this.tipo)
        })
      }
    })
  }

}
