const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
        if (!error) {
            console.log('MongoDB is connected !');
        } else {
            console.error(`Error at: ${Date()}`);
            console.log('Connection error => ' + error);
        }
    }
);