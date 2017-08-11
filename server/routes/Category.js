const db = require('./../../db/db.js');
const path = require('path');

var QueryFile = db.$config.pgp.QueryFile;

function sql(file) {
  const fullPath = path.join(__dirname, './../../db/queries/category', file);
  return new QueryFile(fullPath, { minify: true });
}

const queries = {
  addCategory: sql('addCategory.sql'),
  getCategories: sql('getCategories.sql')
};

module.exports.getCategories = (req, res) => {
  const { name } = req.query;

  return db
    .query(queries.getCategories, { name })
    .then(data => {
      console.log('Success get categories');
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(404).send('error getting categories', error);
    });
};

module.exports.addCategory = (req, res) => {
  const { name } = req.body;
  return db
    .query(queries.addCategory, { name })
    .then(() => {
      res.status(201).send('Success adding category');
    })
    .catch(error => {
      res.status(404).send(error);
    });
};
