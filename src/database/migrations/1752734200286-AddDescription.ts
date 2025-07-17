import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDescription1752734200286 implements MigrationInterface {
    name = 'AddDescription1752734200286'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "description"`);
    }

}
