import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(public httpClient: HttpClient) { }
 
//----------------------------------------------------- Usuarios
//----- usuarios todos 
getusuarios(){
  return this.httpClient.get('http://localhost:3001/find');
}
//------ regresa la informacion de 1 usuario
getusuario(_idpaciente:String){
  return this.httpClient.get(`http://localhost:3001/find/uno/${_idpaciente}`);
}
//----- borra un usuario
deletusuario(_idpaciente:String){
  return this.httpClient.get(`http://localhost:3001/delete/${_idpaciente}`);
}
//------- crea un nuevo usuario
Nuevousuario(data:any){
  console.log("Llamado en el servicio data: ")
  console.log(data)
  this.httpClient.post(`http://localhost:3001/insert`,data)
  console.log("Ya deberia de estar chtm")
}
//----- Edita la informacion del usuario -(no edita domicilio ni contacto)
Editausuario(data:any,_idpaciente:String){
  return this.httpClient.put(`http://localhost:3001/update/${_idpaciente}`,data);
}
//------------------------------------------------------- EXpediente
//----- regresa un expediente  en especifico
getexpediente(_id:String){
  return this.httpClient.get(`http://localhost:3001/findEX/${_id}`);
}
//------ regresa la informacion del expediente de un usuario con el id del usuario
getexpedienteU(_idpaciente:String){
  return this.httpClient.get(`http://localhost:3001/find/uno/${_idpaciente}`);
}
//------ regresa la informacion de los expedientes a los que tiene acceso un doc
getexpedienteD(_iddoctor:String){
  console.log(_iddoctor)
  return this.httpClient.get(`http://localhost:3001/findEX/dos/${_iddoctor}`)
}
//----- borra un expediente en base a su id
deletexpediente(id:String){
  return this.httpClient.get(`http://localhost:3001/deleteEX/${id}`);
}
//------- crea un nuevo expediente
Nuevoexpediente(data:any){
  return this.httpClient.post(`http://localhost:3001/insertEX`,data);
}
//----- Edita la informacion del Expediente 
Editaexpediente(data:any,id:String){
  return this.httpClient.put(`http://localhost:3001/updateEX/${id}`,data);
}
//------------------------------------------------------- Consultas
//------ regresa la informacion de las consultas de un solo usuario
getconsulta(_idpaciente:String){
  return this.httpClient.get(`http://localhost:3001/findCO/uno/${_idpaciente}`);
}
//----- borra una consulta en base a su id
deletconsulta(id:String){
  return this.httpClient.get(`http://localhost:3001/deleteCO/${id}`);
}
//------- crea una nueva consulta
Nuevoconsulta(data:any){
  return this.httpClient.post(`http://localhost:3001/insertCO`,data);
}
//------------------------------------------------------- Medicamentos
//------ regresa la informacion del mediacamento de un solo usuario
getmedicamento(_idpaciente:String){
  return this.httpClient.get(`http://localhost:3001/uno/${_idpaciente}`);
}
//----- borra un medicamento en base a su id
deletmedicamento(id:String){
  return this.httpClient.get(`http://localhost:3001/deleteME/${id}`);
}
//------- crea un nuevo mediacamento
Nuevomedicamento(data:any){
  return this.httpClient.post(`http://localhost:3001/insertME`,data);
}
//------------------------------------------------------- Sintomas
//---toma lossintomas de un paciente
getsintoma(_idpaciente:String){
  return this.httpClient.get(`http://localhost:3001/findSI/uno/${_idpaciente}`);
}
//----- borra los sintomas en base a su id
deletsintoma(id:String){
  return this.httpClient.get(`http://localhost:3001/deleteSI/${id}`);
}
//------- crea un nuevo sintoma
Nuevosintoma(data:any){
  return this.httpClient.post(`http://localhost:3001/insertSI`,data);
}
//------------------------------------------------------- Ciclo
//-------- muesntra un ciclo en base a su paciente
getciclo(_idpaciente:String){
  return this.httpClient.get(`http://localhost:3001/findCM/uno/${_idpaciente}`);
}
//----- borra un ciclo en base a su id
deletciclo(id:String){
  return this.httpClient.get(`http://localhost:3001/deleteCM/${id}`);
}
//------- crea un nuevo ciclo
Nuevociclo(data:any){
  return this.httpClient.post(`http://localhost:3001/insertCM`,data);
}
//------------------------------------------------------- Quiste
//----- muestra los quistes de un paciente
getquiste(_idpaciente:String){
  return this.httpClient.get(`http://localhost:3001/findQ/uno/${_idpaciente}`);
}
//----- borra un quiste en base a su id
deletquiste(id:String){
  return this.httpClient.get(`http://localhost:3001/deleteQ/${id}`);
}
//------- crea un nuevo resgistro 
Nuevoquiste(data:any){
  return this.httpClient.post(`http://localhost:3001/insertQ`,data);
}
//------------------------------------------------------- Analisis de Sangre
//-------- regresa los analsis de sangre d un paciente
getanalisis(_idpaciente:String){
  return this.httpClient.get(`http://localhost:3001/findAN/uno/${_idpaciente}`);
}
//----- borra un analiss en base a su id
deletanalisis(id:String){
  return this.httpClient.get(`http://localhost:3001/deleteAN/${id}`);
}
//------- crea un nuevo resgistro 
Nuevoanalisis(data:any){
  return this.httpClient.post(`http://localhost:3001/insertAN`,data);
}

//------------------------------------------------------- Meto Anticonceptivo
//-------- regresa los anticonceptivos de un paciente
getanticonceptivo(_idpaciente:String){
  return this.httpClient.get(`http://localhost:3001/findMA/uno/${_idpaciente}`);
}
//----- borra un anticonceptivo en base a su id
deletanticonceptivo(id:String){
  return this.httpClient.get(`http://localhost:3001/deleteMA/${id}`);
}
//------- crea un nuevo resgistro 
Nuevoanticonceptivo(data:any){
  return this.httpClient.post(`http://localhost:3001/insertMA`,data);
}

//------------------------------------------------------- Antecedentes
//-------- regresa los antecedentes d un paciente
getantecedente(_idpaciente:String){
  return this.httpClient.get(`http://localhost:3001/findAM/uno/${_idpaciente}`);
}
//----- borra un antecedente en base a su id
deletantecedente(id:String){
  return this.httpClient.get(`http://localhost:3001/deleteAM/${id}`);
}
//------- crea un nuevo resgistro 
Nuevoantecedente(data:any){
  return this.httpClient.post(`http://localhost:3001/insertAM`,data);
}

//------------------------------------------------------- Laboratorios
//-------- todos los labs
getlabs(){
  return this.httpClient.get(`http://localhost:3001/findLAB`);
}
//-------- informacion de un solo lab
getlab(id:String){
  return this.httpClient.get(`http://localhost:3001/findLAB/uno/${id}`);
}
//----- borra un lab
deletlab(id:String){
  return this.httpClient.get(`http://localhost:3001/deleteLAB/${id}`);
}
//------- crea un nuevo resgistro 
Nuevolab(data:any){
  return this.httpClient.post(`http://localhost:3001/insertLAB`,data);
}

}
