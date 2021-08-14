# Chapter 3: Wild Pokemons

We now have trainers and their pokemons. Every pokemon fan knows that trainers go on tours and battle with wild pokemons. If they win the battle, they catch the pokemon.

Let's create a new contract using which we can battle with wild pokemons and try to catch them.

## Put it to the test

We will re-use some parts of our previous contract. Now, let's add some state variables.

1. Add a `constant` `uint256` storage variable named `NAME_MODULUS`, and set it equal to `20`.

2. Create a `uint256` storage variable named `battleCount`.

3. Create a mapping with `uint256` key and `String[32]` value, named `pokemonNames`.

4. Make following changes to the `_generateRandomDNA` function:

   - Remove the `_name` input parameter so that `_generateRandomDNA` accepts no parameter.
   - In the `_generateRandomDNA` body, replace `_name` with `battleCount`. Now, you may remember from [Lesson 1, Chapter 11](https://vyper.fun/#/1/keccak256-and-typecasting), that `keccak256` expects a single parameter of type `bytes32`, `Bytes` or `String`. So, we need to use `convert` to typecast `battleCount` to `bytes32`.
   - You may remember from [Lesson 1, Chapter 10](https://vyper.fun/#/1/more_on_functions) that we add `@pure` decorator to a function which does not read contract state or environment variables. But now as `_generateRandomDNA` is accessing `battleCount` (a state variable), it is no longer a `@pure` function. So, remove the `@pure` function decorator.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.3-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.3-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.2-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
