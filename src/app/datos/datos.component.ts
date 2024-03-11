import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-datos',
  standalone: true,
  imports: [],
  templateUrl: './datos.component.html',
  styleUrl: './datos.component.css' 
})
export class DatosComponent {
  @Input() datos: any[] = [];
  @Output() enviarDatos = new EventEmitter<any>();

  
  enviarDatosAlPadre() {
    this.enviarDatos.emit(this.datos);
  }

  
}


  /* @Input() nombre:string= "" ;
  @Input() apellido:string= "";
  @Input() edadh = "";
   misdatos:any={}
  @Output() enviarDatos  = new EventEmitter<string>()

  datosaenviar(){
    this.misdatos={
      nombre:  this.nombre,
      apellido: this.apellido,
      edad: this.edadh
    }
    
  } */
