using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Twitter.Models
{
    public partial class twitterContext : DbContext
    {
     

        public twitterContext()
        {
        }

        public twitterContext(DbContextOptions<twitterContext> options) : base(options)
        {
        }


        public virtual DbSet<usuarios> Usuarios { get; set; }

        public virtual DbSet<tweets> Tweets { get; set; }

        public virtual DbSet<comentarios> Comentarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseNpgsql(Environment.GetEnvironmentVariable("DB_CONNECTION"));
            }

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "en_US.utf8");


            modelBuilder.Entity<usuarios>(entity =>
            {
                entity.ToTable("usuarios");
                entity.Property(x => x.usuarioid).HasColumnName("usuarioid");
                entity.Property(x => x.nombreusuario).HasColumnName("nombreusuario");
                entity.Property(x => x.clave).HasColumnName("clave");
                entity.Property(x => x.fechacreacion).HasColumnName("fechacreacion");
                entity.Property(x => x.correo).HasColumnName("correo");

            });

            modelBuilder.Entity<tweets>(entity =>
            {
                entity.ToTable("tweets");
                entity.Property(x => x.tweetid).HasColumnName("tweetid");
                entity.Property(x => x.texto).HasColumnName("texto");
                entity.Property(x => x.fechacreacion).HasColumnName("fechacreacion");
                entity.Property(x => x.usuarioid).HasColumnName("usuarioid");
                entity.HasOne(x => x.usuario);


            });

            modelBuilder.Entity<comentarios>(entity =>
            {
                entity.ToTable("comentarios");
                entity.Property(x => x.idcomentario).HasColumnName("idcomentario");
                entity.Property(x => x.texto).HasColumnName("texto");
                entity.Property(x => x.usuarioid).HasColumnName("usuarioid");
                entity.Property(x => x.fechacreacion).HasColumnName("fechacreacion");

            });


            OnModelCreatingPartial(modelBuilder);
        }


        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);


    }
}
