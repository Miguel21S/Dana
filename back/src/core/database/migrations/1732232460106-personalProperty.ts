import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PersonalProperty1732232460106 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "personalProperty",
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
                        isNullable: false
                    },
                    {
                        name: "value_approximate",
                        type: "decimal",
                        isNullable: false,
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
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("personalProperty");
    }
}
