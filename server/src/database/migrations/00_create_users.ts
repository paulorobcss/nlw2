import Knex from 'knex';

// These two functions must have these names to work
export async function up(knex: Knex) { // does the changes
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}

export async function down(knex: Knex) { // undoes the changes
    return knex.schema.dropTable('users');
}