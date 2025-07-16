import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1752672852046 implements MigrationInterface {
    name = 'Init1752672852046'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "description"`);
    }

}
