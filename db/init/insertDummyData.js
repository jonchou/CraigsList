const db = require('../db.js');
const data = require('./dummyData.json');
const path = require('path');

const QueryFile = db.$config.pgp.QueryFile;

function sql(file) {
  const fullPath = path.join(__dirname, '../queries', file);
  return new QueryFile(fullPath, { minify: true });
}

let queries = {
  addSection: sql('Sections/addSection.sql'),
  addCategory: sql('Category/addCategory.sql')
};

const sectionPromises = data.sections.map(section => {
  return db
    .query(queries.addSection, {
      name: section.name
    })
    .then(result => {
      console.log('success entering sections', result);
    })
    .catch(err => console.log('an error entering sections into db', err));
});

Promise.all(sectionPromises).then(() => {
  const categoryPromises = data.categories.map(category => {
    return db
      .query(queries.addCategory, {
        name: category.name,
        section_id: parseInt(category.section_id)
      })
      .then(result => {
        console.log('success entering categories', result);
      })
      .catch(err => console.log('an error entering categories into db', err));
  });
  Promise.all(categoryPromises).then(() => {
    console.log('complete');
  });
});
