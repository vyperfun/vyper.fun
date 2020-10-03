# Chapter 11: Putting it Together

In the previous chapter we called the `battle` function of the wild pokemon contract from the trainer contract.

We handled multiple return values from the `battle` function using a tuple. Now we will use the tuple variables alter the state of the trainer contract.

As we discussed in previous chapters, if a trainer's pokemon wins a battle with a wild pokemon, the trainer captures the wild pokemon. If the trainer's pokemon loses, trainer gets nothing.

## Put it to the test

As we discussed we have 2 conditions based on the `battleResult` variable. If `battleResult` is `True` that means the trainer's pokemon has won, otherwise (in case of `False`) the trainer's pokemon loses.

1. Create an if/else statement with the condition as `battleResult`.

2. If `battleResult` is `True`

   - Increase the number of `matches` for the trainer's pokemon by `1` (use `+=` arithmetic operator to keep the code clean). To access the trainer's pokemon, use `trainerToPokemon` mapping with first key as `msg.sender` and second key as `pokemonIndex`.
   - Increase the number of `wins` for the trainer's pokemon by `1` (use `+=` arithmetic operator to keep the code clean).
   - Create a new variable named `newPokemon` of type `Pokemon` and assign its value to a new Pokemon created using the `Pokemon` struct and use the following paramters:
     - name: `newPokemonName`
     - dna: `newPokemonDNA`
     - HP: `newPokemonHP`
     - matches: `1` (as the wild pokemon just had a match)
     - wins: `0`
   - Add this `newPokemon` to the `pokemonList` mapping using the key `totalPokemonCount`.
   - Increase the `totalPokemonCount` by `1`.
   - Add the `newPokemon` to `trainerToPokemon` mapping using the first key as `msg.sender` and the second key as `trainerPokemonCount[msg.sender]`.
   - Increment `trainerPokemonCount[msg.sender]` by `1` using `+=` arithmetic operator.
   - Fire the `NewPokemonCreated` event with following parameters: `newPokemonName`, `newPokemonDNA`, `newPokemonHP`.

3. If `battleResult` is `False` Increase the number of `matches` for the trainer's pokemon by `1` (use `+=` arithmetic operator to keep the code clean).

Congratulations 🎉

You have completed the Chapter 2 and the trainers can battle and capture wild pokemons ⚔️

Tweet about it to share your amazing feat!

[![Tweet](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fvyper.fun%2F%23%2F2%2Fintroduction)](https://twitter.com/intent/tweet?hashtags=VyperFun&ref_src=twsrc%5Etfw&text=I%20just%20completed%20Lesson%202%3A%20Battle%20and%20Capture%20wild%20Pok%C3%A9mons%20on%20blockchain%20using%20%40vyperlang%20at%20%40VyperFun%20%E2%9A%94%EF%B8%8F%20&tw_p=tweetbutton&url=https%3A%2F%2Fvyper.fun%2F%23%2F2%2Fintroduction)

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.11-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.11-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.10-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
