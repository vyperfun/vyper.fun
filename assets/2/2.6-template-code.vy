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

@external
def __init__():
    self.pokemonNames[0] = "Bulbasaur"
    self.pokemonNames[1] = "Charmander"
    self.pokemonNames[2] = "Charizard"
    self.pokemonNames[3] = "Squirtle"
    self.pokemonNames[4] = "Blastoise"
    self.pokemonNames[5] = "Pidgey"
    self.pokemonNames[6] = "Raticate"
    self.pokemonNames[7] = "Pikachu"
    self.pokemonNames[8] = "Raichu"
    self.pokemonNames[9] = "Venomoth"
    self.pokemonNames[10] = "Arcanine"
    self.pokemonNames[11] = "Abra"
    self.pokemonNames[12] = "Machop"
    self.pokemonNames[13] = "Golem"
    self.pokemonNames[14] = "Onix"
    self.pokemonNames[15] = "Hypno"
    self.pokemonNames[16] = "Rhydon"
    self.pokemonNames[17] = "Kangaskhan"
    self.pokemonNames[18] = "Scyther"
    self.pokemonNames[19] = "Mewtwo"

@internal
def _generateRandomDNA() -> uint256:
    random: uint256 = convert(keccak256(convert(self.battleCount, bytes32)), uint256)
    return random % DNA_MODULUS

@external
def battle(pokemon: Pokemon) -> (bool, String[32], uint256, uint256):

    randomDNA: uint256 = self._generateRandomDNA()

    randomName: String[32] = self.pokemonNames[randomDNA%NAME_MODULUS]
    
    randomHP: uint256 = randomDNA % HP_LIMIT

    # add your code here