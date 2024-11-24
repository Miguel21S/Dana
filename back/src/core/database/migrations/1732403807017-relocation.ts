import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Relocation1732403807017 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "relocation",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "new_address",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "postal_code",
                        type: "varchar",
                        length: "10",
                        isNullable: false
                    },
                    {
                        name: "city",
                        type: "varchar",
                        length: "50",
                        isNullable: false
                    },
                    {
                        name: "province",
                        type: "varchar",
                        length: "50",
                        isNullable: false
                    },
                    {
                        name: "build_type",
                        type: "varchar",
                        length: "50",
                        isNullable: true
                    },
                    {
                        name: "floor_number",
                        type: "int",
                        isNullable: true
                    },
                    {
                        name: "date_relocation",
                        type: "date",
                        isNullable: true
                    },
                    {
                        name: "reason_relocation",
                        type: "varchar",
                        length: "255",
                        isNullable: true
                    },
                    {
                        name: "estimated_duration",
                        type: "varchar",
                        length: "50",
                        isNullable: true
                    },
                    {
                        name: "user_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "apartment_id",
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
                    },
                    {
                        columnNames: ["apartment_id"],
                        referencedTableName: "apartments",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    }
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("relocation");
    }

}
