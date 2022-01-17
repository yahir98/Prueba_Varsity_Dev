using API_Twitter.Core;
using API_Twitter.Models;
using API_Twitter.Models.Request;
using API_Twitter.Models.Response;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Twitter.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class ComentariosController : Controller
    {

        [HttpGet("{id}")]
        public IActionResult Get([FromRoute] Guid id)
        {
           Respuesta MiRespusta = new Respuesta();




            try
            {

                using (twitterContext db = new twitterContext())
                {
                    var contador = 0;
                    var respository = new GenericRepository<comentarios>(db);
                    var lst = respository.Queryable().Where(x => x.tweetid == id).ToList();
                  
                    MiRespusta.Exito = 1;
                    contador = lst.Count();
                    MiRespusta.Data = lst;


                }

            }

            catch (Exception ex)
            {
                MiRespusta.Mensaje = ex.Message;
            }

            return Ok(MiRespusta);




        }

        [HttpGet()]
        public IActionResult GetAll()
        {
            Respuesta MiRespusta = new Respuesta();


            try
            {
                using (twitterContext db = new twitterContext())
                {
                    var repository = new GenericRepository<comentarios>(db);
                    var lst = repository.All().ToList();
                    MiRespusta.Exito = 1;
                    MiRespusta.Data = lst;
                    MiRespusta.Mensaje = "Solicitud Exitosa";

                }

            }catch(Exception ex)
            {

                MiRespusta.Mensaje = ex.Message;
            }

            return Ok(MiRespusta);
        }

        [HttpPost]

        public IActionResult add(ComentariosRequest comentariosRequest)
        {

            Respuesta Mirespuesta = new Respuesta();

            try
            {
                using(twitterContext db = new twitterContext())
                {
                    var repository = new GenericRepository<comentarios>(db);

                    comentarios Comentarios = new comentarios();

                    Comentarios.idcomentario = Guid.NewGuid();
                    Comentarios.tweetid = comentariosRequest.tweetid;
                    Comentarios.texto = comentariosRequest.texto;
                    Comentarios.usuarioid = comentariosRequest.usuarioid;
                    Comentarios.fechacreacion = DateTime.Now;

                    repository.Create(Comentarios);
                    Mirespuesta.Exito = 1;
                    Mirespuesta.Mensaje = "Registro Exitoso";

                }

            }

            catch(Exception ex)
            {

                Mirespuesta.Mensaje = ex.Message;

            }

            return Ok(Mirespuesta);
        }

        [HttpDelete("{id}")]

        public IActionResult DeleteComentario([FromRoute] Guid id)
        {

            Respuesta Mirespuesta = new Respuesta();

            try
            {
                using (twitterContext db = new twitterContext())
                {

                    var Repository = new GenericRepository<comentarios>(db);
                    comentarios comentario = db.Comentarios.Find(id);
                    Repository.ForceDelete(comentario);
                    Mirespuesta.Exito = 1;
                }
            }
            catch (Exception ex)
            {
                Mirespuesta.Mensaje = ex.Message;

            }

            return Ok(Mirespuesta);
        }
    }
}
