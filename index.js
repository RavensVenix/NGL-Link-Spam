const rs = require('readline-sync')
const username = rs.question('[ NGL ] NGL Username? : ')
const message = rs.question('[ NGL ] Message? : ')
const spam = rs.question('[ NGL ] How Many Spam Do You Want? : ')
console.log(`[ NGL ] Spamming To : ${username}`)
for (let i = 0; i < spam; i++) {
fetch("https://ngl.link/api/submit", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.7",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1",
    "x-requested-with": "XMLHttpRequest"
  },
  "referrer": `https://ngl.link/${username}`,
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": `username=${username}&question=${message}&deviceId=23d7346e-7d22-4256-80f3-dd4ce3fd8878&gameSlug=&referrer=`,
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).catch((err) => {
console.log(`[ NGL ] Server down, please wait.`)})
}