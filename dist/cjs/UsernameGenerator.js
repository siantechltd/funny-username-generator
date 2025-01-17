"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsernameGenerator = void 0;
const data = require('./data');
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
class UsernameGenerator {
    separator = "";
    showEmoji = false;
    style = 'lowercase';
    dictionary = 'creatures';
    constructor(config) {
        if (config) {
            if (config.separator) {
                this.separator = config.separator;
            }
            if (config.showEmoji) {
                this.showEmoji = config.showEmoji;
            }
            if (config.style) {
                this.style = config.style.toLowerCase();
            }
            if (config.dictionary) {
                this.dictionary = config.dictionary.toLowerCase();
            }
        }
    }
    generateFromEmail(email) {
        const nameParts = email.replace(/@.+/, "");
        const name = applyStyle(nameParts.replace(/[&/\\#,+()$~%._@'":*?<>{}]/g, ""), this.style);
        return this.generate(name);
    }
    generate(name) {
        let username;
        name = name ?? applyStyle(data.names[Math.floor(Math.random() * data.names.length)], this.style);
        const color = applyStyle(data.colors[Math.floor(Math.random() * data.colors.length)], this.style);
        let segment3;
        switch (this.dictionary) {
            case 'nouns':
                segment3 = applyStyle(data.nouns[Math.floor(Math.random() * data.nouns.length)], this.style);
                break;
            case 'fruits':
                segment3 = applyStyle(data.fruits[Math.floor(Math.random() * data.fruits.length)], this.style);
                break;
            case 'superheroes':
                segment3 = applyStyle(data.superheroes[Math.floor(Math.random() * data.superheroes.length)], this.style);
                break;
            default:
            case 'creatures':
                segment3 = applyStyle(data.creatures[Math.floor(Math.random() * data.creatures.length)], this.style);
                break;
        }
        const randomNumber = Math.floor(getRandomInt(1000, 9000)).toString();
        const emoji = data.emojis[Math.floor(Math.random() * data.emojis.length)];
        username = name + this.separator + color + this.separator + segment3 + this.separator + randomNumber;
        if (this.showEmoji) {
            username += " " + emoji;
        }
        return username;
    }
}
exports.UsernameGenerator = UsernameGenerator;
function applyStyle(text, style) {
    if (!text) {
        return '';
    }
    switch (style) {
        case 'uppercase':
            return text.toUpperCase();
        case 'camel':
            return text.charAt(0).toUpperCase() + text.slice(1);
        default:
        case 'lowercase':
            return text.toLowerCase();
    }
}
//# sourceMappingURL=UsernameGenerator.js.map