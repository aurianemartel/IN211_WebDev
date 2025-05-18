/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 */

/**
 * @class
 * @implements {MigrationInterface}
 */
export default class Movie31747578367735 {
    name = 'Movie31747578367735'

    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "movie"
            ALTER COLUMN "adult"
            SET DEFAULT false
        `);
        await queryRunner.query(`
            ALTER TABLE "movie"
            ALTER COLUMN "video"
            SET DEFAULT false
        `);
    }

    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "movie"
            ALTER COLUMN "video" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "movie"
            ALTER COLUMN "adult" DROP DEFAULT
        `);
    }
}
