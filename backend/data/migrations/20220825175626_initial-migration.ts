import { Knex } from "knex";

// TODO: Try changing how the export is handled

exports.up = async function (knex: Knex) {
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

exports.down = async function (knex: Knex) {
  await knex.schema.dropTableIfExists("users");
  await knex.schema.dropTableIfExists("notes");
};
