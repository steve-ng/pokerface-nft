const PokerFace = artifacts.require('PokerFaces')

module.exports = function (deployer) {
  deployer.deploy(PokerFace, 'https://d2126epqdbsmq2.cloudfront.net/info/')
}
