const mongoose = require('mongoose');
const User = require('../../models/user.js');
const Faker = require('faker');


mongoose.Promise = global.Promise;
const db = mongoose.connect('mongodb://localhost/store');

const docs_amount = 50;

for (let i=0; i < docs_amount; i++) {
  User.create({
    firstName: Faker.name.firstName(),
    lastName: Faker.name.lastName(),
    email: Faker.internet.email(),
    password: 'asdfasdfasdfasdfasdfasdf',
  }).then(console.log('dane'));
}

db.connection.close();