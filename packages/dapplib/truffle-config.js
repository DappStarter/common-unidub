require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue rival rifle clutch install bag army giggle'; 
let testAccounts = [
"0x00c3132d671f5ccf156cc2a9728e00f1893e0a6e3504c950f89d5a2fa601dbf5",
"0x6db8e96aa9ab60b9b41bf977a749b17dbb5445f74b00b93018fd6d34a318df30",
"0x98b50fb0f7b692c80232522529b262e5e16e3c0bd884842293bd1f7bd164b208",
"0xb881992e97ad8e0d72760aa0091360a1ba529b210cd011d131a87c9e7b0abadf",
"0x07967631229f1407fcd6fddf69d7b6c6a68c93b0c118b2ae08ea55f2d09f7f2f",
"0xa0ea1a5e142d3b3bf6a85a91913e3d0bf0cb5010d3b24c1275db05e6e89cb82a",
"0x9de5aba2766fcee208ce02900ffa77b8a7c24adcc6a66c15ae211cdd67cb15e3",
"0x775932bf48e57011ef356b84272709fb75ea2f447e43f585479356218e48dfb1",
"0x366919f0feee77785fffcf777e8fd13189fd35084101d8c43a0dac0e6c767c95",
"0x759ad0e98c29c4fb8e99f3ecae53680d3ce801dfd8f4ef672eb94e4347797c2b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
