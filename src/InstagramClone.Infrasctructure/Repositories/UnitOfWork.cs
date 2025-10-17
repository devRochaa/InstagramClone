using InstagramClone.Domain.Repositories;
using InstagramClone.Infrasctructure.Context;
using Microsoft.EntityFrameworkCore.Storage;

namespace InstagramClone.Infrasctructure.Repositories;

internal class UnitOfWork(AppDbContext context) : IUnitOfWork{
    private IDbContextTransaction? _transaction;
    private int _transactionDepth;

    public Task BeginTransactionAsync(CancellationToken cancellation = default)
    {
        throw new NotImplementedException();
    }

    public Task CommitAsync(CancellationToken cancellation = default)
    {
        throw new NotImplementedException();
    }

    public ValueTask DisposeAsync()
    {
        throw new NotImplementedException();
    }

    public Task RollbackAsync(CancellationToken cancellation = default)
    {
        throw new NotImplementedException();
    }
}
