import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Buildings1731019074414 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "building",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        unsigned: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "address",
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
                    }
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("building");
    }

}