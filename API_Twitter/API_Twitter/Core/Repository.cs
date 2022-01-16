using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace API_Twitter.Core
{
    public interface Repository<TEntity> where TEntity: class
    {

        IQueryable<TEntity> Queryable();

        TEntity Find(object id);

        TEntity Create(TEntity entity);

        TEntity Update(TEntity entity);

        void ForceDelete(TEntity entity);

        List<TEntity> where(Expression<Func<TEntity, bool>> clause);

        List<TEntity> All();


    }

    public class GenericRepository<T> : Repository<T> where T : class
    {

        public DbContext DbContext { get; set; }

        public GenericRepository(DbContext context)
        {
            this.DbContext = context;
        }

        public List<T> All()
        {
            return DbContext.Set<T>().ToList();
        }

        public T Create(T entity)
        {
            DbContext.Set<T>().Add(entity);
            DbContext.SaveChanges();
            return entity;
        }

        public T Find(object id)
        {
            return DbContext.Set<T>().Find(id);
        }

        public void ForceDelete(T entity)
        {
            DbContext.Set<T>().Remove(entity);
            DbContext.SaveChanges();
        }

        public IQueryable<T> Queryable()
        {
            return DbContext.Set<T>();
        }

        public T Update(T entity)
        {
            DbContext.Set<T>().Attach(entity);
            DbContext.SaveChanges();
            return entity;
        }

        public List<T> where(Expression<Func<T, bool>> clause)
        {
            return DbContext.Set<T>().Where(clause).ToList();
        }
    }
}
