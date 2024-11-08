import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Damages1731019274916 implements MigrationInterface {

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
                        length: "255",
                        isNullable: true
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "255",
                        isNullable: true
                    },
                    {
                        name: "severity",
                        type: "varchar",
                        length: "255",
                        isNullable: true
                    },
                  /*   {
                        name: "apartaments_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "home_property_id",
                        type: "int",
                        isNullable: false,
                    } */
                ],
                /* foreignKeys: [
                    {
                        columnNames: ["apartaments_id"],
                        referencedTableName: "apartaments",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    },
                    {
                        columnNames: ["home_property_id"],
                        referencedTableName: "home_property",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    }
                ] */
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("damages");
    }

}
