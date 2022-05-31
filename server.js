const path = require('path');
const hbs = require('hbs');
const express = require('express');
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'templates/views'));

app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
    res.status(200).render('index');
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});