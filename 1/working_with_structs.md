# Chapter 7: Working With Structs and Mappings

Remember our `Person` struct in the previous example?

```vyper
struct Person:
    age: uint256
    name: String[64]

people: HashMap[uint256, Person]
```

Now we're going to learn how to create new `Persons` and add them to our `people` mapping.

```vyper
// create a New Person:
Person vasa = Person({ name: "vasa", age: 22 })

// Add that person to the mapping with key `0`:
self.people[0] = vasa
```

We can also combine these together and do them in one line of code to keep things clean:

```vyper
self.people[0] = Person({ name: "vasa", age: 22 })
```

Notice that we are using `self` environment variable to access the people (state) variable. We will learn more about the variable scopes and `self` in the coming chapters.

## Put it to the test

Let's make our `createPokemon` function do something!

1. Remove the `pass` keyword. Fill in the function body so it creates a new `Pokemon`, and adds it to the `pokemonList` mapping. The `name`, `dna`, and `HP` for the new `Pokemon` should come from the function arguments.

2. Let's do it in one line of code to keep things clean.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.7-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.7-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.6-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
