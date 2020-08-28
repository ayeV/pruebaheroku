import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  public ejemplo = "hola"
  public ejemplo2 = "hola mundo"

  ngOnInit(): void {
  }

  PruebaClick()
  {
    this.ejemplo2 = "Ejecutamos click";
  }

}
