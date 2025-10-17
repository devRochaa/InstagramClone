using InstagramClone.Infrasctructure.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace InstagramClone.Infrasctructure
{
    internal static class DependencyInjection
    {
        public static void AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            //registra o DbContext com a string de conexão do appsettings.json
            services.AddDbContext<AppDbContext>(options =>
            options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));

            //registra o UnitOfWork
            services.AddScoped<IUnitOfWork, UnitOfWork>();
        }
    }
}
