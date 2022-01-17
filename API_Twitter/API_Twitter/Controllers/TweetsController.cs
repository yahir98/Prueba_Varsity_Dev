using API_Twitter.Core;
using API_Twitter.Models;
using API_Twitter.Models.Request;
using API_Twitter.Models.Response;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Twitter.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class TweetsController : Controller
    {
        public Repository<tweets> Repository { get; }


        public TweetsController(Repository<tweets> repository)
        {
            Repository = repository;
        }

        [HttpGet]

        public IActionResult Get() 
        {

            Respuesta Mirespuesta = new Respuesta();

            try
            {
                var lst = Repository.Queryable().OrderByDescending(x => x.fechacreacion).Include(x => x.usuario).ToList();
                Mirespuesta.Exito = 1;
                Mirespuesta.Data = lst;

            }
            catch(Exception ex)
            {
                Mirespuesta.Mensaje = ex.Message;

            }

            return Ok(Mirespuesta);
        
        }

        [HttpPost]

        public IActionResult add(TweetsRequest TweetRequest)
        {


            Respuesta Mirespuesta = new Respuesta();

            try
            {

                using(twitterContext db = new twitterContext())
                {

                    var reposity = new GenericRepository<tweets>(db);

                    tweets tweets = new tweets();

                    tweets.tweetid = Guid.NewGuid();
                    tweets.texto = TweetRequest.texto;
                    tweets.usuarioid = TweetRequest.usuarioid;
                    tweets.fechacreacion = DateTime.Now;

                    reposity.Create(tweets);
                    Mirespuesta.Exito = 1;
                    Mirespuesta.Mensaje = "registro exitoso";

                }


            }
            catch (Exception ex)
            {
                Mirespuesta.Mensaje = ex.Message;
            }

            return Ok(Mirespuesta);
        }

        [HttpPut("{id}")]


        public IActionResult Edit([FromRoute] Guid id,[FromBody] TweetsRequest TweetRequest)
        {

            Respuesta MiRespusta = new Respuesta();

            try
            {

                using(twitterContext db = new twitterContext())
                {
                    var repository = new GenericRepository<tweets>(db);

                    tweets Tweets = db.Tweets.Find(id);

                    if(Tweets== null)
                    {

                        MiRespusta.Mensaje = "Tweet no encontrado";
                        MiRespusta.Exito = 0;
                        return Ok(MiRespusta);
                    }

                    Tweets.texto = TweetRequest.texto;
                    repository.Update(Tweets);
                    MiRespusta.Exito = 1;
                    MiRespusta.Mensaje = "Registro actualizado exitosamente";

                }
            }
            catch(Exception ex)
            {
                MiRespusta.Mensaje = ex.Message;
            }

            return Ok(MiRespusta);
        }

        [HttpDelete("{id}")]

        public IActionResult Delete([FromRoute] Guid id)
        {

            Respuesta Mirespuesta = new Respuesta();

            try
            {

                using(twitterContext db = new twitterContext())
                {

                    var repository = new GenericRepository<tweets>(db);

                    tweets tweets = db.Tweets.Find(id);

                    if (tweets == null)
                    {

                        Mirespuesta.Mensaje = "Tweet no encontrado";
                        Mirespuesta.Exito = 0;
                        return Ok(Mirespuesta);
                    }
                    repository.ForceDelete(tweets);
                    Mirespuesta.Exito = 1;
                    Mirespuesta.Mensaje = "Registro Eliminado Satisfactoriamente";
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
