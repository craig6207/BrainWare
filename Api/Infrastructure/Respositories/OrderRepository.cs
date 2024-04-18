namespace Api.Infrastructure.Repositories;

using Api.Models;
using Microsoft.EntityFrameworkCore;

	public class OrderRepository : IOrderRepository
	{
		private readonly UnitOfWork _uow;

		public OrderRepository(UnitOfWork uow)
		{
			_uow = uow;
		}

		public Task<IList<Order>> GetOrdersByCompany(int company)
		{
		return (Task<IList<Order>>)_uow.Context.Orders
			.Include(x => x.Company)
			.Include(x => x.OrderProducts)
			.ThenInclude(x => x.Product)
			.Where(x => x.CompanyId == company);
		}
	}
