namespace Api.Infrastructure.Repositories;

public class UnitOfWork : IUnitOfWork
{
    internal readonly OrderContext Context;

    public UnitOfWork(OrderContext context)
    {
        Context = context;

        OrderRepository = new OrderRepository(this);
    }

    public IOrderRepository OrderRepository{get;}

    public void Dispose()
    {
        Context.Dispose();
    }
}