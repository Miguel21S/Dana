import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Damages1731256609329 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "damages",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "type_damage",
                        type: "varchar",
                        length: "100",
                        isNullable: true
                    },
                    {
                        name: "severity",
                        type: "varchar",
                        length: "100",
                        isNullable: false
                    },
                    {
                        name: "estimated_repair_cost",
                        type: "varchar",
                        length: "100",
                        isNullable: false
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "255",
                        isNullable: true
                    },
                    {
                        name: "apartment_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "personal_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "home_id",
                        type: "int",
                        isNullable: false,
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ["apartment_id"],
                        referencedTableName: "apartments",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    },
                    {
                        columnNames: ["personal_id"],
                        referencedTableName: "personalProperty",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    },
                    {
                        columnNames: ["home_id"],
                        referencedTableName: "home_property",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    }
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("damages");
    }

}
