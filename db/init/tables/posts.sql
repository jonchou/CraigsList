CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100),
  image text,
  description text,
  location text,
  section_id integer,
  category_id integer,
  created_at timestamp DEFAULT current_timestamp,
  FOREIGN KEY(section_id) REFERENCES sections,
  FOREIGN KEY(category_id) REFERENCES category
);