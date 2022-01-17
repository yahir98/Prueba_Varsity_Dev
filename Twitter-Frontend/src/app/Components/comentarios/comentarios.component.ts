import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  @Output() cantidadComentario=new EventEmitter<number>();
  @Output() ComentariosPadre=new EventEmitter();
  comentarios:any;
  form: FormGroup;
  MisComentarios:Comentario[];
  Respuesta:IResponse;
  
  
  constructor(private formBuilder: FormBuilder,private api:ComentariosService,private modalService: NgbModal) { 

    this.form = formBuilder.group({
      comentario: ['', [Validators.required]]      
    })
  }


  ngOnInit(): void {

        
    this.api.GetComentarios(this.tweetId).subscribe(misComentarios=>{

      console.log(misComentarios);
      this.MisComentarios=misComentarios;
      this.comentarios=misComentarios;
    
      console.log(this.cantidadComentario);
      

    })

    
  }
  openVerticallyCentered(content) {
   

   
    this.modalService.open(content, { centered: true });
  


}

  guardar(){
 
    const model = this.mapFormToModel();
    var texto=this.form.getRawValue()
    
  this.registrar(model)
    console.log(texto);

  }

  registrar(model:Comentario){
    this.api.CreaComentarios(model).subscribe(response=>{

      
      this.form.reset();
      this.recargar();
    

      this.ngOnInit();

      this.cantidadComentario.emit(this.comentarios.length+1);
      this.ComentariosPadre.emit(this.comentarios);


    });
   
    
  }

  
  public recargar(){

    this.api.GetComentarios(this.tweetId).subscribe(misComentarios=>{

     
      this.MisComentarios=misComentarios

    })
  }

  mapFormToModel(): Comentario {
    const value = this.form.value;

    const model = {} as Comentario;
    model.texto = value.comentario;
    model.usuarioid ="9baa0672-f167-4058-899a-32f6cbe15731";
    model.tweetId=this.tweetId;

    return model;
  }  



  borrarComentario(comentarioId:string){

    this.api.DeleteComentarios(comentarioId).subscribe(Response=>{

      console.log("Borrado satisfactoriamente")
      this.modalService.dismissAll();
      this.ngOnInit();
      this.cantidadComentario.emit(this.comentarios.length-1);
    })

  }

}
