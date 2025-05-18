/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
export default class FullMovie1747577475043 {
    name = 'FullMovie1747577475043'

    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "movie" DROP COLUMN "date"
        `);
        await queryRunner.query(`
            ALTER TABLE "movie"
            ADD "release_date" date NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "movie"
            ADD "poster_path" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "movie"
            ADD "adult" boolean NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "movie"
            ADD "backdrop_path" character varying
        `);
        await queryRunner.query(`
            ALTER TABLE "movie"
            ADD "genre_ids" text
        `);
        await queryRunner.query(`
            ALTER TABLE "movie"
            ADD "original_language" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "movie"
            ADD "original_title" character varying NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "movie"
            ADD "overview" text
        `);
        await queryRunner.query(`
            ALTER TABLE "movie"
            ADD "popularity" double precision NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "movie"
            ADD "video" boolean NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "movie"
            ADD "vote_average" double precision NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "movie"
            ADD "vote_count" integer NOT NULL
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "movie" DROP COLUMN "vote_count"
        `);
        await queryRunner.query(`
            ALTER TABLE "movie" DROP COLUMN "vote_average"
        `);
        await queryRunner.query(`
            ALTER TABLE "movie" DROP COLUMN "video"
        `);
        await queryRunner.query(`
            ALTER TABLE "movie" DROP COLUMN "popularity"
        `);
        await queryRunner.query(`
            ALTER TABLE "movie" DROP COLUMN "overview"
        `);
        await queryRunner.query(`
            ALTER TABLE "movie" DROP COLUMN "original_title"
        `);
        await queryRunner.query(`
            ALTER TABLE "movie" DROP COLUMN "original_language"
        `);
        await queryRunner.query(`
            ALTER TABLE "movie" DROP COLUMN "genre_ids"
        `);
        await queryRunner.query(`
            ALTER TABLE "movie" DROP COLUMN "backdrop_path"
        `);
        await queryRunner.query(`
            ALTER TABLE "movie" DROP COLUMN "adult"
        `);
        await queryRunner.query(`
            ALTER TABLE "movie" DROP COLUMN "poster_path"
        `);
        await queryRunner.query(`
            ALTER TABLE "movie" DROP COLUMN "release_date"
        `);
        await queryRunner.query(`
            ALTER TABLE "movie"
            ADD "date" character varying NOT NULL
        `);
    }
}
