const OKEXChainClient = require("@okexchain/javascript-sdk");
const { crypto } = OKEXChainClient;

const chainId = "okexchain-1"; // -testnet1
const privateKey =
  "29892b64003fc5c8c89dc795a2ae82aa84353bb4352f28707c2ed32aa1011884";

const web3 = new OKEXChainClient("http://13.230.73.12:8545", {
  chainId,
});

// 通过私钥解密地址
const address = crypto.getAddressFromPrivateKey(privateKey);
console.log(address); //okexchain1jjvpmgwwgs99nhlje3aag0lackunqgj7xnrnwe

// 通过私钥解密公钥(Hex格式)
const publicKey = crypto.getPubKeyHexFromPrivateKey(privateKey);
const address2 = crypto.getAddressFromPubKey(publicKey); //通过公Hex格式钥解密Account
console.log(publicKey); //0206b93fb4d6a2aabee9c9b13931e18fdb4ba859473652e958c11d01f1dca24a7e
console.log(address2, address2 === address); //true

// sign
const msg = "2f8b1705";
const sig = crypto.sign(msg, privateKey).toString("hex");
console.log("sig", sig);

// validateSig

const publicKey2 = crypto.getPubKeyHexFromPrivateKey(privateKey);
let isValidate = crypto.validateSig(sig, msg, publicKey);
console.log("publicKey2", publicKey2);
console.log("isValidate", isValidate);

// 私钥➕密码生成 keystore 文件
const keyStore = crypto.generateKeyStore(privateKey, "okexchain");
const pk = crypto.getPrivateKeyFromKeyStore(keyStore, "okexchain"); //通过keystore文件加密码解密私钥
console.log("keyStore", keyStore);
console.log("pk", pk, pk === privateKey);
