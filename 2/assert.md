# Chapter 9: Assert

In the previous chapter, we added `WildPokemons` interface in the trainer contract. In the next chapters, we will start writing the function to battle with the wild pokemons using the `battle` function of the `WildPokemon` interface.

In the current contract, when we call the `createTrainer` function, a new trainer is created with a single pokemon.

Now a trainer should be able to use their pokemon to battle with wild pokemons. If the trainer's pokemon wins then the trainer captures the wild pokemon. If the trainer's pokemon loses, the trainer gets nothing.

## assert

The `assert` statement makes an assertion about a given condition. If the condition evaluates to `False` then the transaction is reverted.

You can also add an _optional_ error message.

```vyper
@external
def applyForDriversLicense(String[32]: name, uint256: age):
    assert age >= 18 , "not eligible for driver's license"
```

Here if `age` provided to the `applyForDriversLicense` function is less than `18` then the transaction gets reverted with the message `"not eligible for driver's license"`.

> NOTE: If a transaction is reverted then any changes made to the contract state by the transaction will be canceled. In other words, the state of the contract will be restored to the state before the transaction occurred.

## Put it to the test

A trainer can battle, capture, and own multiple pokemons. So, a trainer has to choose which pokemon they want to use to battle with the wild pokemon.

All the pokemons of a trainer are stored in `trainerToPokemon` mapping:

```vyper
trainerToPokemon: HashMap[address, HashMap[uint256, Pokemon]]
```

To select a specific `Pokemon` of a trainer we need 2 things:

- `address` of the trainer calling the contract.

- A `uint256` index that will choose a specific pokemon of the trainer.

You may recall from [Chapter 2](https://vyper.fun/#/2/msg-sender) that you can get the address of the contract caller using `msg.sender`.

1. Create an `external` function named `battleWildPokemon` which takes a single parameter: `pokemonIndex` of `uint256` type.

A trainer who calls the `battleWildPokemon` can pass `pokemonIndex` to select which pokemon to use to battle with the wild pokemon.

Now, suppose a trainer has a single pokemon. Let us examine the following lines of code from `createTrainer`:

```vyper
self.trainerToPokemon[msg.sender][self.trainerPokemonCount[msg.sender]] = newPokemon
self.trainerPokemonCount[msg.sender] += 1
```

When a new trainer is created, the value of `self.trainerPokemonCount[msg.sender]` for the trainer is `0`.

So, the first pokemon is added to the index `0` of the `trainerToPokemon` mapping.

As we increment the `trainerPokemonCount`, subsequent pokemons are added to higher indexes.

What happens if a trainer with single pokemon calls `battleWildPokemon` function with `pokemonIndex` greater than `0`?

As there is no pokemon associated with `pokemonIndex` greater than `0` for this trainer, the transaction would result in a runtime error!

2. To mitigate such a situation, inside the `battleWildPokemon` function, add an `assert` statement which checks if `pokemonIndex` is less than `self.trainerPokemonCount[msg.sender]`. If the condition is `False`, return an error message: `"Invalid Index Provided"`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.9-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.9-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.8-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
