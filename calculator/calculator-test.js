it('should calculate the monthly rate correctly', function () {
  // ...
  const input = {
    amount: 20000,
    years: 5,
    rate: 6
  };
  expect(calculateMonthlyPayment(input)).toEqual("386.66")
});


it("should return a result with 2 decimal places", function() {
  // ..
  const input = {
    amount: 10000,
    years: 8,
    rate: 5.49
  }
  expect(calculateMonthlyPayment(input)).toEqual("128.95")
});

/// etc
