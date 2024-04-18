namespace Api;

using Api.Infrastructure.Repositories;
using Api.Infrastructure.Services;
using Api.Infrastructure;
using Microsoft.EntityFrameworkCore;

public class Startup
{
	public Startup(IConfiguration configuration)
	{
		Configuration = configuration;
	}

	public IConfiguration Configuration { get; }

	public void ConfigurationServices(IServiceCollection services) 
	{
		services.AddControllers();
		services.AddEndpointsApiExplorer();
		services.AddSwaggerGen();
		services.AddHttpClient();
		services.AddHttpContextAccessor();
		services.AddDbContext<OrderContext>(opt => 
		opt.UseSqlServer(Configuration.GetConnectionString("BrainWareConnection") ?? 
						throw new InvalidOperationException()));
		services.AddScoped<IUnitOfWork, UnitOfWork>();
		services.AddScoped<IOrderService, OrderService>();
	}
}