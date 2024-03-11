import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatosComponent } from '../datos/datos.component';


@Component({
  selector: 'app-from',
  standalone: true,
  imports: [FormsModule ,DatosComponent],
  templateUrl: './from.component.html',
  styleUrl: './from.component.css'
})
export class FromComponent {

  datos: any[] = [];
  nombrepadre = '';
  apellido = '';
  edad = '';

  enviar() {
   
    this.datos.push({ nombre: this.nombrepadre, apellido: this.apellido, edad: this.edad });
  }
  recibirDatosDelHijo(datosRecibidos: any[]) {
    // Aquí puedes manejar los datos recibidos del componente hijo
    this.datos = datosRecibidos;
    
    // Si tienes solo un conjunto de datos, asigna los valores directamente
    if (this.datos.length > 0) {
      this.nombrepadre = this.datos[0].nombre;
      this.apellido = this.datos[0].apellido;
      this.edad = this.datos[0].edad;
    }
  }

  /* recibirDatosDelHijo(datosRecibidos: any[]) {
    // Aquí puedes manejar los datos recibidos del componente hijo
    this.datos = datosRecibidos;
    console.log('Datos recibidos del hijo:', this.datos);
  } */
/* 
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

  }  */
}

