import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule  } from '@angular/forms'; 
import { Router } from '@angular/router';
import { ChangesService } from 'src/app/services/changes/changes.service';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sesion
  newUser=false
  tipo=0
  rsl:any
  notreg=false // not registered

  constructor(private formBuilder: FormBuilder, private router: Router, private changes: ChangesService, private servicio:ServicioService) {
    this.sesion = this.formBuilder.group({
      username: '',
      contra: ''
    });
   }

  ngOnInit(): void {
 
  }
 
  login() { // this should go call for the db to get the user that matches with the user and password given
    //if it returns a registered user
    this.servicio.getusuarioIDByAuth(this.sesion.value.username, this.sesion.value.contra).subscribe(res =>{
      this.rsl=res
      console.log(this.rsl.data)
      if (this.rsl.data.length === 1) { // if user exists
        this.notreg = false
        sessionStorage.setItem("UserID", this.rsl.data[0]._id)
        sessionStorage.setItem("nombre", this.rsl.data[0].nombre+" "+this.rsl.data[0].apepat+" "+this.rsl.data[0].apemat)
        sessionStorage.setItem("tipo", this.rsl.data[0].tipo)
        this.changes.sesionCheck()
        
      }
      else { // if user does not exist
        this.notreg = true
      }
    })
    /*
    this.changes.sesionCheck()
    sessionStorage.setItem("UserID", "5") */ // instead of 5 it should be the _objectID of the user returned, with this i should be able to call the info of the user and get it in every page as it is on sesionstorage
  }

  register(a: any) {
    console.log("Register")
    this.tipo=a
    this.newUser=true
  }

} 
