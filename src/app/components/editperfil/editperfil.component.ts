import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule  } from '@angular/forms'; 
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-editperfil',
  templateUrl: './editperfil.component.html',
  styleUrls: ['./editperfil.component.css']
})
export class EditperfilComponent implements OnInit {

  editinfo: any
  compinfo: any
  idval: any

  constructor(private formBuilder: FormBuilder, private servicio: ServicioService) {
    this.idval = sessionStorage.getItem("UserID")
    this.editinfo = this.formBuilder.group({
      nombre: '',
      apepat: '',
      apemat: '',
      edad: 0,
      calle: '',
      colonia: '',
      numero: 0,
      numero_interno: 0,
      cp: 0,
      municipio: '',
      ciudad: '', // ciudad = estado
      usuario: '',
      contraseña: '',
      contraseña2: '',
      celular: '', // 449-
      casa: '', // 123-
      correo: '', // 4567
    })
   }

  ngOnInit(): void {
  }

  edit() {
    var regedit = {
      id: this.idval,
      nombre: this.editinfo.value.nombre,
      apepat: this.editinfo.value.apepat,
      apemat: this.editinfo.value.apemat,
      edad: this.editinfo.value.edad,
      calle: this.editinfo.value.calle,
      colonia: this.editinfo.value.colonia,
      numero: this.editinfo.value.numero,
      numero_interno: this.editinfo.value.numero_interno,
      cp: this.editinfo.value.cp,
      municipio: this.editinfo.value.municipio,
      ciudad: this.editinfo.value.ciudad,
      usuario: this.editinfo.value.usuario,
      pass: this.editinfo.value.contraseña,
      celular: this.editinfo.value.celular,
      casa: this.editinfo.value.casa,
      correo: this.editinfo.value.correo
    }
    this.servicio.getusuario(this.idval).subscribe(res=>{
      this.compinfo = res
      this.compinfo = this.compinfo.data[0] 
      console.log(this.compinfo)
      if (regedit.nombre === "") {
        regedit.nombre = this.compinfo.nombre
      }
      if (regedit.apepat === "") {
        regedit.apepat = this.compinfo.apepat
      }
      if (regedit.apemat === "") {
        regedit.apemat = this.compinfo.apemat
      }
      if (regedit.edad === 0) {
        regedit.edad = this.compinfo.edad
      }
      if (regedit.calle === "") {
        regedit.calle = this.compinfo.domicilio.calle
      }
      if (regedit.colonia === "") {
        regedit.colonia = this.compinfo.domicilio.colonia
      }
      if (regedit.numero === 0) {
        regedit.numero = this.compinfo.domicilio.numero
      }
      if (regedit.numero_interno === 0) {
        regedit.numero_interno = this.compinfo.domicilio.numero_interno
      }
      if (regedit.cp === 0) {
        regedit.cp = this.compinfo.domicilio.cp
      }
      if (regedit.municipio === "") {
        regedit.municipio = this.compinfo.domicilio.municipio
      }
      if (regedit.ciudad === "") {
        regedit.ciudad = this.compinfo.domicilio.ciudad
      }
      if (regedit.usuario === "") {
        regedit.usuario = this.compinfo.usuario
      }
      if (regedit.pass === "") {
        regedit.pass = this.compinfo.pass
      }
      if (regedit.celular === "") {
        regedit.celular = this.compinfo.contacto.celular
      }
      if (regedit.casa === "") {
        regedit.casa = this.compinfo.contacto.telefonocasa
      }
      if (regedit.correo === "") {
        regedit.correo = this.compinfo.contacto.correo
      } 

      console.log(regedit.casa)
      this.servicio.Editausuario(regedit, this.idval).subscribe(res=>{
        this.servicio.Editadomicilio(regedit).subscribe(res=>{
          this.servicio.Editacontacto(regedit).subscribe(res=>{

          })
        })
      })
    })
  }

}
