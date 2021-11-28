import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule  } from '@angular/forms'; 
import { ChangesService } from 'src/app/services/changes/changes.service';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registroinfo
  registrofinal = {}
  usrvld = true

  constructor(private formBuilder: FormBuilder, private servicios: ServicioService) {
      this.registroinfo = this.formBuilder.group({
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
        contacto1: '', // 449-
        contacto2: '', // 123-
        contacto3: '', // 4567
        contacto: '',
        tipo: 0
      })
   }

  ngOnInit(): void {
  }

  registro() {
    if (this.registroinfo.value.contraseña != this.registroinfo.value.contraseña2) {
      this.usrvld = false
    }
    // Aqui falta una mandada al servicio para checar si el usuario ya esta en la bd, si si entonces usrvld = false
    if (this.usrvld) {
      this.registrofinal = {
        //info personal
        nombre: this.registroinfo.value.nombre,
        apepat: this.registroinfo.value.apepat,
        apemat: this.registroinfo.value.apemat,
        edad: this.registroinfo.value.edad,
        //info usuario
        usuario: this.registroinfo.value.usuario,
        contraseña: this.registroinfo.value.contraseña,
        //info direccion
        calle: this.registroinfo.value.calle,
        colonia: this.registroinfo.value.colonia,
        numero: this.registroinfo.value.numero,
        numero_interno: this.registroinfo.value.numero_interno,
        cp: this.registroinfo.value.cp,
        municipio: this.registroinfo.value.municipio,
        ciudad: this.registroinfo.value.ciudad, // ciudad = estado
        contacto: this.registroinfo.value.contacto1 + '-' + this.registroinfo.value.contacto2 + '-' + this.registroinfo.value.contacto3,
        tipo: 0 // falta validar que se pueda poner varios tipos
        }
        console.log(this.registrofinal)
        this.servicios.Nuevousuario(this.registrofinal)
    }
    else {
      //marcar un error, tal vez podria ser numero y asi pongo un error para contraseña desigual (1) y otro para usuario existente (2)
    }
  }

}
