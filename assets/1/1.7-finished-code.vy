# @version >=0.2.4 <0.3.0

DNA_DIGITS: constant(uint256) = 16
DNA_MODULUS: constant(uint256) = 10 ** DNA_DIGITS

struct Pokemon:
    name: String[32]
    dna: uint256
    HP: uint256
    matches: uint256
    wins: uint256

pokemonList: HashMap[uint256, Pokemon]

@external
def createPokemon(name: String[32], dna: uint256, HP: uint256):
    self.pokemonList[0] = Pokemon({
        name: name,
        dna: dna,
        HP: HP,
        matches: 0,
        wins: 0
    })
