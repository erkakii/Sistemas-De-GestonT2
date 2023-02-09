import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/interfaces/persona';
import { PersonasserviceService } from '../../services/personasservice.service';

@Component({
  selector: 'app-tabla-api',
  templateUrl: './tabla-api.component.html',
  styleUrls: ['./tabla-api.component.css']
})

export class TablaApiComponent implements OnInit {
  listadoPersonas: persona[]

  constructor(private personaService: PersonasserviceService) { }
  
  ngOnInit(): void {
    this.personaService.listadoPersonas().subscribe(data=>{
    this.listadoPersonas=data;
  }, error=>{
    //TODO: Controlar el error
  })
}
}
