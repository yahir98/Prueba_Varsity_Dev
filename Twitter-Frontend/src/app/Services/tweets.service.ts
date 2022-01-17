import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseTweet, Tweet } from '../Models/Tweets.Model';
import { IResponse } from '../Models/Tweet.Response.Model';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  url:string="https://localhost:44372/api";

  constructor(private http:HttpClient) { }

  GetTweets():Observable<Tweet[]>{

    let direccion=this.url+"/Tweets";
  


    return this.http.get<ResponseTweet>(direccion).pipe(map(x=>x.data))
   }

   Createweets(tweet:Tweet):Observable<IResponse>{

    let direccion=this.url+"/Tweets";

    tweet.usuarioid="9baa0672-f167-4058-899a-32f6cbe15731";

    return this.http.post<IResponse>(direccion,tweet);
   }
}
