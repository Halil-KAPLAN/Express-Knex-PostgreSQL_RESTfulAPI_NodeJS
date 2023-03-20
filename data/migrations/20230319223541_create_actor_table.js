/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("actor", (table) => {
      table.increments("id");
      table.string("name").notNullable();
    })
    .createTable("films", (table) => {
      table.increments("id");
      table.string("name").notNullable();
    })
    .createTable("actor_film", (table) => {
      table.increments("id");
      table.integer("actor_id").unsigned();
      table.integer("film_id").unsigned();
      table
        .foreign("film_id")
        .references("films.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .foreign("actor_id")
        .references("actor.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("actor_film")
    .dropTableIfExists("film")
    .dropTableIfExists("actor");
};
