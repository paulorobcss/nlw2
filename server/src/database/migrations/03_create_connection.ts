import Knex from 'knex';

// These two functions must have these names to work
export async function up(knex: Knex) { // does the changes
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE') // onUpdate and onDelete will update/delete all id-linked data
            .onDelete('CASCADE');

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    });
}

export async function down(knex: Knex) { // undoes the changes
    return knex.schema.dropTable('connections');
}