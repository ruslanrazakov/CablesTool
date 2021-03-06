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
        public DbSet<RootFolderEntity> RootFolders { get; set; }
        public DbSet<FileFolderEntity> FileFolders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<RootFolderEntity>()
                .Property(e => e.Status)
                .HasConversion(
                    v => v.ToString(),
                    v => (FolderStatus)Enum.Parse(typeof(FolderStatus), v));

            modelBuilder
               .Entity<RootFolderEntity>()
               .Property(e => e.Role)
               .HasConversion(
                   v => v.ToString(),
                   v => (Role)Enum.Parse(typeof(Role), v));

            modelBuilder
                .Entity<FileFolderEntity>()
                .Property(e => e.Status)
                .HasConversion(
                    v => v.ToString(),
                    v => (FolderStatus)Enum.Parse(typeof(FolderStatus), v));

            modelBuilder
               .Entity<VideoFileEntity>()
               .Property(e => e.Status)
               .HasConversion(
                   v => v.ToString(),
                   v => (FolderStatus)Enum.Parse(typeof(FolderStatus), v));
        }
    }
}
