const db = require('./../../db/db.js');
const path = require('path');

var QueryFile = db.$config.pgp.QueryFile;

function sql(file) {
  const fullPath = path.join(__dirname, './../../db/queries/Sections', file);
  return new QueryFile(fullPath, { minify: true });
}

const queries = {
  addSection: sql('addSection.sql'),
  getSections: sql('getSections.sql')
};

module.exports.getSections = (req, res) => {
  // const { name } = req.query;
  console.log('getting sections');

  return db
    .query(queries.getSections)
    .then(data => {
      console.log('Success get section');
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(404).send('error getting section', error);
    });
};

module.exports.addSection = (req, res) => {
  const { name } = req.body;
  return db
    .query(queries.addSection, { name })
    .then(() => {
      res.status(201).send('Success adding section');
    })
    .catch(error => {
      res.status(404).send(error);
    });
};
