using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System.Text;

namespace InstagramClone.Infrasctructure.Context;

internal class AppDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
{
    public AppDbContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();
        optionsBuilder.UseSqlServer(
            connectionString: "Data Source=DESKTOP-1O4VLF8\\SQLEXPRESS;Initial Catalog=instagramDb;Integrated Security=True;Persist Security Info=False;Pooling=False;MultipleActiveResultSets=False;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;Packet Size=4096;Command Timeout=0"
            //sqlServerOptionsAction: sqlServerOption => {
            //    sqlServerOption.MigrationsAssembly(typeof(DependencyInjection).Namespace);
            //}
            );

        return new AppDbContext( optionsBuilder.Options );
    }
}
