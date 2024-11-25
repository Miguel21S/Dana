import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class HomeProperty1732403963545 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "homeProperty",
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
                        isNullable: false
                    },
                    {
                        name: "value_approximate",
                        type: "decimal",
                        isNullable: false
                    },
                    {
                        name: "condition",
                        type: "varchar",
                        length: "255",
                        isNullable: true
                    },                    
                    {
                        name: "apartment_id",
                        type: "int",
                        isNullable: false,
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ["apartment_id"],
                        referencedTableName: "apartments",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("homeProperty")
    }

}
