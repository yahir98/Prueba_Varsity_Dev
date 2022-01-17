export interface Comentario{


    tweetId:string;
     texto:string;
 
     fechacreacion:Date;
 
     usuarioid:string;
 
    
 
 
 }
 
 
 export interface ResponseComentario{
 
 
   data:Comentario[];
 
 }