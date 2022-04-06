// INPUT
// data 1: user name
const userName = prompt ('What\'s your name?')
// test
console.log(userName)
// data 2: user surname
const userSurname = prompt ('Whats\'s your surname')
// test
console.log (userSurname)
// data 3: favoritecolour 
const favouriteColour = prompt ('Whats\'s your favourite colour?')
// test
console.log (favouriteColour)

// ELABORATION
const myPassword = `${userName}${userSurname}${favouriteColour}`
// test
console.log (myPassword)

// OUTPUT
document.getElementById('my-Psw').innerHTML = myPassword;
