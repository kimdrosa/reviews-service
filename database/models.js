const express = require('express');
const mysql = require('mysql');
var connection = mysql.createConnection({
    user : 'root',
    database : 'reviewsComponent'
})

connection.connect();

const getListings = (callback) => {
    var queryString = "SELECT * FROM listings, reviews, users WHERE listings.id = reviews.listings_id AND reviews.user_id = users.id;"
    connection.query(queryString, function(err, result){
        if(err) {
            callback(err, null);
        } else {
            callback(null, result);
        }

    })

}

module.exports = {
    getListings
}