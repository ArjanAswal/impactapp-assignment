const app = require('../src/app');
const { sequelize } = require('../src/models');
const request = require('supertest');

// Before any tests run, clear the DB and run migrations with Sequelize sync()
beforeAll(async () => {
  await sequelize.sync({ force: true });
});

// After all tersts have finished, close the DB connection
afterAll(async () => {
  await sequelize.close();
});

test('should create students', async () => {
  const filePath = `${__dirname}/fixtures/file.csv`;

  const response = await request(app)
    .put('/upload')
    .attach('file', filePath)
    .expect(201);
  expect(response.body.data.students.length).toBe(4);
});

test('should get passed students', async () => {
  const response = await request(app)
    .get('/students?resultStatus=passed')
    .send()
    .expect(200);
  expect(response.body.data.students.length).toBe(3);
});

test('should get failed students', async () => {
  const response = await request(app)
    .get('/students?resultStatus=failed')
    .send()
    .expect(200);
  expect(response.body.data.students.length).toBe(1);
});

test('should get result of a specific student', async () => {
  const response = await request(app)
    .get('/students/1/result')
    .send()
    .expect(200);
  expect(response.body.data.student.id).toBe(1);
});
