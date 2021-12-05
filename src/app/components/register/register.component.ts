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
  registrofinal:any
  primerciclo: any
  usrvld = true

  constructor(private formBuilder: FormBuilder, public servicios: ServicioService, private changes: ChangesService) {
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
        fechainicio: '',
        fechafin: '',
        lapso: 0,
        tipo: 0
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
          contacto: this.registroinfo.value.contacto1 + '-' + this.registroinfo.value.contacto2 + '-' + this.registroinfo.value.contacto3,
          tipo: 0 // falta validar que se pueda poner varios tipos
          }
          var fechai = new Date(this.registroinfo.value.fechainicio)
          var fechaf = new Date(this.registroinfo.value.fechafin)
          this.primerciclo = {
            fechainicio: this.registroinfo.value.fechainicio,
            fechafin: this.registroinfo.value.fechafin,
            lapso: this.registroinfo.value.lapso,
            duracion: ( fechaf.getTime() - fechai.getTime() )  / (1000 * 3600 * 24)
          } 
          this.servicios.Nuevousuario(this.registrofinal).subscribe(res=>{
            
          })
          this.servicios.getusuarioID(this.registrofinal.usuario).subscribe(res=>{
            console.log("res(que pedo): ")
            console.log(res)
            rsl = res
            sessionStorage.setItem("UserID", rsl.data[0]._id)
            this.changes.sesionCheck()
            let nuevoCiclo = {
              _idpaciente: rsl.data[0]._id
            }
            this.servicios.Nuevociclo(nuevoCiclo).subscribe(res=> {
              console.log("Pito")
            })
            this.primerciclo.id = rsl.data[0]._id
            this.servicios.Postciclo(this.primerciclo).subscribe(res=>{
  
            })
          })
      }
      else {
        //marcar un error, tal vez podria ser numero y asi pongo un error para contraseña desigual (1) y otro para usuario existente (2)
      }
    })
  }
}
