import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comentario, ResponseComentario } from '../Models/Comentarios.Model';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  url:string="https://localhost:44372/api"
  constructor(private http:HttpClient) { }

  GetComentarios(tweetId:string):Observable<Comentario[]>{

    let direccion=`${this.url}/Comentarios/${tweetId}`;


    return this.http.get<ResponseComentario>(direccion).pipe(map(x=>x.data))
   }
}
