import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Apartments1732403459282 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "apartments",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "apartament_number",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "number_floor",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "area_m2",
                        type: "varchar",
                        length: "50",
                        isNullable: true
                    },
                    {
                        name: "condition",
                        type: "varchar",
                        length: "1000",
                        isNullable: true
                    },
                    {
                        name: "building_id",
                        type: "int",
                        isNullable: false,
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ["building_id"],
                        referencedTableName: "buildings",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    }
                ]
            }),            
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("apartments");
    }

}
