const fs = require('fs')
const readline = require('readline')
const crypto = require('crypto');
const { exit } = require('process');

const alg = 'aes-256-ctr'

const rl = readline.createInterface({
  input:process.stdin,
  output: process.stdout
});

rl.question("Qual a sua senha?", function (pass){
  const read = fs.createReadStream('pass.csv')
  const write = fs.createWriteStream('pass-cryp.csv')
  const cipher = crypto.createCipher(alg, pass);
  read.pipe(cipher).pipe(write).on('finish', ()=>  exit(0));
});

rl.on('close', function () {
  console.log('\nBYE BYE !!!');
  process.exit(0);
});

