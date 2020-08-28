import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public promedio: number;
  public suma : number;
  public edad1 : number;
  public edad2: number;


  Calcular()
  {
    this.suma = this.edad1 + this.edad2;
    this.promedio = (this.edad2 +this.edad1) / 2
  }

  Limpiar()
  {
    this.suma = null;
    this.promedio = null;
    this.edad1 = null;
    this.edad2 = null;
  }
}
