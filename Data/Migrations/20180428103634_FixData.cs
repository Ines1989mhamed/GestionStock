using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Entrepot.Migrations
{
    public partial class FixData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fiches_AspNetUsers_UtilisateurId",
                table: "Fiches");

            migrationBuilder.DropForeignKey(
                name: "FK_LigneProduits_Fiches_FicheId",
                table: "LigneProduits");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Fiches",
                table: "Fiches");

            migrationBuilder.RenameTable(
                name: "Fiches",
                newName: "Fiche");

            migrationBuilder.RenameIndex(
                name: "IX_Fiches_UtilisateurId",
                table: "Fiche",
                newName: "IX_Fiche_UtilisateurId");

            migrationBuilder.RenameColumn(
                name: "Prenom",
                table: "AspNetUsers",
                newName: "Lastname");

            migrationBuilder.RenameColumn(
                name: "Nom",
                table: "AspNetUsers",
                newName: "Firstname");

            migrationBuilder.AddColumn<Guid>(
                name: "ReservationId",
                table: "LigneProduits",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Fiche",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<Guid>(
                name: "TransporteurId",
                table: "Fiche",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "FournisseurId",
                table: "Fiche",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "ClientId",
                table: "Fiche",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "FicheSortie_ClientId",
                table: "Fiche",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Fiche",
                table: "Fiche",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Adresse = table.Column<string>(nullable: true),
                    Nom = table.Column<string>(nullable: true),
                    Tel = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Fournisseurs",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Adresse = table.Column<string>(nullable: true),
                    Designation = table.Column<string>(nullable: true),
                    Nom = table.Column<string>(nullable: true),
                    Tel = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fournisseurs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Transporteurs",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Adresse = table.Column<string>(nullable: true),
                    Nom = table.Column<string>(nullable: true),
                    Tel = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transporteurs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Voitures",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Matricule = table.Column<string>(nullable: true),
                    designation = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Voitures", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Reservations",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ClientId = table.Column<Guid>(nullable: true),
                    DateDeb = table.Column<DateTime>(nullable: false),
                    Datefin = table.Column<DateTime>(nullable: false),
                    EmployeeId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reservations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Reservations_Clients_ClientId",
                        column: x => x.ClientId,
                        principalTable: "Clients",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Reservations_AspNetUsers_EmployeeId",
                        column: x => x.EmployeeId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_LigneProduits_ReservationId",
                table: "LigneProduits",
                column: "ReservationId");

            migrationBuilder.CreateIndex(
                name: "IX_Fiche_TransporteurId",
                table: "Fiche",
                column: "TransporteurId");

            migrationBuilder.CreateIndex(
                name: "IX_Fiche_FournisseurId",
                table: "Fiche",
                column: "FournisseurId");

            migrationBuilder.CreateIndex(
                name: "IX_Fiche_ClientId",
                table: "Fiche",
                column: "ClientId");

            migrationBuilder.CreateIndex(
                name: "IX_Fiche_FicheSortie_ClientId",
                table: "Fiche",
                column: "FicheSortie_ClientId");

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_ClientId",
                table: "Reservations",
                column: "ClientId");

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_EmployeeId",
                table: "Reservations",
                column: "EmployeeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Fiche_Transporteurs_TransporteurId",
                table: "Fiche",
                column: "TransporteurId",
                principalTable: "Transporteurs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Fiche_AspNetUsers_UtilisateurId",
                table: "Fiche",
                column: "UtilisateurId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Fiche_Fournisseurs_FournisseurId",
                table: "Fiche",
                column: "FournisseurId",
                principalTable: "Fournisseurs",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Fiche_Clients_ClientId",
                table: "Fiche",
                column: "ClientId",
                principalTable: "Clients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Fiche_Clients_FicheSortie_ClientId",
                table: "Fiche",
                column: "FicheSortie_ClientId",
                principalTable: "Clients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_LigneProduits_Fiche_FicheId",
                table: "LigneProduits",
                column: "FicheId",
                principalTable: "Fiche",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_LigneProduits_Reservations_ReservationId",
                table: "LigneProduits",
                column: "ReservationId",
                principalTable: "Reservations",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Fiche_Transporteurs_TransporteurId",
                table: "Fiche");

            migrationBuilder.DropForeignKey(
                name: "FK_Fiche_AspNetUsers_UtilisateurId",
                table: "Fiche");

            migrationBuilder.DropForeignKey(
                name: "FK_Fiche_Fournisseurs_FournisseurId",
                table: "Fiche");

            migrationBuilder.DropForeignKey(
                name: "FK_Fiche_Clients_ClientId",
                table: "Fiche");

            migrationBuilder.DropForeignKey(
                name: "FK_Fiche_Clients_FicheSortie_ClientId",
                table: "Fiche");

            migrationBuilder.DropForeignKey(
                name: "FK_LigneProduits_Fiche_FicheId",
                table: "LigneProduits");

            migrationBuilder.DropForeignKey(
                name: "FK_LigneProduits_Reservations_ReservationId",
                table: "LigneProduits");

            migrationBuilder.DropTable(
                name: "Fournisseurs");

            migrationBuilder.DropTable(
                name: "Reservations");

            migrationBuilder.DropTable(
                name: "Transporteurs");

            migrationBuilder.DropTable(
                name: "Voitures");

            migrationBuilder.DropTable(
                name: "Clients");

            migrationBuilder.DropIndex(
                name: "IX_LigneProduits_ReservationId",
                table: "LigneProduits");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Fiche",
                table: "Fiche");

            migrationBuilder.DropIndex(
                name: "IX_Fiche_TransporteurId",
                table: "Fiche");

            migrationBuilder.DropIndex(
                name: "IX_Fiche_FournisseurId",
                table: "Fiche");

            migrationBuilder.DropIndex(
                name: "IX_Fiche_ClientId",
                table: "Fiche");

            migrationBuilder.DropIndex(
                name: "IX_Fiche_FicheSortie_ClientId",
                table: "Fiche");

            migrationBuilder.DropColumn(
                name: "ReservationId",
                table: "LigneProduits");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Fiche");

            migrationBuilder.DropColumn(
                name: "TransporteurId",
                table: "Fiche");

            migrationBuilder.DropColumn(
                name: "FournisseurId",
                table: "Fiche");

            migrationBuilder.DropColumn(
                name: "ClientId",
                table: "Fiche");

            migrationBuilder.DropColumn(
                name: "FicheSortie_ClientId",
                table: "Fiche");

            migrationBuilder.RenameTable(
                name: "Fiche",
                newName: "Fiches");

            migrationBuilder.RenameIndex(
                name: "IX_Fiche_UtilisateurId",
                table: "Fiches",
                newName: "IX_Fiches_UtilisateurId");

            migrationBuilder.RenameColumn(
                name: "Lastname",
                table: "AspNetUsers",
                newName: "Prenom");

            migrationBuilder.RenameColumn(
                name: "Firstname",
                table: "AspNetUsers",
                newName: "Nom");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Fiches",
                table: "Fiches",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Fiches_AspNetUsers_UtilisateurId",
                table: "Fiches",
                column: "UtilisateurId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_LigneProduits_Fiches_FicheId",
                table: "LigneProduits",
                column: "FicheId",
                principalTable: "Fiches",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
