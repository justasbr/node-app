var expect  = require('chai').expect;

functions = require('../functions.js')

it('square works 1', () => {
  expect(functions.square(2)).equal(4);
})


it('square works 2', () => {
  expect(functions.square(3)).equal(9);
})
