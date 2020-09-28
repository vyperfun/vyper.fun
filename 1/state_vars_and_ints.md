# Chapter 2: State Variables, Integers & Constants

Great job! Now that we've got a shell for our contract, let's learn about how Vyper deals with variables.

State variables are permanently stored in contract storage. This means they're written to the Ethereum blockchain. Think of them like writing to a DB.

### Example

```vyper
# @version >=0.2.4 <0.3.0

# This will be stored permanently in the blockchain
storedData: int128
```

In this example contract, we created a [`int128`](https://vyper.readthedocs.io/en/stable/types.html#signed-integer-128-bit) called `storedData` which holds a _default_ value of `1`.

## Unsigned Integers: `uint256`

The `uint256` data type is an unsigned integer (256 bit), meaning its value must be non-negative.

There's also an `int128` (128 bit) data type for signed integers (a type to store positive and negative integers).

### Example

```vyper
# @version >=0.2.4 <0.3.0

# This creates a constant uint256 with a value of 10
TEN: constant(uint256) = 10
```

In this example contract, we created a `constant` `uint256` called `TEN` and set it equal to `10`.

## Put it to the test

Our Pokemon DNA is going to be determined by a 16-digit number.

In the coding area on right-side, declare a `constant` `uint256` named `DNA_DIGITS`, and set it equal to `16`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.2-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.2-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.1-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
