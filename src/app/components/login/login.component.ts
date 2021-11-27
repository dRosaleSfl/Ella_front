import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangesService } from 'src/app/services/changes/changes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sesion

  constructor(private formBuilder: FormBuilder, private router: Router, private changes: ChangesService) {
    this.sesion = this.formBuilder.group({
      username: '',
      contra: ''
    });
   }

  ngOnInit(): void {
 
  }
 
  login() { // this should go call for the db to get the user that matches with the user and password given
    //if it returns a registered user
    this.changes.sesionCheck()
    sessionStorage.setItem("UserID", "5") // instead of 5 it should be the _objectID of the user returned, with this i should be able to call the info of the user and get it in every page as it is on sesionstorage
  }

}
