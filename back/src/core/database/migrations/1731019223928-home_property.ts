import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class HomeProperty1731019223928 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "home_property",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "255",
                        isNullable: true
                    },
                    {
                        name: "value_approximate",
                        type: "decimal",
                        length: "50",
                        isNullable: true
                    },
                    {
                        name: "condition",
                        type: "varchar",
                        length: "255",
                        isNullable: true
                    },
                    /* {
                        name: "apartaments_id",
                        type: "int",
                        isNullable: false,
                    } */
                ],
                /* foreignKeys: [
                    {
                        columnNames: ["apartaments_id"],
                        referencedTableName: "apartaments",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    }
                ] */
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("home_property")
    }

}
