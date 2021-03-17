const db = require('./mongo.js');
const ContactModel = require('./schema.js');

const contacts = [
  {
    first: 'John',
    last: 'Coltrane',
    phone: '(123) 456-7890',
    email: 'jcoltrane@gmail.com'
  },
  {
    first: 'Miles',
    last: 'Davis',
    phone: '(098) 765-4321',
    email: 'mdavis@gmail.com'
  },
  {
    first: 'Chick',
    last: 'Corea',
    phone: '(111) 222-3333',
    email: 'ccorea@gmail.com'
  },
  {
    first: 'Herbie',
    last: 'Hancock',
    phone: '(925) 203-3991',
    email: 'hhancock@gmail.com'
  },
  {
    first: 'Bill',
    last: 'Evans',
    phone: '(900) 900-9000',
    email: 'bevans@gmail.com'
  },
  {
    first: 'Charles',
    last: 'Mingus',
    phone: '(123) 123-1234',
    email: 'cmingus@gmail.com'
  },
  {
    first: 'Pat',
    last: 'Metheny',
    phone: '(382) 928-3478',
    email: 'pmetheny@gmail.com'
  },
  {
    first: 'Charlie',
    last: 'Parker',
    phone: '(999) 999-9999',
    email: 'thebird@gmail.com'
  },
];

seed = () => {
  for (let i = 0; i < contacts.length; i++) {
    const post = new ContactModel({
      first: contacts[i].first,
      last: contacts[i].last,
      phone: contacts[i].phone,
      email: contacts[i].email,
    });
    post.save((err) => {
      if (err) {
        console.log('failed to add to db');
      } else {
        console.log(`${contacts[i].first} ${contacts[i].last} added to db`);
      }
    })
  }
};

seed();
