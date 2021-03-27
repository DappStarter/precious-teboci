require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remind million give kitchen surge gaze'; 
let testAccounts = [
"0x654f98cade12fdcc18cf5cfe6808d42a90adebc7014d91afdd1881798d624f80",
"0x6cffbd7244b0f609a3175097cbaa7feb00f330a0624d1911099a3580d54f36eb",
"0x7867d494579d0229fcf0287e6733fc5598fb6bbd55622101c673b2b291ea2bbb",
"0xe8b14e9a60d0ae4c3b87943f23e1ac10c234bd0d08216fe63022bbf95248d843",
"0x0c8196609d63d7d9d46e0f1ac4a7597ef6f20d86076408656d468580fe46b0da",
"0x148d324499cd36ad4afe32815e958fbd3290fde002c850c9808ec61d9aee40a7",
"0x36c4a26856ad588bb5391dba06ed2ade6ed34d1bfd5a5c443f2e420bd45ef4f1",
"0xadd53f694587997bbb84a2cff526e2e59bde608aacca317b8bfedb75481a4506",
"0xd14d7f45d1b44b6196f00aa65a2be6a110379bee5d966e25bd3d896ce1a4a7fa",
"0x92dbc51d0820ae66e949ccfca171804a73dcee92175ea8689a9a360bdc125eb1"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
