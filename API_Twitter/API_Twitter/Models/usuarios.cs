using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_Twitter.Models
{
    public class usuarios
    {

        [Key]

        public Guid usuarioid { get; set; }

        public string usuario { get; set; }

        public string nombreusuario { get; set; }

        public string clave { get; set; }

        public DateTime fechacreacion { get; set; }

        public string correo { get; set; }
    }
}
