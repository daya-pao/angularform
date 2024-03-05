import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FromComponent } from './from/from.component';
import { DatosComponent } from './datos/datos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FromComponent, DatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba1';
}
