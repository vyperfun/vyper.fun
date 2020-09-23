# @version >=0.2.4 <0.3.0

# Add Pokemon struct here

DNA_DIGITS: constant(uint256) = 16
DNA_MODULUS: constant(uint256) = 10 ** DNA_DIGITS
HP_LIMIT: constant(uint256) = 1000
# Add NAME_MODULUS here

# Add battleCount here

# Add pokemonNames here

### Define __init__ function here

## Edit 
@pure
@internal
def _generateRandomDNA(_name: String[32]) -> uint256:
    ## Edit value of random variable
    random: uint256 = convert(keccak256(_name), uint256)
    return random % DNA_MODULUS

#### Define battle function here