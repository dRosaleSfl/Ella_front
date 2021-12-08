import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule  } from '@angular/forms'; 
import { ChangesService } from 'src/app/services/changes/changes.service';
import { ServicioService } from 'src/app/services/servicio.service'; 

@Component({
  selector: 'app-registerdoc',
  templateUrl: './registerdoc.component.html',
  styleUrls: ['./registerdoc.component.css']
})
export class RegisterdocComponent implements OnInit {

  usrvld:any=true
  registroinfo: any
  registrofinal: any

  constructor(private formBuilder: FormBuilder, private changes: ChangesService, private servicios: ServicioService) {
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
      celular: '', // 449-
      casa: '', // 123-
      correo: '', // 4567
      tipo: 1
    })
   }

  ngOnInit(): void {
  }

  registro() {
    var rsl:any
    var exst: any
    var ID
    if (this.registroinfo.value.contraseña != this.registroinfo.value.contraseña2) {
      this.usrvld = false
    }
    // Aqui falta una mandada al servicio para checar si el usuario ya esta en la bd, si si entonces usrvld = false
    this.servicios.getusuarioID(this.registroinfo.value.usuario).subscribe(res=>{ // does it exists
      exst = res
      exst = exst.data
      console.log(exst)
      if (exst.length > 0) { // if the user 
        this.usrvld = false
      } 
      else {
        this.usrvld = true
      }
      if (this.usrvld) {
        this.registrofinal = {
          //info personal
          nombre: this.registroinfo.value.nombre,
          apepat: this.registroinfo.value.apepat,
          apemat: this.registroinfo.value.apemat,
          edad: this.registroinfo.value.edad,
          //info usuario
          usuario: this.registroinfo.value.usuario,
          pass: this.registroinfo.value.contraseña,
          //info direccion
          calle: this.registroinfo.value.calle,
          colonia: this.registroinfo.value.colonia,
          numero: this.registroinfo.value.numero,
          numero_interno: this.registroinfo.value.numero_interno,
          cp: this.registroinfo.value.cp,
          municipio: this.registroinfo.value.municipio,
          ciudad: this.registroinfo.value.ciudad, // ciudad = estado
          //info contacto
          celular: this.registroinfo.value.celular, 
          casa: this.registroinfo.value.casa, 
          correo: this.registroinfo.value.correo,
          tipo: 1 // falta validar que se pueda poner varios tipos
          }
          this.servicios.Nuevousuario(this.registrofinal).subscribe(res=>{
            this.servicios.getusuarioID(this.registrofinal.usuario).subscribe(res=>{
              console.log("res(que pedo): ")
              console.log(res)
              rsl = res
              sessionStorage.setItem("UserID", rsl.data[0]._id)
              sessionStorage.setItem("tipo", "1")
              this.changes.sesionCheck()
            }) 
          })
          
      }
      else {
        //marcar un error, tal vez podria ser numero y asi pongo un error para contraseña desigual (1) y otro para usuario existente (2)
      }
    }) 
  } 

}
