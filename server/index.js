const express = require('express');
const app = express();
const models = require('../database/models.js')

app.use(express.static(
    __dirname + '/../client/dist'))
//make app.get which returns each listing with all of its corresponding reviews and users
app.listen(3000, () => {
    console.log('listening on port 3000');
});

app.get('/listings', function(request, response){
    models.getListings( function(err, result) {
        if(err) {
            console.log('error retrieving listings');
        } else {
            response.send(result);
        }
    })
    // response.send('hello from express')

});

