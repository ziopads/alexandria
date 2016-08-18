
exports.up = function(knex, Promise) {
  return PromiseAll([
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
    })
    // CREATE BOOKS TABLE

    // CREATE AUTHORS TABLE
    // CREATE GENRES TABLE
    // CREATE BOOKS_AUTHORS TABLE
    // CREATE BOOKS_GENRES TABLE

  ])
};

exports.down = function(knex, Promise) {

};
