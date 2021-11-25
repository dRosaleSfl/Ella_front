import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangesService {

  logged:boolean = false
  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor() {
   }

  sesionCheck() {
    this.logged = !this.logged
    console.log("logged changed into " + this.logged)
    this.change.emit(this.logged)
  }
}
