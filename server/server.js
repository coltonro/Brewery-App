const express = require('express');
const app = express();
const path = require('path');
const apiBrewRouter = require('./routes/apiBrewRouter');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiBrewRouter);

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/template.html'));
});

// ERROR HANDLER
//invoked if you pass an argument to next()
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign(defaultErr, err);

  console.log('ERROR: ', errorObj.log);
  return res.status(errorObj.status).send(errorObj.message);
});

module.exports = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
