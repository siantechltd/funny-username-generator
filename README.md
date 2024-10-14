# @siantech/username-generator

<p>
@siantech/username-generator is package designed to generate unique usernames based on an email, or by randomly combining names, mythical creatures, nouns and colors. Users can customize the username by adding a separator, selecting what dictionaries to use, and optionally appending up to four random digits.
</p>

[![npm version](https://img.shields.io/npm/v/@siantech/username-generator.svg?style=flat-square)](https://www.npmjs.org/package/@siantech/username-generator)
[![install size](https://packagephobia.now.sh/badge?p=@siantech/username-generator)](https://packagephobia.now.sh/result?p=@siantech/username-generator)
[![npm downloads](https://img.shields.io/npm/dm/@siantech/username-generator.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@siantech/username-generator)
![NPM](https://img.shields.io/npm/l/@siantech/username-generator)

## Installing

Using npm:

```bash
$ npm install @siantech/username-generator --save
```

Once the package is installed, you can import the library using `import` or `require` approach:

- Importing

```javascript
// Using Node.js `require()`
const { UsernameGenerator } = require("@siantech/username-generator");
// Using ES6 imports
import { UsernameGenerator } from "@siantech/username-generator";
```

## Usage

### Generate username from email

It will generate username from email and add four random digits at the end of the name.

```javascript
const generator = new UsernameGenerator();
const username = generator.generateFromEmail(
  "john.smith@example.com"
);
console.log(username); // JohnsmithRedPotato3762 🏋️
```

### Randomly generate unique username.

It will generate unique username from names, mythical creatures, colors and nouns digits and separator. You can control these following parameters - separator and emoji.

```javascript
// generate username using the default configuration
const generator = new UsernameGenerator();
const username = generator.generate();
console.log(username); // IsabelleGrayDjinn7514

// generate username using separator and emoji
const config = {
    separator: "*",
    showEmoji: true
}
const generator = new UsernameGenerator(config);
const username = generator.generate();
console.log(username); // Christopher*Gray*Griffin*2757 👆

```

### options

Type: `Config`

The `options` argument mostly corresponds to the properties defined for uniqueUsernameGenerator. Only `dictionaries` is required.


| Option     | Type                                          | Description                                                                                                                                                                                                                                                                       | Default value | Example value |
|------------|-----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------------|
| dictionary | `creatures \| nouns \| fruits-and-vegetables` | By default, the username is generated using Name + Colour + Mythical Creatures dictionaries. You can change Mythical Creatures and use another dictionary like "nouns" or "fruits-and-vegetables".                                                                                | creatures     | `nouns`       |
| separator  | `string`                                      | A string separator to be used for separate the words generated. The default separator is set to be empty string.                                                                                                                                                                  | ""            | `-`           |
| emoji      | `boolean`                                     | If set to true, it will display a random emoji at the end of the generated Username.                                                                                                                                                                                              | false         | true          |
| style      | `lowerCase \| upperCase \| camel`             | The default value is set to `lowerCase` and it will return a lower case username.<br>By setting the value to `upperCase`, the words, will be returned with all the letters in upper case format.<br>The `camel` option will capitalize each word of the unique username generated | lowerCase     | `lowerCase`   |

## License

The MIT License.

## Thank you
If you'd like to say thanks, I'd really appreciate a coffee :)

<a href="https://buymeacoffee.com/silviuks" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 50px !important;width: 200px !important;" ></a>
