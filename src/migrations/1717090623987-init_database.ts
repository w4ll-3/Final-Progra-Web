import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDatabase1717090623987 implements MigrationInterface {
    name = 'InitDatabase1717090623987'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."route_status_enum" AS ENUM('active', 'inactive')`);
        await queryRunner.query(`CREATE TABLE "route" ("uid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "description" character varying(255) NOT NULL, "origin" character varying(100) NOT NULL, "destination" character varying(100) NOT NULL, "intermediateStops" text NOT NULL, "status" "public"."route_status_enum" NOT NULL DEFAULT 'active', CONSTRAINT "PK_28c6ca4d975f8f34fe2d8818974" PRIMARY KEY ("uid"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "route"`);
        await queryRunner.query(`DROP TYPE "public"."route_status_enum"`);
    }

}
