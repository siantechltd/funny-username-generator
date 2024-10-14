//names
const names = require('./names')

// colors
const colors = require("./colors");

// creatures
const creatures = require("./creatures");

// nouns
const nouns = require("./nouns");

// fruits
const fruits = require("./fruits");

// superheroes
const superheroes = require("./superheroes");

// emojis
const emojis = require("./emojis");

module.exports = {
    names: names.default,
    colors: colors.default,
    creatures: creatures.default,
    nouns: nouns.default,
    emojis: emojis.default,
    fruits: fruits.default,
    superheroes: superheroes.default,
}
