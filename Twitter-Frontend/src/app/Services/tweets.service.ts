import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseTweet, Tweet } from '../Models/Tweets.Model';

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
}
