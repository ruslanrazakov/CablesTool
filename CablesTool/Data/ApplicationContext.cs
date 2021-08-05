using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CablesTool.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
        }
        public DbSet<UserWorkspaceEntity> UserWorkspaces { get; set; }

        public DbSet<VideoFileEntity> VideoFiles { get; set; }
        public DbSet<CommentEntity> Comments { get; set; }
        public DbSet<FolderEntity> Folders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<FolderEntity>()
                .Property(e => e.Status)
                .HasConversion(
                    v => v.ToString(),
                    v => (FolderStatus)Enum.Parse(typeof(FolderStatus), v));
        }
    }
}
