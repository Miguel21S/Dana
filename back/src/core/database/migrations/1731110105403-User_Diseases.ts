import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UserDiseases1731110105403 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user_diseases",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                       name: "user_id",
                        type: "int",
                        isNullable: false
                    },
                    {
                       name: "disease_id",
                       type: "int",
                       isNullable: false
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ["user_id"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    },
                    {
                        columnNames: ["disease_id"],
                        referencedTableName: "diseases",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user_diseases");
    }

}
