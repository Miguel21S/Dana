import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Mascots1731019369378 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
           new Table ({
            name: "mascots",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    unsigned: true,
                    generationStrategy: "increment"
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "255",
                    isNullable: false
                },
                {
                    name: "species",
                    type: "varchar",
                    length: "50",
                    isNullable: false
                },
                {
                    name: "race",
                    type: "varchar",
                    length: "50",
                    isNullable: false
                },
                {
                    name: "age",
                    type: "int",
                    isNullable: true
                },
                {
                    name: "condition",
                    type: "varchar",
                    length: "50",
                    isNullable: false
                },
                {
                    name: "users_id",
                    type: "int",
                    isNullable: false,
                }
            ],
            foreignKeys: [
                {
                    columnNames: ["users_id"],
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE"
                }
            ]
           }),
           true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("mascots");
    }

}