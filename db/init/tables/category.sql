CREATE TABLE IF NOT EXISTS category (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  section_id integer,
  FOREIGN KEY(section_id) REFERENCES sections
);