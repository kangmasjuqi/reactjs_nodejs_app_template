const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const cors = require('cors');

app.use(cors({origin: 'http://localhost:3000'}));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

const usersRouter = require('./routes/users');

const studentsRouter = require('./routes/students');

const artefactsRouter = require('./routes/artefacts');

app.use('/users', usersRouter);

app.use('/students', studentsRouter);

app.use('/artefacts', artefactsRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  return;
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});

