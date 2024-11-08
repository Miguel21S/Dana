import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class HelpReceived1731019295116 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
           new Table ({
            name: "help_received",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "description",
                    type: "varchar",
                    length: "255",
                    isNullable: true
                },
                {
                    name: "date_receipt",
                    type: "date",
                    isNullable: true
                },
                {
                    name: "organization",
                    type: "varchar",
                    length: "255",
                    isNullable: true
                },
              /*   {
                    name: "mount",
                    type: "decimal",
                    length: "10",
                    isNullable: true
                } */
            ],
           /*  foreignKeys: [
                {
                    columnNames: ["users_id"],
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE"
                }
            ] */
           }),
           true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("help_received");
    }

}
