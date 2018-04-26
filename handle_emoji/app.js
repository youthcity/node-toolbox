var emoji = require('node-emoji')
// emoji.get('coffee') // returns the emoji code for coffee (displays emoji on terminals that support it) 
// emoji.which(emoji.get('coffee')) // returns the string "coffee" 
// emoji.get(':fast_forward:') // `.get` also supports github flavored markdown emoji (http://www.emoji-cheat-sheet.com/) 
// emoji.emojify('I :heart: :coffee:!') // replaces all :emoji: with the actual emoji, in this case: returns "I ❤️ ☕️!" 
// emoji.random() // returns a random emoji + key, e.g. `{ emoji: '❤️', key: 'heart' }` 
// emoji.search('cof') // returns an array of objects with matching emoji's. `[{ emoji: '☕️', key: 'coffee' }, { emoji: ⚰', key: 'coffin'}]` 
const result = emoji.unemojify('I ❤️ 🍕') 
console.log(result);
console.log(emoji.emojify(result))
console.log(emoji.emojify('I :heart: :coffee:!'), () => '', (code, name) => {
  console.log(code, ' ',  name);
  return name;
} )
console.log()