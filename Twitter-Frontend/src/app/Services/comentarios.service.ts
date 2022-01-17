import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Comentario, ResponseComentario } from '../Models/Comentarios.Model';
import { IResponse } from '../Models/Tweet.Response.Model';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  url:string=environment.apiUrl;
  constructor(private http:HttpClient) { }

  GetComentarios(tweetId:string):Observable<Comentario[]>{

    let direccion=`${this.url}/Comentarios/${tweetId}`;


    return this.http.get<ResponseComentario>(direccion).pipe(map(x=>x.data))
   }

   CreaComentarios(comentario:Comentario):Observable<IResponse>{

    let direccion=`${this.url}/Comentarios`;


    return this.http.post<IResponse>(direccion,comentario);
   }

   DeleteComentarios(comentarioId:string):Observable<Comentario>{

    let direccion=`${this.url}/Comentarios/${comentarioId}`;

    return this.http.delete<Comentario>(direccion);

   }

}
