import { MigrationInterface, QueryRunner } from "typeorm";

export class TablaHorarios1717091344902 implements MigrationInterface {
    name = 'TablaHorarios1717091344902'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."schedule_daysofoperation_enum" AS ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday')`);
        await queryRunner.query(`CREATE TABLE "schedule" ("id" integer NOT NULL, "route_id" integer NOT NULL, "departure_time" TIME NOT NULL, "arrival_time" TIME NOT NULL, "daysOfOperation" "public"."schedule_daysofoperation_enum" NOT NULL, CONSTRAINT "PK_1c05e42aec7371641193e180046" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "schedule"`);
        await queryRunner.query(`DROP TYPE "public"."schedule_daysofoperation_enum"`);
    }

}
