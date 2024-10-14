// @ts-ignore
const data = require('./data');

const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

type config = {
    separator: string,
    showEmoji: boolean,
    style: string,
    dictionary: string
}

export class UsernameGenerator {

    separator = "";
    showEmoji = false
    style = 'lowercase'
    dictionary = 'creatures'

    constructor(config: config) {
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

    generateFromEmail(email: string): string {
        const nameParts = email.replace(/@.+/, "");
        const name = applyStyle(nameParts.replace(/[&/\\#,+()$~%._@'":*?<>{}]/g, ""), this.style);

        return this.generate(name)
    }

    generate(name?: string) {
        let username;

        name = name ?? applyStyle(data.names[Math.floor(Math.random() * data.names.length)], this.style);
        const color = applyStyle(data.colors[Math.floor(Math.random() * data.colors.length)], this.style);

        let segment3;
        switch (this.dictionary) {
            case 'nouns':
                segment3 = applyStyle(data.nouns[Math.floor(Math.random() * data.nouns.length)], this.style);
                break;
            case 'fruits':
            case 'vegetables':
            case 'fruits-and-vegetables':
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
            username += " " + emoji
        }

        return username
    }
}

function applyStyle(text: string, style: string): string {
    if(!text){
        return '';
    }

    switch (style) {
        case 'uppercase':
            return text.toUpperCase();
        case 'camel':
            return text.charAt(0).toUpperCase() + text.slice(1);
        default:
        case 'lowercase':
            return text.toLowerCase()
    }
}
