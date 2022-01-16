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
    public class LoginController : Controller
    {
        public LoginController(Repository<usuarios> repository)
        {
            Repository = repository;
        }

        public Repository<usuarios> Repository { get; }

        [HttpPost]

        public IActionResult login(LoginRequest request)
        {
            Respuesta Mirespuesta = new Respuesta();

            try
            {
                var usuario = Repository.where(x => x.usuario == request.usuario && x.clave == request.clave).FirstOrDefault();

                if (usuario != null)
                {
                    Mirespuesta.Exito = 1;
                    Mirespuesta.Data = new { token = usuario.usuarioid };
                    Mirespuesta.Mensaje = "Acceso correcto";
                }
                else
                {
                   
                    Mirespuesta.Mensaje = "Credenciales incorrectas";
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
