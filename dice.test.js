const Dice = require('./dice');
const { getRandomInt } = require('./utils');
const assert = require('node:assert/strict');
const { beforeEach, describe, it } = require('node:test');

let _dice;
const NUMBER_OF_FACES = 6;

describe('Dice', () => {
    beforeEach(() => {
        _dice = new Dice(NUMBER_OF_FACES);
    });

    describe('Instantiation', () => {
        it('should instantiate without throwing an error with valid number of faces', () => {
            assert.doesNotThrow(() => new Dice(NUMBER_OF_FACES));
        });

        it('should throw an error if number of faces is zero', () => {
            assert.throws(() => new Dice(0), {
                message: 'Error: Please, instantiate the Dice class with a number of Dice faces greater than zero',
            });
        });

        it('should throw an error if number of faces is negative', () => {
            const negativeRandomNumber =  getRandomInt(1, 100)
            assert.throws(() => new Dice(-negativeRandomNumber), {
                message: 'Error: Please, instantiate the Dice class with a number of Dice faces greater than zero',
            });
        });
    });

    describe('Shuffle Tests', () => {
        it('should return a valid face when shuffled', () => {
            const drawnFace = _dice.shuffle();
            assert.ok(drawnFace >= 1 && drawnFace <= NUMBER_OF_FACES, `Expected drawn face to be between 1 and ${NUMBER_OF_FACES}, but got ${drawnFace}`);
        });

        it('should update the last drawn face after shuffle', () => {
            const drawnFace = _dice.shuffle();
            const lastDrawnFace = _dice.getLastDrawnFace();
            assert.strictEqual(drawnFace, lastDrawnFace, `Expected last drawn face to be ${drawnFace}, but got ${lastDrawnFace}`);
        });
    });

    describe('GetLastDrawnFace Tests', () => {
        it('should throw an error if getLastDrawnFace is called before shuffle', () => {
            assert.throws(() => _dice.getLastDrawnFace(), {
                message: 'FatalError: No lastDrawnFace attribute of Dice',
            });
        });

        it('should return the correct face after shuffle', () => {
            _dice.shuffle();
            const lastDrawnFace = _dice.getLastDrawnFace();
            assert.ok(lastDrawnFace >= 1 && lastDrawnFace <= NUMBER_OF_FACES, `Expected last drawn face to be between 1 and ${NUMBER_OF_FACES}, but got ${lastDrawnFace}`);
        });
    });
  }); 