using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Twitter.Models
{
    public class twitterContext : DbContext
    {
        protected twitterContext()
        {
        }
    }
}
