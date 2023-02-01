const stringLength = require('./task1');
// stringLength functinon starting
test('counting character', () => {
  expect(stringLength("b")).toBeLessThan(10);
  
});

test('counting character', () => {
    expect(stringLength("b")).toBeGreaterThan(0); 
  });


