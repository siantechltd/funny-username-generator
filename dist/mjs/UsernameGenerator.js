const data = require('./data');
const crypto = require("crypto");
const getRandomInt = (min, max) => {
    const randomBuffer = (0, crypto.randomBytes)(4);
    const randomInt = randomBuffer.readUInt32BE(0);
    return min + (randomInt % (max - min + 1));
};
export class UsernameGenerator {
    separator = "";
    showEmoji = false;
    constructor(config) {
        if (config) {
            if (config.separator) {
                this.separator = config.separator;
            }
            if (config.showEmoji) {
                this.showEmoji = config.showEmoji;
            }
        }
    }
    generate() {
        let username;
        const name = data.names[Math.floor(Math.random() * data.names.length)];
        const color = data.colors[Math.floor(Math.random() * data.colors.length)];
        const creatures = data.creatures[Math.floor(Math.random() * data.creatures.length)];
        const randomNumber = Math.floor(getRandomInt(1000, 9000)).toString();
        const emoji = data.emojis[Math.floor(Math.random() * data.emojis.length)];
        username = name + this.separator + color + this.separator + creatures + this.separator + randomNumber;
        if (this.showEmoji) {
            username += " " + emoji;
        }
        return username;
    }
}
//# sourceMappingURL=UsernameGenerator.js.map