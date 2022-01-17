import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tweet } from 'src/app/Models/Tweets.Model';
import { TweetsService } from 'src/app/Services/tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  Mistweets:Tweet[];
  form:FormGroup;
  constructor(private api:TweetsService,private router:Router,private formBuilder: FormBuilder) {

    this.form = formBuilder.group({
      Tweet: ['', [Validators.required]]      
    })


   }

  ngOnInit(): void {

    this.api.GetTweets().subscribe(Mistweets=>{

      console.log(Mistweets);
      this.Mistweets=Mistweets
   

    })
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
