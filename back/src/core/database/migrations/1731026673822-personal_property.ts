import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PersonalProperty1731026673822 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "personal_property",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        unsigned: true,
                        generationStrategy: "increment"
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
                        isNullable: true,
                    },
                    {
                        name: "condition",
                        type: "varchar",
                        length: "255",
                        isNullable: true,
                    },
                    {
                        name: "user_id",
                        type: "int",
                        isNullable: false,
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ["user_id"],
                        referencedTableName: "user",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("personal_property");
    }

}
