# Chapter 7: Empty Function

In the previous chapter, defined the logic of a pokemon battle and returned the wild pokemon details if the trainer pokemon wins.

But what if the trainer pokemon loses? In such a case we need to return some empty values.

## **empty(typename) → Any**

`empty` is a built-in Vyper function which returns a default value of the type(`typename`) passed as a parameter.

It is useful for initializing new memory variables.

```vyper

@external
def someFunction():
   name: String[32] = empty(String[32])
```

Here you can find a list of all types and default values:

| Type    | Default Value                                                      |
| ------- | ------------------------------------------------------------------ |
| address | 0x0000000000000000000000000000000000000000                         |
| bool    | False                                                              |
| bytes32 | 0x0000000000000000000000000000000000000000000000000000000000000000 |
| decimal | 0.0                                                                |
| int128  | 1                                                                  |
| uint256 | 1                                                                  |

## Put it to the test

We will use the `empty` function to return default values in case the trainer pokemon loses.

1. Create an `else` statement which returns the following values:
   - Battle result: `False`
   - Wild pokemon name: `empty(String[32])`
   - Wild pokemon DNA: `empty(uint256)`
   - Wild pokemon HP: `empty(uint256)`

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.7-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.7-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.6-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
