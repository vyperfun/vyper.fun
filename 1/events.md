# Chapter 13: Events

Our contract is almost finished! Now let's add an `event`.

**Events** are a way for your contract to communicate that something happened on the blockchain to your app front-end, which can be 'listening' for certain events and take action when they happen.

### Example

```vyper
# declare an event
event NewPersonAdded:
    name: String[64]
    age: uint256

people: HashMap[String[64], uint256]

@external
def addNewPerson(name: String[64], age: uint256):
    self.people[name] = age

    # fire an event to let the app know the function was called
    log NewPersonAdded(name, age)
```

Your app front-end could then listen for the event. A javascript implementation would look something like:

```js
YourContract.NewPersonAdded(function(error, result) {
  // do something with result
}
```

## Put it to the test

We want an event to let our front-end know every time a new pokemon was created, so the app can display it.

1. Create an event named `NewPokemonCreated`. It should have 3 arguments:

- `name` of `String[32]` type
- `dna` of `uint256` type
- `HP` of `uint256` type

2. Use the `log` keyword to fire the event inside the `_createPokemon` function just before the `return` statement.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.13-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.13-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.12-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
