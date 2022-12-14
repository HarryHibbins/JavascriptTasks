const searchCandies = require("./searchCandies");

describe("searchCandies", () => {
  it("returns correct 2 values when 'Ma' and 10 are input", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
  it("returns correct value when 'Ma' and 2 are input", () => {
    expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
  });
  it("returns correct 3 values when 'S' and 10 are input", () => {
    expect(searchCandies("S", 10)).toEqual([
      "Skitties",
      "Skittles",
      "Starburst",
    ]);
  });
  it("returns correct 2 values when 'S' and 4 are input", () => {
    expect(searchCandies("S", 4)).toEqual(["Skitties", "Skittles"]);
  });
  it("return correct value when lowercase 'ma' and 10 are input", () => {
    expect(searchCandies("ma", 10)).toEqual(["Mars", "Maltesers"]);
  });
});