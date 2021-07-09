using System;
using CablesTool.Areas.Identity.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

[assembly: HostingStartup(typeof(CablesTool.Areas.Identity.IdentityHostingStartup))]
namespace CablesTool.Areas.Identity
{
    public class IdentityHostingStartup : IHostingStartup
    {
        public void Configure(IWebHostBuilder builder)
        {
            builder.ConfigureServices((context, services) => {
                services.AddDbContext<CablesToolIdentityDbContext>(options =>
                    options.UseSqlite("Data Source=Identity.db"));

                /*services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = false)*/
                services.AddDefaultIdentity<IdentityUser>(options => 
                    options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 -._@+"
                )
                    .AddEntityFrameworkStores<CablesToolIdentityDbContext>();
            });
        }
    }
}