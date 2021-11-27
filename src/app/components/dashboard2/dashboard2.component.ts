import { ServicioService } from './../../services/servicio.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {
  nombre=" Hashanah Molina"
  pacientes:any
  expedientes:any
 
  constructor( public pacienteservicio:ServicioService) { 
    
    
  }
  
  ngOnInit(): void {
    this.getpacientes()
  }
 getpacientes(){
    this.pacienteservicio.getexpedienteD("6193f819a39a0f39fcc3ec83").subscribe(
      res =>{
        //console.log(res);
        this.expedientes = res;
        console.log(this.expedientes.data[0].peso)
        this.pacientes=this.expedientes.data[1]._idpaciente
         //this.empleadobusqueda=res; 
      }
    );
  
  }
}
