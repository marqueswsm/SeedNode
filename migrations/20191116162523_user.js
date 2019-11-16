exports.up = async function up(knex) {
  return knex.schema.createTable('user', (table) => {
    table.string('id').primary().notNullable();
    table.string('name').notNullable();

    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updatedAt').notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP'));
  });
};

exports.down = async function down(knex) {
  return knex.schema.dropTableIfExists('user');
};
