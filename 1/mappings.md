# Chapter 5: Mappings

In the previous chapter we looked at structs. Mappings are another way of storing organized data in Vyper.

Mappings are [hash tables](https://en.wikipedia.org/wiki/Hash_table) that are virtually initialized such that every possible key exists and is mapped to a default value.

Defining a mapping looks like this:

```vyper
# a mapping to store roll number and student names
exampleMapping1: HashMap[uint256, String[64]]

# a mapping to store usernames and number of their followers
exampleMapping2: HashMap[String[32], uint256]
```

A mapping is essentially a key-value store for storing and looking up data. In the first mapping named `exampleMapping1`, the key is an `uint256` and the value is a `String[64]`, and in the second mapping named `exampleMapping2` the key is a `String[32]` and the value is a `uint256`.

## Put it to the test

To store our Pokemons, we will need a mapping which maps an serial number to the Pokemon.

1. Create a mapping named `pokemonList` with a `uint256` type key and `Pokemon` type value.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.5-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.5-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.4-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
