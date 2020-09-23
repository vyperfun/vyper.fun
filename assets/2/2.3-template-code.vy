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
# Add NAME_MODULUS here

# Add battleCount here

# Add pokemonNames here

# Make changes to _generateRandomDNA
@pure
@internal
def _generateRandomDNA(_name: String[32]) -> uint256:
    random: uint256 = convert(keccak256(_name), uint256)
    return random % DNA_MODULUS
