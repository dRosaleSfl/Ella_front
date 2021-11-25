import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sesion

  constructor(private formBuilder: FormBuilder) {
    this.sesion = this.formBuilder.group({
      username: '',
      contra: ''
    });
   }

  ngOnInit(): void {
  }

  login() {

  }

}
