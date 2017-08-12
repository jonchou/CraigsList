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
  addCategory: sql('Category/addCategory.sql'),
  addPost: sql('Posts/addPost.sql')
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
    const postsPromises = data.posts.map(post => {
      return db
        .query(queries.addPost, {
          title: post.title,
          image: post.image,
          description: post.description,
          location: post.location,
          section_id: post.section_id,
          category_id: post.category_id
        })
        .then(result => {
          console.log('success entering posts', result);
        })
        .catch(err => console.log('an error entering posts into db', err));
    });

    Promise.all(postsPromises).then(() => {
      console.log('complete');
    });
  });
});
