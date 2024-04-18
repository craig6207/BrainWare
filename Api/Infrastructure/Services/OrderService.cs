using Api.Infrastructure.Repositories;
using Api.Models;

namespace Api.Infrastructure.Services;

public class OrderService : BaseUowService, IOrderService
{
    
    public OrderService(IUnitOfWork uow) : base(uow)
    {        
    }
        public Task<IList<Order>> GetOrders(int companyId)
        {

            var orderList = _uow.OrderRepository.GetOrdersByCompany(companyId);

            return orderList;
        }
}