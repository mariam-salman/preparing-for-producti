import { expect } from "chai";
import { shuffle } from "../src/Shuffle.js";

describe("shuffle function", () => {
  it("should return an array of the same length", () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...original]);
    expect(shuffled).to.have.lengthOf(original.length);
  });

  it("should return the same members (no loss)", () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...original]);
    expect(shuffled).to.have.members(original);
  });

  it("should change the order of elements", () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...original]);
    const isSame = original.every((val, i) => val === shuffled[i]);
    expect(isSame).to.be.false;
  });
});

