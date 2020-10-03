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

Congratulations 🎉

You have completed the Lesson 1 of Vyper.fun and now you have to power to create new Pokémons on blockchain using Vyper 🔥

Tweet about it to share your amazing feat!

[![Tweet](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fvyper.fun%2F%23%2F1%2Fintroduction)](https://twitter.com/intent/tweet?hashtags=VyperFun&ref_src=twsrc%5Etfw&text=I%20just%20completed%20Lesson%201%3A%20Create%20your%20Pok%C3%A9mon%20on%20blockchain%20using%20%40vyperlang%20at%20%40VyperFun%20%F0%9F%98%8E%20&tw_p=tweetbutton&url=https%3A%2F%2Fvyper.fun%2F%23%2F1%2Fintroduction)

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.13-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.13-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.12-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
