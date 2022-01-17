import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseTweet, Tweet } from '../Models/Tweets.Model';
import { IResponse } from '../Models/Tweet.Response.Model';
import { Comentario } from '../Models/Comentarios.Model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  url:string=environment.apiUrl;

  constructor(private http:HttpClient) { }

  GetTweets():Observable<Tweet[]>{

    let direccion=this.url+"/Tweets";
  


    return this.http.get<ResponseTweet>(direccion).pipe(map(x=>x.data))
   }

   Createweets(tweet:Tweet):Observable<IResponse>{

    let direccion=this.url+"/Tweets";

    tweet.usuarioid=localStorage.getItem("token");

    return this.http.post<IResponse>(direccion,tweet);
   }

  
}
