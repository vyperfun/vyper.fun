# Chapter 11: Keccak256 and Typecasting

We want our `_generateRandomDna` function to return a (semi) random `uint256`. How can we accomplish this?

Ethereum has the [hash function]([https://en.wikipedia.org/wiki/Hash_function]) `keccak256` built in, which is a version of SHA3. A hash function basically maps an input into a random 256-bit hexadecimal number. A slight change in the input will cause a large change in the hash.

It's useful for many purposes in Ethereum, but for right now we're just going to use it for pseudo-random number generation.

Also important, `keccak256` expects a single parameter of type `bytes32`, `Bytes` or `String`.

### Example

```vyper
keccak256("aaaab")
# returns 6e91ec6b618bb462a4a6ee5aa2cb0e9cf30f7a052bb467b0ba58b8748c00d2e5

keccak256("aaaac")
# returns b1f078126895a1424524de5321b339ab00408010b7cf0e6ed451514981e58aa9
```

As you can see, the returned values are totally different despite only 1 character change in the input.

> Note: Secure random-number generation in blockchain is a very difficult problem. Our method here is insecure, but since security isn't top priority for our Pokemon DNA, it will be good enough for our purposes.

## Typecasting

Sometimes you need to convert between data types. Take the following example:

```vyper
a: uint256 = 10
b: int128 = 10

# The following operation will throw error
# as a and b have different types.
# hence it cannot be a uint256
c: int128 = a * b

# converting a from uint256 to int128 will
# remove this error
c: int128 = convert(a, int128) * b
```

Here we mitigated the error by converting `a` from `uint256` to `int128`.

All type conversions in Vyper must be made explicitly using the built-in `convert(a: atype, btype)` function. Here is the list of [supported type converstions](https://vyper.readthedocs.io/en/stable/types.html#type-conversions).

## Put it to the test

Let's fill in the body of our `_generateRandomDna` function! Here's what it should do:

1. Generate `keccak256` hash of the `_name` argument.
2. Convert this hash into a `uint256` and assign its value to a `uint256` variable named `random`.
3. We want our DNA to only be 16 digits long (remember our `DNA_MODULUS`?). Return `random` modulus (`%`) `DNA_MODULUS`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.11-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.11-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.10-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
