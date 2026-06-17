export const DEFAULT_SETUP_SQL = `
  CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    enrollment_date DATE DEFAULT CURRENT_DATE,
    gpa NUMERIC(3,2)
  );

  CREATE TABLE IF NOT EXISTS courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    credits INT NOT NULL DEFAULT 3,
    category VARCHAR(50)
  );

  CREATE TABLE IF NOT EXISTS enrollments (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id),
    course_id INT REFERENCES courses(id),
    grade VARCHAR(2),
    enrolled_at TIMESTAMP DEFAULT NOW()
  );

  INSERT INTO students (name, email, enrollment_date, gpa) VALUES
    ('Andi Pratama', 'andi@example.com', '2024-01-15', 3.75),
    ('Budi Santoso', 'budi@example.com', '2024-02-01', 3.50),
    ('Citra Dewi', 'citra@example.com', '2024-01-20', 3.90),
    ('Dian Sari', 'dian@example.com', '2024-03-10', 3.20),
    ('Eko Wijaya', 'eko@example.com', '2024-02-15', 3.65);

  INSERT INTO courses (title, credits, category) VALUES
    ('Belajar Dasar SQL', 3, 'Database'),
    ('Belajar Backend dengan Node.js', 4, 'Backend'),
    ('Belajar Membuat Aplikasi Android', 4, 'Mobile'),
    ('Cloud Practitioner Essentials', 3, 'Cloud'),
    ('Belajar Dasar Pemrograman Web', 3, 'Frontend');

  INSERT INTO enrollments (student_id, course_id, grade) VALUES
    (1, 1, 'A'),
    (1, 2, 'B+'),
    (2, 1, 'A-'),
    (2, 3, 'B'),
    (3, 1, 'A'),
    (3, 4, 'A'),
    (3, 5, 'A-'),
    (4, 2, 'B'),
    (4, 3, 'B+'),
    (5, 5, 'A');
`;

export const DEFAULT_QUERY = `\
-- Try running some queries!
-- Example: List all students and their courses

SELECT
  s.name AS student,
  c.title AS course,
  e.grade
FROM enrollments e
JOIN students s ON s.id = e.student_id
JOIN courses c ON c.id = e.course_id
ORDER BY s.name, c.title;
`;

export const TABS = [
  { id: 'query', label: 'Query' },
  { id: 'schema', label: 'Schema' },
  { id: 'data', label: 'Data' },
];

// Columns shown when introspecting a table's structure on the Schema tab.
export const SCHEMA_COLUMNS = ['column_name', 'data_type', 'is_nullable', 'column_default'];

// Rows fetched per table on the Data tab.
export const DATA_ROW_LIMIT = 50;
