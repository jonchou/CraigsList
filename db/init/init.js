require('dotenv').config();

const config = process.env.DB_LOCAL;

const path = require('path');
const pgp = require('pg-promise')();

const db = pgp(config);

const sql = file => {
  const fullPath = path.join(__dirname, './tables', file);
  return new pgp.QueryFile(fullPath, { minify: true });
};

const queries = {
  drop: sql('dropTables.sql'),
  sections: sql('sections.sql'),
  category: sql('category.sql'),
  posts: sql('posts.sql')
};

db
  .tx(t => {
    return t.batch(Object.keys(queries).map(k => t.none(queries[k])));
  })
  .then(() => {
    console.log('SUCCESS');
    pgp.end(); // to avoid delay exiting the process;
  })
  .catch(error => {
    console.log('ERROR Here:', error);
    pgp.end(); // to avoid delay exiting the process;
  });
