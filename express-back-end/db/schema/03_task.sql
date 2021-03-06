-- Drop and recreate task table

DROP TABLE IF EXISTS tasks CASCADE;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY NOT NULL,
  name  VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  due_date INTEGER NOT NULL,
  url VARCHAR(255),
  zoom VARCHAR(255)
);
