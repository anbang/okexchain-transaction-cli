# okexchain-transaction-cli

This is just to test the test that initiates okexchain transactions and contract transactions

## Preconditions

- test accoount
  - https://www.oklink.com/okexchain-test/address/okexchain1lu7haeu8e6rxgynyjg964hlcm24hxk32fgjpdt
- JS SDK
  - okexchain-javascript-sdk
    - https://github.com/okex/okexchain-javascript-sdk
  - web3
    - https://web3js.readthedocs.io/en/v1.3.4/
    - https://okexchain-docs.readthedocs.io/en/latest/developers/tools/create-wallet.html

## TODO

- Create Account
- Get okexchain Account from MateMask
  - https://okexchain-docs.readthedocs.io/en/latest/developers/quick-start.html
  - https://www.okex.com/wallet
- Decrypt the private key
- Generate unsigned transaction
- Use the private key to sign the transaction
- Send transaction (with keystory file and passworld)
- Send transaction (in OKEx wallet)
- Send signed transaction
- Initialize the contract object(with ABI and contract account)
- Deposit OKT and OIP20 TOKENS to contract account(approve)
- withdrawn OKT and OIP20 TOKENS form contract account

## crypto methods

```
/**
  getHDPath: [Function: getHDPath],
  decodeAddressToBuffer: [Function: decodeAddressToBuffer],
  validateAddress: [Function: validateAddress],
  encodeAddressToBech32: [Function: encodeAddressToBech32],
  convertBech32ToHex: [Function: convertBech32ToHex],
  convertHexToBech32: [Function: convertHexToBech32],
  sha3: [Function: sha3],
  toChecksumAddress: [Function: toChecksumAddress],
  generatePrivateKey: [Function: generatePrivateKey],
  getPubKeyFromHex: [Function: getPubKeyFromHex],
  encodePubKeyToCompressedBuffer: [Function: encodePubKeyToCompressedBuffer],
  getPubKeyHexFromPrivateKey: [Function: getPubKeyHexFromPrivateKey],
  getPubKeyFromPrivateKey: [Function: getPubKeyFromPrivateKey],
  getAddressFromPubKey: [Function: getAddressFromPubKey],
  getAddressFromPrivateKey: [Function: getAddressFromPrivateKey],
  sign: [Function: sign],
  validateSig: [Function: validateSig],
  generateKeyStore: [Function: generateKeyStore],
  getPrivateKeyFromKeyStore: [Function: getPrivateKeyFromKeyStore],
  generateMnemonic: [Function: generateMnemonic],
  validateMnemonic: [Function: validateMnemonic],
  getPrivateKeyFromMnemonic: [Function: getPrivateKeyFromMnemonic],
  sha256Ripemd160: [Function: sha256Ripemd160],
  sha256: [Function: sha256]
 */
```

```
{
  crypto: {
    ciphertext: '062862e4abbc438eaf528098bded84346f49a568bb29074676e651524aa74937',
    cipherparams: { iv: 'd39bfe5137316afdb1f6c94b9d6e4f0c' },
    cipher: 'aes-128-ctr',
    kdf: 'scrypt',
    kdfparams: {
      dklen: 32,
      salt: '00426597e521bbf96a6edca3ac52f2e97be3cc5626350926e7b4ec18d565cefe',
      n: 262144,
      p: 1,
      r: 8
    },
    mac: '1d0876468756e2f90c58daf95e18083082d5cae319f2370e89a3e5456e596b33'
  },
  id: '1de825ea-4884-4608-9af1-7fca3efa0473',
  version: 3
}
```
