import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Cars1731019245531 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cars",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "brand",
                        type: "varchar",
                        length: "50",
                        isNullable: false
                    },
                    {
                        name: "model",
                        type: "varchar",
                        length: "50",
                        isNullable: false
                    },
                    {
                        name: "year",
                        type: "int",
                        isNullable: true
                    },
                    {
                        name: "number_plate",
                        type: "varchar",
                        length: "10",
                        isNullable: false
                    },
                    {
                        name: "color",
                        type: "varchar",
                        length: "50",
                        isNullable: true
                    },
                    {
                        name: "value_approximate",
                        type: "decimal",
                        length: "10",
                        isNullable: false
                    },
                    {
                        name: "condition",
                        type: "varchar",
                        length: "50",
                        isNullable: true
                    },
                  /*   {
                        name: "users_id",
                        type: "int",
                        isNullable: false
                    } */
                ],
               /*  foreignKeys: [
                    {
                        columnNames: ["users_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    }
                ] */
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("cars");
    }

}
