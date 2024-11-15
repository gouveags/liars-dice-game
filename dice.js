const assert = require('node:assert');
const { getRandomInt } = require('./utils');

class Dice {
    #faces = [];
    #lastDrawnFace = null;

    constructor (numberOfFaces){
        assert(numberOfFaces > 0, 'Error: Please, instantiate the Dice class with a number of Dice faces greater than zero');
        for (let i = 0; i < numberOfFaces; i++) {
            this.#faces[i] = Number(i + 1);
        }
        this.#lastDrawnFace = null;
    }

    shuffle() {
        assert(!!this.#faces.length, 'Error: Cannot shuffle a Dice without faces');
        return this.#lastDrawnFace = this.#faces[getRandomInt(0, this.#faces.length)];
    }

    getLastDrawnFace(){
        assert(!!this.#lastDrawnFace, 'Error: No lastDrawnFace attribute of Dice');
        return this.#lastDrawnFace;
    }
}

module.exports = Dice;