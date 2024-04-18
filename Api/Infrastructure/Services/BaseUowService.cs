namespace Api.Infrastructure.Services;

using Api.Infrastructure.Repositories;

public abstract class BaseUowService
{
    protected readonly IUnitOfWork _uow;

    protected BaseUowService(IUnitOfWork uow)
    {
        _uow = uow;
    }
}