const Web3 = require("Web3");
const web3 = new Web3("http://13.230.73.12:8545");
const createAccountObj = web3.eth.accounts.create();
console.log("createAccountObj", createAccountObj);

const privateKeyToAccountObj = web3.eth.accounts.privateKeyToAccount(
  createAccountObj.privateKey
);

console.log(
  "privateKeyToAccount",
  privateKeyToAccountObj,
  privateKeyToAccountObj.address === createAccountObj.address
);
// 0x14d7416d3a9520d6712085a87791d0f9b1dc6d9bf44c6e811e92aff29f3.b4d65
