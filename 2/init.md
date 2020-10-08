# Chapter 4: Init Function

Our contract will create random pokemons with which a trainer can battle with. So, we need a list of pokemon names from which we will select a random pokemon for battle.

We need a way to store a list of pokemon names once when we initialize our contract. For this purpose, we will use the **\_\_init\_\_** function.

## The \_\_init\_\_ Function

**\_\_init\_\_** is a special initialization function that may only be called at the time of deploying a contract. It can be used to set initial values for storage variables. A common use case is to set an owner variable with the creator the contract:

```vyper
owner: address

@external
def __init__():
    self.owner = msg.sender
```

You cannot call to other contract functions from the \_\_init\_\_ function.

## Put it to the test

We will add a list of 20 pokemons in the \_\_init\_\_ function.

1. Define the \_\_init\_\_ function.

2. Add `@external` decorator to the \_\_init\_\_ function.

3. Add the following code in the \_\_init\_\_ function body:

```vyper
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
```

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.4-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.4-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.3-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
