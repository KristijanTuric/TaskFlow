using Microsoft.EntityFrameworkCore;
using TaskFlow.Server.Models;

namespace TaskFlow.Server.Data
{
    // AppDbContext will manage the connection to your database and track changes to your data entities
    public class AppDbContext : DbContext
    {
        // The options contain the configuration info for example, db provider, connection string, etc.
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        // Defines a table in the DB, a table of TaskItem entities
        // EF Core uses this to query and save TaskItem objects to the DB
        public DbSet<TaskItem> TaskItems { get; set; }
    }
}
