using Api.Models;

namespace Api.Infrastructure.Services;

public interface IOrderService
{  
    Task<IList<Order>> GetOrders(int id);
}