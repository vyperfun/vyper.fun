# @version >=0.2.4 <0.3.0

DNA_DIGITS: constant(uint256) = 16
DNA_MODULUS: constant(uint256) = 10 ** DNA_DIGITS
HP_LIMIT: constant(uint256) = 1000

struct Pokemon:
    name: String[32]
    dna: uint256
    HP: uint256
    matches: uint256
    wins: uint256

totalPokemonCount: public(uint256)
pokemonList: HashMap[uint256, Pokemon]

# Your code here

@pure
@internal
def _generateRandomDNA(_name: String[32]) -> uint256:
    random: uint256 = convert(keccak256(_name), uint256)
    return random % DNA_MODULUS

@internal
def _createPokemon(_name: String[32]) -> Pokemon:
    
    randomDNA: uint256 = self._generateRandomDNA(_name)

    randomHP: uint256 = randomDNA % HP_LIMIT

    newPokemon: Pokemon = Pokemon({
        name: _name,
        dna: randomDNA,
        HP: randomHP,
        matches: 0,
        wins: 0
    })

    self.pokemonList[self.totalPokemonCount] = newPokemon
    self.totalPokemonCount += 1

    # Your code here

    return newPokemon
