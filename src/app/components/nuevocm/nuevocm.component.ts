import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { FormBuilder, ReactiveFormsModule  } from '@angular/forms'; 

@Component({
  selector: 'app-nuevocm',
  templateUrl: './nuevocm.component.html',
  styleUrls: ['./nuevocm.component.css']
})
export class NuevocmComponent implements OnInit {

  idval: any
  cm: any
  registroInfo: any
  cmloaded!: Promise<boolean>
  duracion: any
  lapso: any
  errMSG: any

  constructor(private servicio: ServicioService, private formBuilder: FormBuilder) {
    this.idval = sessionStorage.getItem("UserID") 
    this.registroInfo = formBuilder.group({
      fechainicio: '',
      fechafin: '',
      lapso: 0
    })
    this.servicio.getciclo(this.idval).subscribe(res =>{
      this.cm = res
      this.cm = this.cm.data[0].cicloh // this should ALWAYS give only one result [0]
      console.log(this.cm)
      if (this.cm.length > 0) { // if there are multiple cicles registered

      }
      console.log("listo")
      this.cmloaded = Promise.resolve(true)
    })
  }

  ngOnInit(): void {
  }

  registro() {
    var registroDates = this.registroInfo.value
    var fechani = new Date (registroDates.fechainicio)
    var fechanf = new Date (registroDates.fechafin)
    var i = 0
    var menos = 36525
    var registroFinal = {
      id: this.idval,
      fechainicio: registroDates.fechainicio,
      fechafin: registroDates.fechafin,
      lapso: registroDates.lapso,
      duracion: 0
    }
    if (fechani > fechanf) {
      this.errMSG = true
    }
    else {
      this.errMSG = false
      while (i < this.cm.length) { // this should help us get the cycle before this one
        var fechauf = new Date (this.cm[i].fechafin)
        console.log (fechani + " " + fechauf)
        if ( fechani > fechauf ) {
          var cant = ( fechani.getTime() - fechauf.getTime()  ) / (1000 * 3600 * 24)
          if (cant < menos) {
            registroFinal.lapso = cant
          }
        }
        i++
      }
      registroFinal.duracion = ( fechanf.getTime() - fechani.getTime()  ) / (1000 * 3600 * 24)
      this.duracion = registroFinal.duracion
      this.lapso = registroFinal.lapso
      console.log(registroFinal)
      this.servicio.Postciclo(registroFinal).subscribe(res=>{

      })
    } 
  }

}
