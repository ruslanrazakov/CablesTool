using Microsoft.EntityFrameworkCore.Migrations;

namespace CablesTool.Migrations
{
    public partial class changeUserWorkspaceIdType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "UserWorkspaces");

            migrationBuilder.AddColumn<string>(
                name: "UserIdentifier",
                table: "UserWorkspaces",
                type: "TEXT",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserIdentifier",
                table: "UserWorkspaces");

            migrationBuilder.AddColumn<long>(
                name: "UserId",
                table: "UserWorkspaces",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0L);
        }
    }
}
