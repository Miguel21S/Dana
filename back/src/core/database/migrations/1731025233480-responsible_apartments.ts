import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ResponsibleApartments1731025233480 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "responsible_apartments",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        unsigned: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "date",
                        type: "date",
                        isNullable: true
                    },
                    {
                        name: "users_id",
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
                        columnNames: ["users_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    },
                    {
                        columnNames: ["apartment_id"],
                        referencedTableName: "apartment",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    }
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("responsible_apartments");
    }

}
