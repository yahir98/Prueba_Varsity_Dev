using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Twitter.Models.Request
{
    public class ComentariosRequest
    {

        public Guid tweetid { get; set; }
        public string texto { get; set; }

        public Guid usuarioid { get; set; }
    }
}
