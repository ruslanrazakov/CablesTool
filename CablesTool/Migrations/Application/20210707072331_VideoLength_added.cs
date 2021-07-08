using Microsoft.EntityFrameworkCore.Migrations;

namespace CablesTool.Migrations.Application
{
    public partial class VideoLength_added : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<float>(
                name: "Length",
                table: "VideoFiles",
                type: "REAL",
                nullable: false,
                defaultValue: 0f);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Length",
                table: "VideoFiles");
        }
    }
}
