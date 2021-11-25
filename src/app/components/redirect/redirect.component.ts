import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ChangesService } from 'src/app/services/changes/changes.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  sesion:boolean
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor(private changes: ChangesService) {
    if ( sessionStorage.getItem("UserID") == null ) { // if sesion does not exist
      console.log("UserID Does not exist")
      this.sesion = false
    }
    else {
      console.log("UserID Does exist")
      this.sesion = true
    }
   }

  ngOnInit(): void {
    this.changes.change.subscribe(logged => {
      this.sesion = logged
    })
  }

}
