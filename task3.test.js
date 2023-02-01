const calculators = require('./task3');
// stringLength functinon starting
describe('my calculations', () => {
test('a and b adding', () => {
  expect(calculators.add(2,3)).toBe(5);
});

test('a and b multiply', () => {
    expect(calculators.multiply(3,6)).toBe(18); 
  });

  test('a and b divide', () => {
    expect(calculators.divide(18,6)).toBe(3); 
  });

  test('a and b subtract', () => {
    expect(calculators.subtract(18,6)).toBe(12); 
  });
    
  });