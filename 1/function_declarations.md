# Chapter 6: Function Declarations

A function declaration in Vyper looks like the following:

```vyper
@external
def exampleFunction(name: String[64], age: uint256):
    pass
```

This is a function named `exampleFunction` that takes 2 parameters: a `String[64]` (`name`) and a `uint256` (`age`).

Note that we're specifying the function visibility as external using the function decorator `@external`.

All functions must include one visibility decorator (`@external` or `@internal`). We will learn more about function visibility and decorators in the coming chapters.

You can define an empty function body using `pass` keyword. When it is executed, nothing happens.

## Put it to the test

In our app, we're going to create some Pokemons. Let's create a function for that.

1. Create an `external` function named `createPokemon`. It should take three parameter:

- `name` (a `String[32]`)
- `dna` (a `uint256`)
- `HP` (a `uint256`)

2. Use the `pass` keyword to define an empty function body.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.6-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.6-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.5-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
