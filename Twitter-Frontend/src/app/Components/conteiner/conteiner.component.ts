import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TweetsComponent } from '../tweets/tweets.component';

@Component({
  selector: 'app-conteiner',
  templateUrl: './conteiner.component.html',
  styleUrls: ['./conteiner.component.scss']
})
export class ConteinerComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  @ViewChild('tweet')
  tweets:TweetsComponent;
  ngOnInit(): void {
  }

  openVerticallyCentered(content) {
   

   
      this.modalService.open(content, { centered: true });
    
  

  }

  guardar(){
  

  }

  salir(){

  }

}
