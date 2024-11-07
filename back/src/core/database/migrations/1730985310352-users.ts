
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1730985310352 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "lastname",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "date_born",
                        type: "date",
                        isNullable: false
                    },
                    {
                        name: "gender",
                        type: "varchar",
                        length: "50",
                        isNullable: false
                    },
                    {
                        name: "phone",
                        type: "varchar",
                        length: "50"
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "special_situation",
                        type: "varchar",
                        length: "255"
                    },
                    {
                        name: "date_entry_apartment",
                        type: "date",
                        isNullable: true
                    },
                    {
                        name: "password",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "role_id",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "apartment_id",
                        type: "int",
                        isNullable: true
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ["role_id"],
                        referencedTableName: "roles",
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
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
