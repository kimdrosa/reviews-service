//connect here
const express = require('express');
const mysql = require('mysql');
const faker = require('faker');
var connection = mysql.createConnection({
    user : 'root',
    database : 'reviewsComponent'
})
const seed = require('./seeder');

connection.connect()


//make queries here


//iterate through each one of the data generators and add each one to the db 

const fillListings = (callback) => {
  
    var getUsername = seed.getUsername();
    var queryString = '';

    for (var i = 0; i < 100; i++) {
        //add one listing and add to listing table
        queryString = 'INSERT INTO listings() VALUES() ;'

        connection.query(queryString, function(err, results) {
            callback(err, results);

        })
        //add between 1 and 40 reviews to reviews table

         //add one user per review to users table
    // queryString = 'INSERT INTO reviews() VALUE'
    
    }
}

const fillReviews = (callback) => {
    var reviewContent = seed.getText();
    var rating = seed.getRating();
    var listingid = seed.getListingId();
    var date = seed.getDate();
    var userid = seed.getUserID();
    var queryString = '';
    for (var i = 0; i < 1500; i++) {
        reviewContent = seed.getText();
        rating = seed.getRating();
        listingid = seed.getListingId();
        date = seed.getDate();
        userid = seed.getUserID();
        

        queryString = 'INSERT INTO reviews(review_text, rating, date_posted, user_id, listings_id) VALUES (?,?,?,?,?);'
    
        connection.query(queryString,  [reviewContent,rating, date, userid, listingid] , function(err, results) {
           callback(err,results);
        })  
     
    }
  
}

const fillUsers = (callback) => {
    var username = seed.getUsername();
    var queryString = '';
    for(var i = 0; i < 500; i++) {
       username = seed.getUsername();
       queryString = 'INSERT INTO users(name) values(?)';
       connection.query(queryString, username, function(err, results) {
           callback(err, results);
       })

    }
    
}

const fillDb = (listingCb, reviewCb, userCb) => {
    fillListings(listingCb);
    fillReviews(reviewCb);
    fillUsers(userCb);

}



fillListings( function(err, data) {
    if (err) {
        console.log('error filling listings table')
    } else {
        console.log('success');
    }
})

fillReviews( function(err, data) {
    if (err) {
        console.log('error filling reviews table')
    } else {
        console.log('success');
    }
})

fillUsers( function(err, results) {
    if(err) {
        console.log('error filling users table');
    } else {
        console.log('success');
    }
})