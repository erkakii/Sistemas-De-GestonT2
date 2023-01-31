import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'holaMundoAngular';
  
  constructor(private router: Router){
    
  }
  abrirFormulario(){
    this.router.navigate(["formulario"]);
  }

}
