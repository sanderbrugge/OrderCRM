import { formatPrice, formatId } from "../src/util/formatNumber";

test("formatPrice", () => {
  expect(formatPrice("10")).toBe("$ 10.00");
  expect(formatPrice("99.00")).toBe("$ 99.00");
  expect(formatPrice("2323.2332")).toBe("$ 2323.23");
  expect(formatPrice("-99.99")).toBe("$ -99.99");
  expect(formatPrice("AZE")).toBe("$ 0.00");

  expect(formatPrice(-99.99)).toBe("$ -99.99");
  expect(formatPrice(10)).toBe("$ 10.00");
});

test("formatId", () => {
  expect(formatId("10")).toBe("# 10");
  expect(formatId("AZERTY")).toBe("# AZERTY");
});
