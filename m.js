const fs = require("fs")

async function api(){
  const response = await fetch('https://wilmervasquez.github.io/biography/');
  const html = await response.text();
  console.log(html)

  fs.writeFileSync("you.html",html,"utf-8")
}
api()