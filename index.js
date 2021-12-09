const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', './layout');

app.get('/', (req, res) =>
  res.render('home', { active: ['fas', 'fal', 'fal', 'fal', 'fal'] })
);
app.get('/inbox', (req, res) => res.render('inbox', { active: ['fal', 'fas', 'fal', 'fal', 'fal'] }));
app.get('/explore', (req, res) => res.render('explore', { active: ['fal', 'fal', 'fal', 'fas', 'fal'] }));

app.listen(port, () => console.log(`http://localhost:${port}`));
