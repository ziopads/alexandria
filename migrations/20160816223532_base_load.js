
exports.up = function(knex, Promise) {
  return PromiseAll([
    // CREATE ROLES TABLE
    knex.schema.createTable('roles', (table) => {
      table.increments();
      table.string('role').notNullable();
      table.string('description');
    }),
    // CREATE USERS TABLE
    knex.schema.createTable('users', (table) => {
      table.increments();
      table.string('username').unique().notNullable();
      table.string('email');
      table.string('password');
      table.boolean('isGod').defaultTo(false);
      table.string('firstname');
      table.string('lastname');
      table.string('phoneNumber');
    }),
    // CREATE BOOKS TABLE
    knex.schema.createTable('books', (table) => {
      table.increments();
      table.string('title').notNullable();
      table.text('description');
      table.string('bookcoverurl');
    }),
    // CREATE AUTHORS TABLE
    knex.schema.createTable('authors', (table) => {

    })
    // CREATE GENRES TABLE
    knex.schema.createTable('genres', (table) => {

    })
    // CREATE BOOKS_AUTHORS TABLE
    knex.schema.createTable('books_authors', (table) => {

    })
    // CREATE BOOKS_GENRES TABLE
    knex.schema.createTable('books_genres', (table) => {

    })
  ])
};

exports.down = function(knex, Promise) {
  knex.raw('drop table if exists roles cascade'),
};
