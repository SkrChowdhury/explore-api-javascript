const user = { id: 1, name: 'Amir', job: 'actor' };

// JavaScript Object Notation  (JSON)

const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);
/* Output
{ id: 1, name: 'Amir', job: 'actor' }
{"id":1,"name":"Amir","job":"actor"}
*/

const shop = {
  owner: 'Alia',
  address: {
    street: 'Kochukhet',
    city: 'CTG',
    country: 'BD',
  },
  products: ['laptop', 'Mic', 'Monitor', 'keyboard'],
  revenue: 45000,
  isOpen: true,
  isNew: false,
};
console.log(shop);
//JSON stringify (Object to string)
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
// json parse (string to object)
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);
