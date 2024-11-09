import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ResponsibleApartments1731157772130 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "responsibleApartments",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "date",
                        type: "date",
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
                    },
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
        await queryRunner.dropTable("responsibleApartments");
    }

}
