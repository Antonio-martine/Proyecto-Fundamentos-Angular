import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //propiedades
  nombre: string = "Antonio";
  apellido: string = "Martinez";
  nota: number = 21;
  encendido: boolean = true;

  personas:string[] = ['Juan','Pedro','Maria','Luis'];

  ngOnInit(): void {
    
  }

  //Metodo que cambia el valor de unas propuedades
  cambiarValores(){
    this.nombre = "Jesus";
    this.nota = 55;
    this.encendido = false;
  }

}
