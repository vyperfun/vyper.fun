# Chapter 8: External / Internal Functions

As we discussed in the previous chapter, all functions must include one visibility decorator (`@external` or `@internal`).

| Decorator   | Description                                         |
| ----------- | --------------------------------------------------- |
| `@external` | Function can only be called externally              |
| `@internal` | Function can only be called within current contract |

We would want to create some functions which should not be called externally. For such functions we would use the `@internal` visibility decorator.

Let's look at how to declare an internal function:

```vyper
peopleToAge: HashMap[String[64], uint256]

@internal
def _addPerson(_name: String[64], _age: uint256):
    self.peopleToAge[_name] = [_age]
```

This means only other functions within our contract will be able to call the `_addPerson` function and add to the `peopleToAge` mapping.

Notice the underscore (`_`) at the start of the function name and the parameters. It is a naming convention to add a underscore (`_`) in front of an internal function name and its parameter(s).

## Put it to the test

Our contract's `createPokemon` function is currently external — this means anyone could call it and create a new Pokemon in our contract! Let's make it internal.

1. Modify `createPokemon` so it's an internal function. Don't forget the naming convention!

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.8-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.8-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.7-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
