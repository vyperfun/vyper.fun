# Chapter 12: Putting It Together

We're close to being done with our random Pokemon generator! Let's do a few changes to the contract to create a random Pokemon.

## Put it to the test

1. The maximum HP of any Pokemon should be less than 1000. Define a define constant named `HP_LIMIT` equal to 1000.

2. Remove the `_dna` and `_HP` arguments from the `_createPokemon` function declaration.

3. Inside `_createPokemon`, create a `uint256` variable `randomDNA`. Call the function `_generateRandomDNA` using the `self` environment variable and pass the `_name` argument. Set the result equal to `randomDNA`.

4. Inside `_createPokemon`, create a `uint256` variable `randomHP`. Set its value equal to `randomDNA` modulus (`%`) `HP_LIMIT`.

5. Inside `_createPokemon`, create a variable `newPokemon` of `Pokemon` type. Use the `_name` argument, `randomDNA`, `randomHP` to define the `newPokemon`.

6. Inside `_createPokemon`, populate `pokemonList` using the key `totalPokemonCount` and value as `newPokemon`. Remember to use `self` environment variable to access the storage variables.

7. Inside `_createPokemon`, increase the `totalPokemonCount` by 1 after populating the `pokemonList`.

8. Modify the `_createPokemon` function declaration so that it returns a `Pokemon`.

9. At the end of the `_createPokemon` function, return `newPokemon`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.12-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.12-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.11-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
