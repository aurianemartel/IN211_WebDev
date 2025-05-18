/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
export default class Movie21747578233303 {
    name = 'Movie21747578233303'

    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "movie" DROP COLUMN "release_date"
        `);
        await queryRunner.query(`
            ALTER TABLE "movie"
            ADD "release_date" character varying NOT NULL
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "movie" DROP COLUMN "release_date"
        `);
        await queryRunner.query(`
            ALTER TABLE "movie"
            ADD "release_date" date NOT NULL
        `);
    }
}
