import { ChangesService } from 'src/app/services/changes/changes.service';

import { ServicioService } from './../../services/servicio.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, Validators} from '@angular/forms';
import { Chart, registerables } from 'chart.js';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {
  nombre=" Hashanah Molina" // datos del doc
  _iddoctor="61aeaf86408a9b2f84dde371"
 
  ////// estudios
  nombreestudio:[]=[]
  resultadoestudio=0
  maximoestudio=0
  minimoextudio=0
  i=0
  // datos depaciente
  pacientes:any
  paacientes:any
  paaacientes:any
  expedientes:any
  medicamentos:any
  medicamento:any
  persona:any
  pacientesbusqueda:any
  añadirsintoma:any
  basura:any
  sintooma:any
  quiste:any
  sintoomabusqueda:any
  medbusqueda:any
analisi={
    estudio:[
      {
          fechaToma:"",
          nombrestudio:"",
          resultado:"",
          variacion:"",
          variacion2:""
      }
  ],
  _idpaciente:" ",
  _idlaboratorio:" "
  }

  analisi1={
    estudio:[
      {
          fechaToma:"",
          nombrestudio:"",
          resultado:"",
          variacion:"",
          variacion2:""
      }
  ],
  _idpaciente:" ",
  _idlaboratorio:" "
  }
  analisi2={
    estudio:[
      {
          fechaToma:"",
          nombrestudio:"",
          resultado:"",
          variacion:"",
          variacion2:""
      }
  ],
  _idpaciente:" ",
  _idlaboratorio:" "
  }





  antecedentes:any
  anticonceptico:any
  ciclo:any
  sintomas: any []=[]
  nuevalergia={
       sintomas:[" "],
        causa:"",
        complicacion:""
  }
  personal={
    nombre:" ",
    apepat:" ",
    apemat:" ",
    edad: 0,
    cumple:"",
    domicilio:{
        calle:"",
        numero:0,
        colonia:"",
        cp:0,
        municipio:"",
        estado:"",
        pais:""
    },
    contacto:[ ],
  }
  nuevomedicamento={
  _idpaciente:" ",
  nombre:" ",
  dosis:{
      cantidad:0,
      frecuencia:" ",
  },
  fechainicio:" ",
  fechafin:" ",
  efectos:[],
  notas:[]
}
nuevoexpediente={
  _idpaciente:"",
  alergias:[
    {
        sintomas:[""],
        causa:"",
        complicacion:""
    }
  ],
  tiposangre:"a+",
  Altura:0,
  peso:0,
  _iddoctor: this._iddoctor
}

  // shows
  nombreP=" "
  id=" "
  

 

  constructor( public pacienteservicio:ServicioService,private formBuilder: FormBuilder, public servicio:ChangesService) { 
    Chart.register(...registerables);

  }


  
  
  ngOnInit(): void {
    this.getpacientes()
  
  }



canvas(op:Number){


    const lineCanvasEle: any = document.getElementById('line_chart')
    
    const lineChar = new Chart(lineCanvasEle.getContext('2d'), {
      type: 'bar',
        data: {
          labels: [this.analisi.estudio[0].nombrestudio,this.analisi1.estudio[0].nombrestudio,this.analisi2.estudio[0].nombrestudio ],
          datasets: [
          {label: 'RESULTADO',data: [this.analisi.estudio[0].resultado,this.analisi1.estudio[0].resultado,this.analisi2.estudio[0].resultado],backgroundColor: ['rgba(255, 99, 132, 0.2)',],borderColor: ['rgb(255, 99, 132)',],borderWidth: 1},
          {label: 'MINIMO',data: [this.analisi.estudio[0].variacion,this.analisi1.estudio[0].variacion,this.analisi2.estudio[0].variacion],backgroundColor: ['rgba(255, 159, 64, 0.2)',],borderColor: ['rgb(255, 159, 64)',],borderWidth: 1},
          {label: 'MAXIMO',data: [this.analisi.estudio[0].variacion2,this.analisi1.estudio[0].variacion2,this.analisi2.estudio[0].variacion2],backgroundColor: ['rgba(255, 205, 86, 0.2)',],borderColor: ['rgb(255, 205, 86,)',],borderWidth: 1},
         ]
        },
        options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
        }
      });
      //lineChar.destroy()
  }

  

 

    
  
  /*crearusuario(){
    this.pacienteservicio.Nuevousuario(this.data).subscribe(
      res=>{
        console.log(res)
      }

    );
  }*/
  getpacientes(){
    this.pacienteservicio.getexpedienteD(this._iddoctor).subscribe(
      res =>{
        //console.log(res);
        this.expedientes = res;
        console.log(this.expedientes.data[0].peso)
        this.pacientes=this.expedientes.data
        //this.pacientesbusqueda=this.expedientes.data._idpaciente
      
      }
    );
    this.pacienteservicio.getusuarios().subscribe(
      res =>{
        this.paaacientes = res;
        //console.log(this.expedientes.data[0].peso)
        this.paacientes=this.paaacientes.data
        console.log(this.paacientes)
      }
    );
  
  }

 
  verex(item:any){
    console.log(item._idpaciente)
    this.nombreP=" "+item._idpaciente.nombre+" "+item._idpaciente.apepat+" "+item._idpaciente.apemat
    this.id=item._idpaciente._id
  } 
  eliminarex(item:any){
   console.log(item)
   Swal.fire({
    title: 'Estas Seguro?',
    text: "No se podra revertir la acción!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.pacienteservicio.deletexpediente(item._id).subscribe(
        res =>{
          console.log(res);
          this.getpacientes()
        })
      Swal.fire(
        'Eliminado!',
        'success'
      )
    }
  })
  }
  sintomaas(value:String){
    console.log(value)
    this.sintomas.push(value)
  //
  }
  sintomaaas(value:String){
    console.log("in:"+value)
    this.sintomas.push(value)
  //
  }
  sintomaex(item:any){
  console.log(item)
  this.verper(item)
  this.añadirsintoma=item._id

  }
  nuevosintoma(){
    this.nuevalergia.sintomas=this.sintomas
    console.log(this.nuevalergia)
    console.log(this.añadirsintoma)
    this.pacienteservicio.Editasintoma(this.añadirsintoma,this.nuevalergia).subscribe(
      res =>{
       this.getpacientes()
       this.limp()
       this.sintomas=[]
       Swal.fire('Añadido')
      }
    );
  }
  nuevoEX(){
  let _id= document.getElementById('identificador')
  //let _idpaciente
   console.log("-------"+this.nuevoexpediente._idpaciente)
   
   this.nuevoexpediente.alergias[0].sintomas=this.sintomas
   console.log("sintomas:"+this.nuevoexpediente.alergias[0].sintomas)
   this.pacienteservicio.Nuevoexpediente(this.nuevoexpediente).subscribe(
    res =>{
     this.getpacientes()
     this.limp()
     this.sintomas=[]
     Swal.fire('Añadido')
    }
  );
  }
  verper(item:any){
    this.nombreP=" "+item._idpaciente.nombre+" "+item._idpaciente.apepat+" "+item._idpaciente.apemat
    let _idpaciente=item._idpaciente._id
    this.pacienteservicio.getusuario(_idpaciente).subscribe(
      res=>{
        console.log(res)
        this.persona=res
        this.personal=this.persona.data[0]
        console.log(this.personal)
      }
    );
    //this.personal=item._idpaciente

  }
  limp(){
    this.nuevalergia={
      sintomas:[" "],
       causa:"",
       complicacion:""
 }
    this.personal={
      nombre:" ",
      apepat:" ",
      apemat:" ",
      edad: 0,
      cumple:"",
      domicilio:{
          calle:"",
          numero:0,
          colonia:"",
          cp:0,
          municipio:"",
          estado:"",
          pais:""
      },
      contacto:[ ],
    }
   this.nuevoexpediente={
      _idpaciente:"",
      alergias:[
        {
            sintomas:[""],
            causa:"",
            complicacion:""
        }
      ],
      tiposangre:"a+",
      Altura:0,
      peso:0,
      _iddoctor: this._iddoctor
    }
  }
  verME(){
    console.log(this.id)
    this.pacienteservicio.getmedicamento(this.id).subscribe(
      res =>{
        console.log(res);
       var m=res
       this.medicamentos = res
       this.medicamento = this.medicamentos.data
       this.medbusqueda=this.medicamentos.data
       
      })
    }
    eliminarME(item:any){
      console.log(item._id)
      Swal.fire({
        title: 'Estas Seguro?',
        text: "No se podra revertir la acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.pacienteservicio.deletmedicamento(item._id).subscribe(
            res =>{
              console.log(res);
              this.verME()
            })
          Swal.fire(
            'Eliminado!',
            'success'
          )
        }
      })
    }
   
    nuevoME(){
    this.nuevomedicamento._idpaciente= this.id
    console.log(this.nuevomedicamento)
    Swal.fire({
      title: 'Estas Seguro de Guardar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.pacienteservicio.Nuevomedicamento(this.nuevomedicamento).subscribe(
          res =>{
            console.log(res);
            this.nuevomedicamento={
              _idpaciente:" ",
              nombre:" ",
              dosis:{
                  cantidad:0,
                  frecuencia:" ",
              },
              fechainicio:" ",
              fechafin:" ",
              efectos:[],
              notas:[]
            }
           this.verME()


          })
        Swal.fire(
          'Añadido!',
          'success'
        )
      }
    })
    }
  verSI(){

    console.log(this.id)
    this.pacienteservicio.getsintoma(this.id).subscribe(
      res =>{
        console.log(res);
       
       this.basura = res
       this.sintooma=this.basura.data
       this.sintoomabusqueda=this.basura.data
      })
  }
  applyFilter(filterValue: string) {
    console.log(filterValue)
    let filterValueLower = filterValue.toLowerCase();
    if (filterValue === '') {
      this.sintooma = this.sintoomabusqueda;
    } else {
     this.sintooma = this.sintoomabusqueda.filter((sintoma: { sintoma: string; intensidad: string; duracion: string; }) =>
     sintoma.sintoma.toLowerCase().includes(filterValueLower) ||
     sintoma.intensidad.toLowerCase().includes(filterValueLower) ||
     sintoma.duracion.toLowerCase().includes(filterValueLower)
      );
    }
  }
  applyFilter2(filterValue: string) {
    console.log(filterValue)
    let filterValueLower = filterValue.toLowerCase();
    if (filterValue === '') {
      this.medicamento = this.medbusqueda;
    } else {
     this.medicamento = this.medbusqueda.filter((med: { nombre: string; }) =>
     med.nombre.toLowerCase().includes(filterValueLower) 
      );
    }
  }

  verQ(){
    
    console.log(this.id)
    this.pacienteservicio.getquiste(this.id).subscribe(
      res =>{
        console.log(res);
       var m=res
       this.basura = res
       this.quiste=this.basura.data
      })
  }
  verAN(){
    console.log(this.id+"estudios")
    
    this.pacienteservicio.getanalisis(this.id).subscribe(
      res =>{
        console.log(res);
        this.basura = res
        this.analisi=this.basura.data[0]
        this.analisi1=this.basura.data[1]
        this.analisi2=this.basura.data[2]
        console.log(this.i);
      //  this.nombreestudio= [['hola'],[this.analisi.estudio[0].nombrestudio]]
       // this.resultadoestudio=Number(this.analisi.estudio[0].resultado)
       // this.maximoestudio=Number(this.analisi.estudio[0].variacion)
        //this.minimoextudio=Number(this.analisi.estudio[0].variacion2)
        this.canvas(0)
        console.log(this.analisi.estudio[0].nombrestudio)
       
      })
  }
  imas(){
    this.i=this.i+1
    this.verAN()
    this.canvas(1)
  }
  imenos(){
    this.i=this.i-1
    this.verAN()
    this.canvas(1)
  }
  icero(){
    this.i=0
  }
  verAM(){
    
    console.log(this.id)
    this.pacienteservicio.getantecedente(this.id).subscribe(
      res =>{
        console.log(res);
        this.basura = res
        this.antecedentes=this.basura.data
      })
    
  }
  verMA(){
    
    console.log(this.id)
    this.pacienteservicio.getanticonceptivo(this.id).subscribe(
      res =>{
        console.log(res);
        this.basura = res
        this.anticonceptico=this.basura.data
      })
    
  }
  verCM(){
    
    console.log(this.id)
    this.pacienteservicio.getciclo(this.id).subscribe(
      res =>{
        console.log(res);
        this.basura = res
        this.ciclo=this.basura.data
      })
    
  }
  pdf(){
   /* const doc = new jsPDF();
    doc.text('Hello world!', 10, 10);
    doc.save('hello-world.pdf');*/
    var  element = document.getElementById('medikt') as HTMLCanvasElement;
    html2canvas(element).then((canvas)=>{
         console.log(canvas)
         var data = canvas.toDataURL('image/png')
         var doc = new jsPDF();
         var tam = canvas.height * 200 /canvas.width
         doc.addImage(data,3,3,200, tam)
         doc.save('Receta.pdf')

    })
  }
  pdf2(){
    /* const doc = new jsPDF();
     doc.text('Hello world!', 10, 10);
     doc.save('hello-world.pdf');*/
     var  element = document.getElementById('sangre') as HTMLCanvasElement;
     html2canvas(element).then((canvas)=>{
          console.log(canvas)
          var data = canvas.toDataURL('image/png')
          var doc = new jsPDF();
          var tam = canvas.height * 200 /canvas.width
          doc.addImage(data,3,3,200, tam)
          doc.save('Sangre.pdf')
 
     })
   }
   logout(){
    sessionStorage.clear();
    this.servicio.sesionCheck();
   }
}
