import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class HelpRceived1731151727574 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
             name: "helpReceived",
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
                     isNullable: true
                 },
                 {
                     name: "quantity",
                     type: "int",
                     isNullable: true
                 },
                 {
                     name: "description",
                     type: "varchar",
                     length: "255",
                     isNullable: true
                 },
                 {
                     name: "date_receipt",
                     type: "date",
                     isNullable: true
                 },
                 {
                     name: "organization",
                     type: "varchar",
                     length: "255",
                     isNullable: true
                 },
                 {
                     name: "mount",
                     type: "decimal",
                     isNullable: true
                 },
                 {
                    name: "user_id",
                    type: "int",
                    isNullable: false
                 },
                 {
                     name: "apartment_id",
                     type: "int",
                     isNullable: false
                 }
             ],
             foreignKeys: [
                 {
                     columnNames: ["user_id"],
                     referencedTableName: "users",
                     referencedColumnNames: ["id"],
                     onDelete: "CASCADE"
                 },
                 {
                    columnNames: ["apartment_id"],
                    referencedTableName: "apartments",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE"
                 }
             ]
            }),
            true
         )
     }
 
     public async down(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.dropTable("helpReceived");
    }

}
