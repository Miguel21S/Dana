import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class EmergencyContact1731019311265 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
name: "emergency_contact",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "contact_name",
                        type: "varchar",
                        length: "255",
                        isNullable: true
                    },
                    {
                        name: "contact_phone",
                        type: "varchar",
                        length: "255",
                        isNullable: true
                    },
                    {
                        name: "contact_email",
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
                   /*  {
                        name: "users_id",
                        type: "int",
                        isNullable: false,
                    } */
                ],
                /* foreignKeys: [
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
        await queryRunner.dropTable("emergency_contact");
    }

}
