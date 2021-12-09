import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil: any
  usr: any
  rsl: any
  idval: any
  contactos: any

  constructor(private servicio: ServicioService) {
    
   }

  ngOnInit(): void {
    this.idval = sessionStorage.getItem("UserID")
    this.servicio.getusuario( this.idval ).subscribe(res => {
      this.usr = res
      this.perfil = this.usr.data[0]
      this.contactos = this.perfil.contacto[0]
      console.log("Perfil: ")
      console.log(this.perfil)
    })
  }

}
