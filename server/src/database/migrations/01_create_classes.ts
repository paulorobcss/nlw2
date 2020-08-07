import Knex from 'knex';

// These two functions must have these names to work
export async function up(knex: Knex) { // does the changes
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE') // onUpdate and onDelete will update/delete all id-linked data
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex) { // undoes the changes
    return knex.schema.dropTable('classes');
}