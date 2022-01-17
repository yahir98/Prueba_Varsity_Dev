import { Component, OnInit, ViewChild } from '@angular/core';
import { TweetsComponent } from '../tweets/tweets.component';

@Component({
  selector: 'app-conteiner',
  templateUrl: './conteiner.component.html',
  styleUrls: ['./conteiner.component.scss']
})
export class ConteinerComponent implements OnInit {

  constructor() { }

  @ViewChild('tweet')
  tweets:TweetsComponent;
  ngOnInit(): void {
  }

  openVerticallyCentered(content) {
   
  }

  guardar(){
  

  }

  salir(){

  }

}
