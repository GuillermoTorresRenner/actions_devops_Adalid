const sum = require("./sum");
describe("sum function", () => {
  test("Suma dos números", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
