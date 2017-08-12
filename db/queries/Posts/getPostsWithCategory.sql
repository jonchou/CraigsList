SELECT
  *
FROM
  posts
LEFT JOIN
  category
ON
  posts.category_id = category.id
WHERE
  category.name = ${categoryName}