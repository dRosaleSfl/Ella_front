import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil: any

  constructor() {
    this.buildPerfil() // this should use the service to get the profile from the DB using the Object_ID which i want to save as sesion data
   }

  ngOnInit(): void {
  }

  buildPerfil() {
    this.perfil = {
      nombre: 'Maria Antonieta',
      apepat: 'Gonzales',
      apemat: 'Martinez',
      edad: 25,
      domicilio: {
        calle: 'Plutarco Elias Calles',
        colonia: 'centro',
        numero: 46,
        numero_interno: 'NA',
        cp: 20670,
        municipio: 'Pabellón de Arteaga',
        ciudad: 'Aguascalientes', // ciudad = estado
      },
      usuario: 'MariGM2845',
      contraseña: 'loca69',
      contacto: '465-126-0128',
      tipo: 0
    }
  }

}
