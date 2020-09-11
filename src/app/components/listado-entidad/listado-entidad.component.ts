import { Component, Input, OnInit } from '@angular/core';
import {Entidad} from '../../classes/entidad';


@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit(): void {
  }

  mostrarEntidad(entidad)
  {
    console.log(entidad)
  }

}
