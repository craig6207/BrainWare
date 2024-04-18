namespace Api.Infrastructure.Repositories;

using Api.Models;

public interface IOrderRepository
{
	Task<IList<Order>> GetOrdersByCompany(int company);
}