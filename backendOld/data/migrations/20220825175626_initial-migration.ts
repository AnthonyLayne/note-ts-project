/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema
    .createTable("notes", (table) => {
      table.increments("note_id");
      table.string("user_username", 60).notNullable();
      table.string("note_title", 200).notNullable();
      table.string("note_description").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("users", (table) => {
      table.increments("user_id");
      table.string("user_username", 60).notNullable();
      table.string("user_password", 60).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("users");
  await knex.schema.dropTableIfExists("notes");
};
