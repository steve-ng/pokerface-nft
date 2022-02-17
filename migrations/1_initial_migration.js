const TheAlien888 = artifacts.require('TheAlien888')

module.exports = function (deployer) {
  deployer.deploy(TheAlien888, 'https://gateway.pinata.cloud/ipfs/QmXnTo6WnFdV7J5zBAHYnqggJziuoT3PmV8rwyvpy185BN')
}
