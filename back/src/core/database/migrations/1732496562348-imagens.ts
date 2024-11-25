import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Imagens1732496562348 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "imagens",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "entity_type",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "entity_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "image_url",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "255",
                        isNullable: true,
                    },
                    {
                        name: "upload_date",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        isNullable: false,
                    },
                ],
            }),
            true
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("imagens");
    }

}
