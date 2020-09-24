# Chapter 3: Math Operations

Math in Vyper is pretty straightforward. The following operations are the same as in most programming languages:

- Addition: `x + y`
- Subtraction: `x - y`
- Multiplication: `x * y`
- Division: `x / y`
- Modulus / remainder: `x % y` (for example, `13 % 5` is `3`, because if you divide `5` into `13`, `3` is the remainder)

Vyper also supports an exponential operator (i.e. "`x` to the power of `y`", `x^y`):

```vyper
# equal to 5^2 = 25
uint256 x = 5 ** 2
```

## Put it to the test

To make sure our Pokemon's DNA is only 16 characters, let's make another `constant` `uint256` equal to `10^16`. That way we can later use the modulus operator `%` to shorten an integer to 16 digits.

1. Create a `constant` `uint256` named `DNA_MODULUS`, and set it equal to `10` to the power of `DNA_DIGITS`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.3-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.3-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.2-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
