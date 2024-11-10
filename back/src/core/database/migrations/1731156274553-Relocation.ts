import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Relocation1731156274553 implements MigrationInterface {

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
                        name: "newAddress",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },
                    {
                        name: "postalCode",
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
                        name: "buildType",
                        type: "varchar",
                        length: "50",
                        isNullable: true
                    },
                    {
                        name: "floorNumber",
                        type: "int",
                        isNullable: true
                    },
                    {
                        name: "dateRelocation",
                        type: "date",
                        isNullable: true
                    },
                    {
                        name: "reasonRelocation",
                        type: "varchar",
                        length: "255",
                        isNullable: true
                    },
                    {
                        name: "estimatedDuration",
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
                        name: "partment_id",
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
                        columnNames: ["partment_id"],
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
