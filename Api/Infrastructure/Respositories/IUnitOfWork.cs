namespace Api.Infrastructure.Repositories;

public interface IUnitOfWork : IDisposable
{
    IOrderRepository OrderRepository { get; }
}