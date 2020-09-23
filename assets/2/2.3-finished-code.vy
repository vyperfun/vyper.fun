# @version >=0.2.4 <0.3.0

struct Pokemon:
    name: String[32]
    dna: uint256
    HP: uint256
    matches: uint256
    wins: uint256

DNA_DIGITS: constant(uint256) = 16
DNA_MODULUS: constant(uint256) = 10 ** DNA_DIGITS
HP_LIMIT: constant(uint256) = 1000
NAME_MODULUS: constant(uint256) = 20

battleCount: uint256

pokemonNames: HashMap[uint256, String[32]]

@internal
def _generateRandomDNA() -> uint256:
    random: uint256 = convert(keccak256(convert(self.battleCount, bytes32)), uint256)
    return random % DNA_MODULUS
