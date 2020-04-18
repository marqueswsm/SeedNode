const up = async (knex) => {
  await knex.schema.createTable('reference', (table) => {
    table.string('id').primary().notNullable();
    table.string('description', 255);
    table.string('citation', 255).notNullable();
    table.string('year', 4);
    table.string('bibtex', 255).notNullable();
  });
};

const down = async (knex) => {
  await knex.schema.dropTableIfExists('reference');
};

module.exports = { up, down };
