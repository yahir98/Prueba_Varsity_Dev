export interface Tweet{


    texto:string;

    fechacreacion:Date;

    usuarioid:string;

    mostrar?:boolean;


}


export interface ResponseTweet{


  data:Tweet[];

}