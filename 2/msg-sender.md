# Chapter 2: Msg.sender

Now that we have our mappings to keep track of which trainer owns which pokemon, we'll want to update the contract functions to use them.

In order to do this, we need to use something called `msg.sender`.

## msg.sender

In Vyper, there are certain global variables that are available to all functions. One of these is `msg.sender`, which refers to the address of the person (or smart contract) who called the current function.

> Note: In Vyper, function execution always needs to start with an external caller. A contract will just sit on the blockchain doing nothing until someone calls one of its functions. So there will always be a `msg.sender`.

Here's an example of using `msg.sender` and updating a mapping:

```vyper
favoriteNumber: HashMap[address, uint256]

@external
def setMyNumber(uint256 myNumber):
    # Update our `favoriteNumber` mapping to store `myNumber` under `msg.sender`
    favoriteNumber[msg.sender] = myNumber

@view
@external
def whatIsMyNumber() -> uint256:
    # Retrieve the value stored in the sender's address
    # Will be `0` if the sender hasn't called `setMyNumber` yet
    return favoriteNumber[msg.sender]
```

In this trivial example, anyone could call `setMyNumber` and store a `uint256` in our contract, which would be tied to their `address`. Then when they called `whatIsMyNumber`, they would be returned the `uint256` that they stored.

Using `msg.sender` gives you the security of the Ethereum blockchain — the only way someone can modify someone else's data would be to steal the private key associated with their Ethereum address.

## Put it to the test

We need to update the contract functions so that we can create a trainer using the `Trainer` struct and `trainerList` mapping. This function should also call `_createPokemon` function to create a pokemon and then use the `trainerToPokemon` mapping to assign the ownership of a pokemon to a trainer. Finally, we would increment the `trainerPokemonCount`.

1. Create an event, `NewTrainerCreated` with a single property: `name` (`String[32]`).

2. Create an `external` function named `createTrainer` which takes 2 parameters: `trainerName` (`String[32]`) and `pokemonName` (`String[32]`).

3. Inside the `createTrainer` body, call the `_createPokemon` by passing `pokemonName` as the `_name` parameter. This will return a `Pokemon`. Create a variable `newPokemon` of type `Pokemon` and assign its value as the Pokemon returned from `_createPokemon`.

4. Inside the `createTrainer` body, create a Trainer using `Trainer` struct with the `name` value as `trainerName`. Create a variable `newTrainer` of type `Trainer` and assign its value as the Trainer created.

5. Add the new trainer to the `trainerList` mapping by assigning `msg.sender` to `newTrainer`.

6. Add the new trainer and pokemon to the `trainerToPokemon` nested mapping by adding 2 keys: first key as `msg.sender` and second key as `self.trainerPokemonCount[msg.sender]` (which acts as a unique key for each pokemon of a trainer). The value assigned is `newPokemon`.

7. Increment the `trainerPokemonCount` for our trainer address `msg.sender` by `1`.

8. Fire the `NewTrainerCreated` event with the parameter `trainerName`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.2-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.2-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.1-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
