import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Disease1732157980253 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "diseases",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "disease_name",
                        type: "varchar",
                        length: "255",
                        isNullable: true
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: true
                    },
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("diseases");
    }
}
