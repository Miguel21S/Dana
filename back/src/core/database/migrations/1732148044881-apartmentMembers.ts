import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ApartmentMembers1732148044881 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "apartmentMembers",
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
                        isNullable: false,
                    },
                    {
                        name: "relation",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "age",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "gender",
                        type: "varchar",
                        length: "10",
                        isNullable: false
                    },
                    {
                        name: "special_situation",
                        type: "varchar",
                        length: "255",
                        isNullable: true
                    },
                    {
                        name: "apartment_id",
                        type: "int",
                        isNullable: false
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ["apartment_id"],
                        referencedTableName: "apartments",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("apartmentMembers");
    }

}
