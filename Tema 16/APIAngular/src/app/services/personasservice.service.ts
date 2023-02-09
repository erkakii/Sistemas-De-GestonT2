import { Injectable } from '@angular/core';
import { persona } from '../interfaces/persona';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PersonasserviceService {


  urlWebAPI = 'https://apipersonaspaco.azurewebsites.net/api/personas';

  constructor(private http: HttpClient) { }

  


  insertarPersona(persona : persona) : void{
    this.http.post(this.urlWebAPI, persona);
  }

  listadoPersonas(): Observable<persona[]>{
    return this.http.get<persona[]>(this.urlWebAPI);
  }
}
