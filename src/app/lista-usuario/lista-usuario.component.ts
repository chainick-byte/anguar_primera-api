import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';
import { UsuarioServicioService } from '../usuario-servicio.service';


@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.scss']
})
export class ListaUsuarioComponent implements OnInit {
  usuario:any=[]
  constructor(private usuarioServicioService:UsuarioServicioService) {
               
   }

  ngOnInit(): void {
    this.usuarioServicioService.findAll().subscribe(data=>{this.usuario=data; console.log(data);
    })
  }

}
