import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Usuario} from 'src/app/usuario';
//import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class UsuarioServicioService {
private userUrl:string;
  constructor( private http:HttpClient) { 
    this.userUrl='192.168.182.1/api/usarios';
  }
  public findAll(){
    return this.http.get<Usuario[]>(this.userUrl);
  }
}
