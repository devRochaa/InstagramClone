namespace InstagramClone.Domain.Repositories;

public interface IUnitOfWork : IAsyncDisposable
{
    /// <summary>
    /// Começa uma nova transação no banco de dados assincronamente.
    /// </summary>
    /// <param name="cancellation">Um token de cancelamento que pode ser usado para cancelar a operação de iniciação da transação.</param>
    /// <returns>Uma tarefa que representa a operação assíncrona de início da transação</returns>
    Task BeginTransactionAsync(CancellationToken cancellation = default);

    /// <summary>
    /// Salva as alterações e confirma a transação no banco de dados, se houver uma em andamento.
    /// </summary>
    /// <param name="cancellation"></param>
    /// <returns></returns>
    Task CommitAsync(CancellationToken cancellation = default);

    /// <summary>
    /// Cancela a transação em andamento no banco de dados, se houver uma.
    /// </summary>
    /// <param name="cancellation"></param>
    /// <returns></returns>
    Task RollbackAsync(CancellationToken cancellation = default);
}
