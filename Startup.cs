using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Entrepot.Data;
using Entrepot.Data.Entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Swashbuckle.AspNetCore.Swagger;

namespace Entrepot {
    public class Startup {
        public Startup (IConfiguration configuration) {
            Configuration = configuration;
        }
        // private readonly IConfiguration Configuration;
        // private readonly IHostingEnvironment _env;

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices (IServiceCollection services) {
            services.AddScoped<RoleManager<IdentityRole>>();

            services.AddIdentity<Utilisateur, IdentityRole> (options => {
                    options.Password.RequireDigit = false;
                    options.Password.RequiredLength = 3;
                    options.Password.RequireNonAlphanumeric = false;
                    options.Password.RequireUppercase = false;
                    options.Password.RequireLowercase = false;
                })
                .AddEntityFrameworkStores<EntrepotContext> ();

            services.AddAuthentication ()
                .AddCookie ()
                .AddJwtBearer (cfg => {
                    cfg.TokenValidationParameters = new TokenValidationParameters () {
                    ValidIssuer = Configuration["Tokens:Issuer"],
                    ValidAudience = Configuration["Tokens:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey (Encoding.UTF8.GetBytes (Configuration["Tokens:Key"]))
                    };

                });

            services.AddDbContext<EntrepotContext> (cfg => {
                cfg.UseSqlServer (Configuration.GetConnectionString ("EntrepotConnectionString"));
            });

            services.AddAutoMapper ();

            services.AddScoped<IEntrepotRepository, EntrepotRepository> ();

            services.AddMvc ()
                .AddJsonOptions (opt => opt.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);;

            // Register the Swagger generator, defining one or more Swagger documents
            services.AddSwaggerGen (c => {
                c.SwaggerDoc ("v1", new Info { Title = "Entrepot API", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, IHostingEnvironment env) {
            if (env.IsDevelopment ()) {
                app.UseDeveloperExceptionPage ();
            }
            app.UseStaticFiles ();
            app.UseAuthentication ();
            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger ();

            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), specifying the Swagger JSON endpoint.
            app.UseSwaggerUI (c => {
                c.SwaggerEndpoint ("/swagger/v1/swagger.json", "My API V1");
            });

            app.UseMvc (cfg => {
                cfg.MapRoute ("Default",
                    "{controller}/{action}/{id?}",
                    new { controller = "App", Action = "App" });
            });
        }

        public class EntrepotContextFactory : IDesignTimeDbContextFactory<EntrepotContext> {
            public EntrepotContextFactory () { }
            public EntrepotContext CreateDbContext (string[] args) {
                IConfigurationRoot configuration = new ConfigurationBuilder ()
                    .SetBasePath (Directory.GetCurrentDirectory ())
                    .AddJsonFile ("appsettings.json")
                    .Build ();
                var optionsBuilder = new DbContextOptionsBuilder<EntrepotContext> ();
                var connextionString = configuration.GetConnectionString ("EntrepotConnectionString");
                optionsBuilder.UseSqlServer (connextionString);
                return new EntrepotContext (optionsBuilder.Options);
            }
        }
    }
}