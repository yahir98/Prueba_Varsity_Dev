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


  }

}
