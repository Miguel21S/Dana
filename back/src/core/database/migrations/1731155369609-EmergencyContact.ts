import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class EmergencyContact1731155369609 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "emergencyContact",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "contactName",
                        type: "varchar",
                        length: "255",
                        isNullable: true
                    },
                    {
                        name: "contactPhone",
                        type: "varchar",
                        length: "255",
                        isNullable: true
                    },
                    {
                        name: "contactEmail",
                        type: "varchar",
                        length: "255",
                        isNullable: true
                    },
                    {
                        name: "relationShip",
                        type: "varchar",
                        length: "255",
                        isNullable: true
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
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("emergencyContact");
    }

}
