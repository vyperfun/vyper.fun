# @version >=0.2.4 <0.3.0

DNA_DIGITS: constant(uint256) = 16
DNA_MODULUS: constant(uint256) = 10 ** DNA_DIGITS

struct Pokemon:
    name: String[32]
    dna: uint256
    HP: uint256
    matches: uint256
    wins: uint256

totalPokemonCount: public(uint256)
pokemonList: HashMap[uint256, Pokemon]

# Your code here

@internal
def _createPokemon(_name: String[32], _dna: uint256, _HP: uint256):
    self.pokemonList[self.totalPokemonCount] = Pokemon({
        name: _name,
        dna: _dna,
        HP: _HP,
        matches: 0,
        wins: 0
    })
    self.totalPokemonCount += 1