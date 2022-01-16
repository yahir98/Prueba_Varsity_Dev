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
    }
}
