const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
    console.log(request);
    response.sendFile(__dirname + '/views/home-page.html')
});

app.get('/aboutMe', (request, response, next) => response.sendFile(__dirname + '/views/about-me.html'));
app.get('/photos', (request, response, next) => response.sendFile(__dirname + '/views/photo-gallery.html'));
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));


app.listen(3000);