const db = require('./../../db/db.js');
const path = require('path');

var QueryFile = db.$config.pgp.QueryFile;

function sql(file) {
  const fullPath = path.join(__dirname, './../../db/queries/Posts', file);
  return new QueryFile(fullPath, { minify: true });
}

const queries = {
  addPost: sql('addPost.sql'),
  getPostsWithCategory: sql('getPostsWithCategory.sql')
};

module.exports.getPostsWithCategory = (req, res) => {
  const { categoryName } = req.params;

  return db
    .query(queries.getPostsWithCategory, { categoryName })
    .then(data => {
      console.log('Success getting posts');
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(404).send('error getting posts with category', error);
    });
};

module.exports.addPost = (req, res) => {
  const { title, image, description, location, section_id, category_id } = req.body;
  return db
    .query(queries.addCategory, { title, image, description, location, section_id, category_id })
    .then(() => {
      res.status(201).send('Success adding post');
    })
    .catch(error => {
      res.status(404).send(error);
    });
};
