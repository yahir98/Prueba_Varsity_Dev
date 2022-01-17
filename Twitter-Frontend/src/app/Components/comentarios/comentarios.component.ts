import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario } from 'src/app/Models/Comentarios.Model';
import { IResponse } from 'src/app/Models/Tweet.Response.Model';
import { ComentariosService } from 'src/app/Services/comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {
  
  @Input() tweetId:string;
  form: FormGroup;
  MisComentarios:Comentario[];
  Respuesta:IResponse;
  
  constructor(private formBuilder: FormBuilder,private api:ComentariosService) { 
    
    this.form = formBuilder.group({
      comentario: ['', [Validators.required]]      
    })
  }

  ngOnInit(): void {

        
    this.api.GetComentarios(this.tweetId).subscribe(misComentarios=>{

      console.log(misComentarios);
      this.MisComentarios=misComentarios
      

    })
  }

  guardar(){
 

  }

  borrarComentario(comentarioId:string){

  }

}
