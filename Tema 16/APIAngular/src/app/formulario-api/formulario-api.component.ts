import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/interfaces/persona';
import { PersonasserviceService } from '../services/personasservice.service';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-formulario-api',
  templateUrl: './formulario-api.component.html',
  styleUrls: ['./formulario-api.component.css']
}
)
export class FormularioAPIComponent implements OnInit {
      nuevaPersona: persona

      constructor(private personaService : PersonasserviceService){}

      ngOnInit(): void {
        this.personaService.insertarPersona()
      }
}
