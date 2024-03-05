import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatosComponent } from '../datos/datos.component';

@Component({
  selector: 'app-from',
  standalone: true,
  imports: [FormsModule, DatosComponent],
  templateUrl: './from.component.html',
  styleUrl: './from.component.css'
})
export class FromComponent {

  nombrepadre = "";
  apellido = "";
  edad = "";

  enviardatos = "";
  apellidoenviado=""; 
  edadenviar = ""


  
  enviar(){
    this.enviardatos = this.nombrepadre;
    this.apellidoenviado = this.apellido;
    this.edadenviar= this.edad
  }
  
  mensajerecido(array:any){
    this.nombrepadre=array.nombre
    this.apellido=array.apellido
    this.edad=array.edad

  }
}
