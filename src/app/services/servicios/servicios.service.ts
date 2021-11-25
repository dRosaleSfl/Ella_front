import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

constructor(private httpClient: HttpClient) { }
//----------------------------------------------------- Usuarios
//----- usuarios todos 
getusuarios(){
  return this.httpClient.get('/basedatos-api/find');
}
//------ regresa la informacion de 1 usuario
getusuario(_idpaciente:String){
  return this.httpClient.get(`/basedatos-api/find/uno/${_idpaciente}`);
}
//----- borra un usuario
deletusuario(_idpaciente:String){
  return this.httpClient.get(`/basedatos-api/delete/${_idpaciente}`);
}
//------- crea un nuevo usuario
Nuevousuario(data:any){
  return this.httpClient.post(`/basedatos-api/insert`,data);
}
//----- Edita la informacion del usuario -(no edita domicilio ni contacto)
Editausuario(data:any,_idpaciente:String){
  return this.httpClient.put(`/basedatos-api/update/${_idpaciente}`,data);
}
//------------------------------------------------------- EXpediente
//----- regresa un expediente  en especifico
getexpediente(_id:String){
  return this.httpClient.get(`/basedatos-api/findEX/${_id}`);
}
//------ regresa la informacion del expediente de un usuario con el id del usuario
getexpedienteU(_idpaciente:String){
  return this.httpClient.get(`/basedatos-api/find/uno/${_idpaciente}`);
}
//------ regresa la informacion de los expedientes a los que tiene acceso un doc
getexpedienteD(_iddoctor:String){
  return this.httpClient.get(`/basedatos-api/find/dos/${_iddoctor}`);
}
//----- borra un expediente en base a su id
deletexpediente(id:String){
  return this.httpClient.get(`/basedatos-api/deleteEX/${id}`);
}
//------- crea un nuevo expediente
Nuevoexpediente(data:any){
  return this.httpClient.post(`/basedatos-api/insertEX`,data);
}
//----- Edita la informacion del Expediente 
Editaexpediente(data:any,id:String){
  return this.httpClient.put(`/basedatos-api/updateEX/${id}`,data);
}
//------------------------------------------------------- Consultas
//------ regresa la informacion de las consultas de un solo usuario
getconsulta(_idpaciente:String){
  return this.httpClient.get(`/basedatos-api/findCO/uno/${_idpaciente}`);
}
//----- borra una consulta en base a su id
deletconsulta(id:String){
  return this.httpClient.get(`/basedatos-api/deleteCO/${id}`);
}
//------- crea una nueva consulta
Nuevoconsulta(data:any){
  return this.httpClient.post(`/basedatos-api/insertCO`,data);
}
//------------------------------------------------------- Medicamentos
//------ regresa la informacion del mediacamento de un solo usuario
getmedicamento(_idpaciente:String){
  return this.httpClient.get(`/basedatos-api/findME/uno/${_idpaciente}`);
}
//----- borra un medicamento en base a su id
deletmedicamento(id:String){
  return this.httpClient.get(`/basedatos-api/deleteME/${id}`);
}
//------- crea un nuevo mediacamento
Nuevomedicamento(data:any){
  return this.httpClient.post(`/basedatos-api/insertME`,data);
}
//------------------------------------------------------- Sintomas
//---toma lossintomas de un paciente
getsintoma(_idpaciente:String){
  return this.httpClient.get(`/basedatos-api/findSI/uno/${_idpaciente}`);
}
//----- borra los sintomas en base a su id
deletsintoma(id:String){
  return this.httpClient.get(`/basedatos-api/deleteSI/${id}`);
}
//------- crea un nuevo sintoma
Nuevosintoma(data:any){
  return this.httpClient.post(`/basedatos-api/insertSI`,data);
}
//------------------------------------------------------- Ciclo
//-------- muesntra un ciclo en base a su paciente
getciclo(_idpaciente:String){
  return this.httpClient.get(`/basedatos-api/findCM/uno/${_idpaciente}`);
}
//----- borra un ciclo en base a su id
deletciclo(id:String){
  return this.httpClient.get(`/basedatos-api/deleteCM/${id}`);
}
//------- crea un nuevo ciclo
Nuevociclo(data:any){
  return this.httpClient.post(`/basedatos-api/insertCM`,data);
}
//------------------------------------------------------- Quiste
//----- muestra los quistes de un paciente
getquiste(_idpaciente:String){
  return this.httpClient.get(`/basedatos-api/findQ/uno/${_idpaciente}`);
}
//----- borra un quiste en base a su id
deletquiste(id:String){
  return this.httpClient.get(`/basedatos-api/deleteQ/${id}`);
}
//------- crea un nuevo resgistro 
Nuevoquiste(data:any){
  return this.httpClient.post(`/basedatos-api/insertQ`,data);
}
//------------------------------------------------------- Analisis de Sangre
//-------- regresa los analsis de sangre d un paciente
getanalisis(_idpaciente:String){
  return this.httpClient.get(`/basedatos-api/findAN/uno/${_idpaciente}`);
}
//----- borra un analiss en base a su id
deletanalisis(id:String){
  return this.httpClient.get(`/basedatos-api/deleteAN/${id}`);
}
//------- crea un nuevo resgistro 
Nuevoanalisis(data:any){
  return this.httpClient.post(`/basedatos-api/insertAN`,data);
}

//------------------------------------------------------- Meto Anticonceptivo
//-------- regresa los anticonceptivos de un paciente
getanticonceptivo(_idpaciente:String){
  return this.httpClient.get(`/basedatos-api/findMA/uno/${_idpaciente}`);
}
//----- borra un anticonceptivo en base a su id
deletanticonceptivo(id:String){
  return this.httpClient.get(`/basedatos-api/deleteMA/${id}`);
}
//------- crea un nuevo resgistro 
Nuevoanticonceptivo(data:any){
  return this.httpClient.post(`/basedatos-api/insertMA`,data);
}

//------------------------------------------------------- Antecedentes
//-------- regresa los antecedentes d un paciente
getantecedente(_idpaciente:String){
  return this.httpClient.get(`/basedatos-api/findAM/uno/${_idpaciente}`);
}
//----- borra un antecedente en base a su id
deletantecedente(id:String){
  return this.httpClient.get(`/basedatos-api/deleteAM/${id}`);
}
//------- crea un nuevo resgistro 
Nuevoantecedente(data:any){
  return this.httpClient.post(`/basedatos-api/insertAM`,data);
}

//------------------------------------------------------- Laboratorios
//-------- todos los labs
getlabs(){
  return this.httpClient.get(`/basedatos-api/findLAB`);
}
//-------- informacion de un solo lab
getlab(id:String){
  return this.httpClient.get(`/basedatos-api/findLAB/uno/${id}`);
}
//----- borra un lab
deletlab(id:String){
  return this.httpClient.get(`/basedatos-api/deleteLAB/${id}`);
}
//------- crea un nuevo resgistro 
Nuevolab(data:any){
  return this.httpClient.post(`/basedatos-api/insertLAB`,data);
}

}
