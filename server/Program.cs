namespace Server
{
    class Program
    {
        public static void Main(string[] args)
        {
            var settings = new Settings();
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllers();

            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: settings.defaultCorsPolicy, builder =>
                {
                    builder.WithOrigins(settings.allowedOrigins)
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
            });

            var app = builder.Build();

            app.UseCors(settings.defaultCorsPolicy);

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}