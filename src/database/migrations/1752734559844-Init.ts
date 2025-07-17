import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1752734559844 implements MigrationInterface {
    name = 'Init1752734559844'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todo" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "completed" boolean NOT NULL DEFAULT false, "description" character varying, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todo"`);
    }

}
