using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_Twitter.Models
{
    public class tweets
    {
      [Key]

      public Guid tweetid { get; set; }

        public string texto { get; set; }

        public DateTime fechacreacion { get; set; }

        public Guid usuarioid { get; set; }

       public usuarios usuario { get; set; }

      
    }
}
