import faker from 'faker';

const data = [];



for (let i = 0; i < 1000; i += 1) {
  data.push({
    0: faker.name.firstName(),
    1: faker.name.lastName(),
    2: faker.address.city(),
    3: `${faker.random.boolean()}`,
    4: faker.internet.email(),
    5: faker.random.number(),
    6: faker.lorem.word(),
    7: false
  });
}

export default data;

