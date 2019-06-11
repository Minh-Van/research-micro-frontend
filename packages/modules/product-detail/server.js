/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const cors = require('cors');
const express = require('express');

const PORT = 12002;

const app = express();

/**
 * When embedded as a micro-frontend the frontend will do cross origin requests.
 */
app.use(cors());

app.use('/dist', express.static(`${__dirname}/dist`));

app.get('/api/assets', (req, res) => {
  res.json(getPathToEmbedAssets());
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

function getPathToEmbedAssets() {
  const filesPath = {};
  fs.readdirSync(`${__dirname}/dist`).forEach(fileName => {
    const extension = fileName.split('.').pop();

    if (extension === 'css') {
      filesPath['css'] = `dist/${fileName}`;
    }
    if (extension === 'js') {
      filesPath['js'] = `dist/${fileName}`;
    }
  });

  return filesPath;
}
