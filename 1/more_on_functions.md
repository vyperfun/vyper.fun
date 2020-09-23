# Chapter 10: More on Functions

In this chapter, we're going to learn about function `return` values, and optional function decorators.

## Return Values

To return a value from a function, the declaration looks like this:

```vyper
nameToAge: HashMap[String[64], uint256]

@external
def getAge(String[64] name) -> uint256:
    return self.nameToAge[name]
```

The above `getAge` function returns a `uint256` which is represented by the symbol `->` followed by the return type `uint256`.

## Function decorators

In a previous chapter, we explored 2 of the function decorators: `@internal` and `@external`.

There are a few more _optional_ function decorators:

| Decorator                     | Description                                                         |
| ----------------------------- | ------------------------------------------------------------------- |
| `@pure`                       | Function does not read contract state or environment variables      |
| `@view`                       | Function does not alter contract state, but may read contract state |
| `@payable`                    | Function is able to receive Ether                                   |
| `@nonreentrant(<unique_key>)` | Function cannot be called back into during an external call         |

Following the above example, we can add `@view` function decorator on the `getAge` function as it reads the contract state (storage variable) but does not alter it.

```vyper
nameToAge: HashMap[String[64], uint256]

@view
@external
def getAge(String[64] name) -> uint256:
    return self.nameToAge[name]
```

## Put it to the test

We want to create an `internal` function which does not read or alter the contract state or environment variables (meaning a `pure` function) which returns a `uint256`.

1. Create an function named `_generateRandomDNA` with internal and pure function decorators.
2. The function should accept an input parameter: `_name` of type `String[32]`.
3. The function returns a `uint256` type.
4. Use the `pass` keyword to define an empty function body.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.10-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.10-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.9-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
