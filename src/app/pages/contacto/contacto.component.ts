import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

    //Datos Admin
nombreAdmin: string = "Antonio Martinez";
correoAdmin: string = "jesus07antonio03@gmail.com";
telAdmin: string = "4272272847";

  // Datos User
nombreUser: string = "";
correoUser: string = "";
edad:number = 0;
bandera: boolean = false;

  ngOnInit(): void {
    
  }

mensaje(){
  this.nombreUser;
  this.correoUser;
  this.edad;
  this.bandera = true;
}

borrar(){
  this.nombreUser="";
  this.correoUser="";
  this.edad=0;
  this.bandera=false;
  
}
}
