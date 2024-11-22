import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Damages1732233235036 implements MigrationInterface {

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
                        isNullable: false
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
                        isNullable: true
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "255",
                        isNullable: true
                    },
                    {
                        name: "building_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "apartment_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "personal_property_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "home_property_id",
                        type: "int",
                        isNullable: false,
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ["building_id"],
                        referencedTableName: "buildings",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    },
                    {
                        columnNames: ["apartment_id"],
                        referencedTableName: "apartments",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    },
                    {
                        columnNames: ["personal_property_id"],
                        referencedTableName: "personalProperty",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    },
                    {
                        columnNames: ["home_property_id"],
                        referencedTableName: "homeProperty",
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
