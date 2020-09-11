import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from 'src/app/services/http-service.service';
import {Entidad} from '../../classes/entidad';


@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})


export class ControlEntidadComponent implements OnInit {
  public datos;
  public entidad;
  constructor(private service: HttpServiceService) {

     this.service.getData().subscribe(
      x => {
        this.datos = x;
        console.log(this.datos);
      }

    );

   }

  ngOnInit(): void {
  }




}
