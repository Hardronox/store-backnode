const mongoose = require('mongoose');
const User = require('../../models/user.js');
const Faker = require('faker');

class Seeder {

  constructor(seeder) {
    mongoose.Promise = global.Promise;
    this.db = mongoose.connect('mongodb://localhost/store');

    this.seeder = seeder;
  }

  run() {
    //this.seeder[2]
  }

}


// const docs_amount = 50;
//
// for (let i=0; i < docs_amount; i++) {
//   User.create({
//     firstName: Faker.name.firstName(),
//     lastName: Faker.name.lastName(),
//     email: Faker.internet.email(),
//     password: 'asdfasdfasdfasdfasdfasdf',
//   }).then(console.log('dane'));
// }


const seeder = new Seeder(process.argv);

seeder.run();