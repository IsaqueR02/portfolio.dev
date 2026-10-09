using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Domain.Interfaces
{
    public interface IEmailService
    {
        Task SendEmailAsync(ContactMessage message, CancellationToken cancellationToken = default);
    }
}