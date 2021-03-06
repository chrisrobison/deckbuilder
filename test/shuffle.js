'use strict'

const chai = require('chai');
const Deckbuilder = require('../index');

let deckbuilder;

describe('Shuffling Cards', () => {

  beforeEach(() => deckbuilder = new Deckbuilder());

  afterEach(() => deckbuilder = null);

  it('should shuffle the deck using the fisher-yates method', () => {

    const cards = [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
      { id: 3, value: 30 },
      { id: 4, value: 40 },
      { id: 5, value: 50 },
      { id: 6, value: 60 },
      { id: 7, value: 70 },
      { id: 8, value: 80 },
      { id: 9, value: 90 },
      { id: 10, value: 100 }
    ];

    deckbuilder.add(cards);

    deckbuilder.shuffle();

    chai.expect(deckbuilder.deck).to.not.deep.equal(cards);

  });

});