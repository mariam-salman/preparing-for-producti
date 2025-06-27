 import { expect } from 'chai';
import { shuffle } from '../src/Shuffle.js';

describe('shuffle()', () => {
  it('should return an array with the same elements in different order', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffled = shuffle([...array]);
    expect(shuffled).to.have.members(array);
    expect(shuffled).to.not.deep.equal(array);
  });
});
