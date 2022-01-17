import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token:string;

  constructor(private http:HttpClient) { }

  login(usuario:string,clave:string):Observable<any>{

    

    return this.http.post(`${environment.apiUrl}/Login`,{usuario,clave});


  }
}
