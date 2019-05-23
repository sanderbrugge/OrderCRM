import { calculateTotal, OPERATIONS } from "../src/ducks/util";

test("calculateTotal additions", () => {
  expect(calculateTotal("3", "3", OPERATIONS.ADD)).toBe("6.00");
  expect(calculateTotal("99.99", "32", OPERATIONS.ADD)).toBe("131.99");
  expect(calculateTotal("-13.45", "20.11", OPERATIONS.ADD)).toBe("6.66");
  expect(calculateTotal("-13.45", "-20.11", OPERATIONS.ADD)).toBe("-33.56");
});

test("calculateTotal substractions", () => {
  expect(calculateTotal("3", "3", OPERATIONS.SUBSTRACT)).toBe("0.00");
  expect(calculateTotal("99.99", "32", OPERATIONS.SUBSTRACT)).toBe("67.99");
  expect(calculateTotal("-13.45", "20.11", OPERATIONS.SUBSTRACT)).toBe(
    "-33.56"
  );
  expect(calculateTotal("-13.45", "-20.11", OPERATIONS.SUBSTRACT)).toBe("6.66");
});

/**
 * Failing tests
 * Since the calculate function expects strings to work with, it should gracefully handle non parseable input
 * It doesn't do that (on purpose, to have these failing tests, the format functions do handle it).
 */
test("CalculateTotal non parseable input", () => {
  // replace "NaN" with the desired output as should be discussed in the specs of the app.
  expect(calculateTotal("AZER", "3", OPERATIONS.SUBSTRACT)).toBe("NaN");
  expect(calculateTotal("AZER", "3", OPERATIONS.ADD)).toBe("NaN");
});
