import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tweet } from 'src/app/Models/Tweets.Model';
import { ComentariosService } from 'src/app/Services/comentarios.service';
import { TweetsService } from 'src/app/Services/tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  Mistweets:Tweet[];
  form:FormGroup;
  prueba: any;
  prueba2: any;
  idtweet: string[];
  constructor(private api:TweetsService,private router:Router,private apiComentario:ComentariosService,private formBuilder: FormBuilder) {

    this.form = formBuilder.group({
      Tweet: ['', [Validators.required]]      
    })


   }

  ngOnInit(): void {

    this.api.GetTweets().subscribe((Mistweets)=>{

     
      this.Mistweets=Mistweets
   

    })

       

    
  }

  addItem(value){

    this.prueba=value;
    console.log("recibido",this.prueba);

  }

  addItem2(value){

    this.prueba2=value;
    console.log("recibido",this.prueba2);

  }
  guardar(){
    const model = this.mapFormToModel();
    var texto=this.form.getRawValue()
    
  this.registrar(model)
    console.log(texto);

  }

  mapFormToModel(): Tweet {
    const value = this.form.value;

    const model = {} as Tweet;
    model.texto = value.Tweet;

    return model;
  }  

  registrar(model:Tweet){
    this.api.Createweets(model).subscribe(response=>{

      
      this.form.reset();
      this.recargar();
   

    });
   
    
  }

  public recargar(){
    this.api.GetTweets().subscribe(Mistweets=>{

      console.log(Mistweets);
      this.Mistweets=Mistweets

    })
  }

  mostrarComentarios(tweet:Tweet){

    console.log("llego") 
       tweet.mostrar=!tweet.mostrar;


  }

}
