import { appDataSource } from './datasource.js'; 


async function deleteMigrationTable() {
  try {
    // Initialize the data source (connect to the database)
    await appDataSource.initialize();
    console.log('DataSource has been initialized.');

    // Create a query runner to interact with the database
    const queryRunner = appDataSource.createQueryRunner();

    // Start a transaction (optional but recommended)
    await queryRunner.startTransaction();

    // Run raw SQL to drop the migration table
    await queryRunner.query('DROP TABLE IF EXISTS migrations');
    console.log('Migration table deleted successfully.');

    // Commit the transaction
    await queryRunner.commitTransaction();
  } catch (error) {
    console.error('Error deleting migration table:', error);
    // Rollback in case of error
    await queryRunner.rollbackTransaction();
  } finally {
    // Release the query runner to free resources
    await appDataSource.destroy();  // This will close the connection after usage
    console.log('DataSource connection destroyed.');
  }
}

deleteMigrationTable().catch((err) => console.error('Error:', err));
