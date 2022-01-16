using dotenv.net.DependencyInjection.Microsoft;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace API_Twitter
{
    public static class Extensions
    {
        public static IServiceCollection ConfigureEnvironmentVariables(this IServiceCollection services)
        {
            services.AddEnv(builder =>
            {
                builder
                    .AddEnvFile(".env")
                    .AddThrowOnError(false)
                    .AddEncoding(Encoding.ASCII);
            });
            return services;
        }



    }
}
