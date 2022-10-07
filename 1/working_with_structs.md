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

## The `self` Variable

Notice that we are using `self` keyword to access the `people` (state) variable.

`self` is an environment variable used to reference a contract from within itself. `self` allows you to **read and write to state variables** and to **call private (internal) functions within the contract**. We will learn about external/internal functions in the next chapter.

`self` is used to access a contract’s state variables, as shown in the following example:

```vyper
message: String[10]

@external
def setMessage(msg: String[10]):
    self.message = msg
```

`self` is also used to call internal functions within a contract:

```vyper
@internal
def multiplyByTwo(amount: uint256):
    amount * 2

@external
def calculate(amount: uint256):
    self.multiplyByTwo(amount)
```

## Put it to the test

Let's make our `createPokemon` function do something!

1. Remove the `pass` keyword. Fill in the function body so it creates a new `Pokemon`, and adds it to the `pokemonList` mapping with a key value of 0. Use the following values for the new `Pokemon`:

   - `name`: name (from function argument),
   - `dna`: dna (from function argument),
   - `HP`: HP (from function argument),
   - `matches`: 0,
   - `wins`: 0

2. Do not forget to use the `self` environment variable to access `pokemonList` mapping.

3. Let's do it in one line of code to keep things clean.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.7-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.7-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.6-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
