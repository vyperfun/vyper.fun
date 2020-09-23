# Chapter 9: Public / Private Variables

Storage variables can be marked as `public`, `private` during declaration:

```vyper
publicName: public(String[64])
privateAge: private(uint256)
```

The compiler automatically creates getter functions for all `public` storage variables. For the example above below, the compiler will generate a function called `publicName` that does not take any arguments and returns an `String[64]`, the value of the state variable `publicName`.

## Put it to the test

We need a public storage variable that tracks the number of pokemons created in the contract.

1. Create a `public` storage variable named `totalPokemonCount` of type `uint256`.
2. Replace the key `0` in the mapping `pokemonList` in the function `_createPokemon` with
   the storage variable `totalPokemonCount`. Remember to use the `self` environment variable to access the storage variable from the function.
3. In the `_createPokemon` function, increment `totalPokemonCount` by 1 using the `self` environment variable. To make the code look clean use the `+=` arithmetic operator as shown below:

   ```vyper
   # adds 1 to the parameter passed
   @external
   def addOne(uint256 number):
      # we used += to increment number by 1
      number += 1
   ```

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.9-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.9-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.8-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
