import typeorm from "typeorm";

const { MigrationInterface, QueryRunner } = typeorm;

export default class UniqueMovieTitle1745915240557 {
    name = 'UniqueMovieTitle1745915240557'

    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "movie"
            ADD CONSTRAINT "UQ_a81090ad0ceb645f30f9399c347" UNIQUE ("title")
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "movie" DROP CONSTRAINT "UQ_a81090ad0ceb645f30f9399c347"
        `);
    }
}
