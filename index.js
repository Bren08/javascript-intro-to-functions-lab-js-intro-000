function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var lowercase = "I can't hear you"
  var uppercase = "YES INDEED!"
  lowercase.toLowerCase() === lowercase && uppercase.toUpperCase() === uppercase
  return "I can't hear you!"
}
// function sayHiToGrandma(string) {
//   var lowercase = "i cant hear you"
//   string.toLowerCase() === lowercase
//   return "I can't hear you!"
// }
