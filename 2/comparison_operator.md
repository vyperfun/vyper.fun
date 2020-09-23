# Chapter 6: Comparison Operators and If-Else

In the previous chapter, we created the `battle` function which created a random pokemon.

We need to compare the wild pokemon and the trainer pokemon to return the result of the battle. For this purpose we need comparison operators.

## Comparision Operators

Different types support different comparison operators. For our use-case we will compare 2 `uint256`.

Here is a list of comparison operators supported by `uint256` type.

| Operator | Description              |
| -------- | ------------------------ |
| x < y    | Less than                |
| x <= y   | Less than or equal to    |
| x == y   | Equals                   |
| x != y   | Does not equal           |
| x >= y   | Greater than or equal to |
| x > y    | Greater than             |

## If-Elif-Else statements

The `if` statement is a control flow construct used for conditional execution:

```vyper
if CONDITION:
    # do something
```

`CONDITION` is a boolean or boolean operation. The boolean is evaluated left-to-right, one expression at a time, until the condition is found to be true or false. If true, the logic in the body of the if statement is executed.

Note that unlike Python, Vyper does not allow implicit conversion from non-boolean types within the condition of an if statement. `if 1: pass` will fail to compile with a type mismatch.

You can also include `elif` and `else` statements, to add more conditional statements and a body that executes when the conditionals are false:

```vyper
if CONDITION:
    # do something 1
elif OTHER_CONDITION:
    # do something 2
else:
    # do something 3
```

## Put it to the test

We will compare the `HP` of the pokemons to decide the winner. If the trainer pokemon wins, the trainer gets the new pokemon.

1. Inside the `battle` function, increment the `battleCount` state variable by 1.

2. Create an `if` statement which compares the HP of the trainer `pokemon` parameter and the `randomHP` of the wild pokemon. If the HP of trainer `pokemon` is greater than `randomHP` then the trainer `pokemon` wins.

3. In the body of the `if` statement, return the following arguments:
   - Battle result: `True`
   - Wild pokemon name: `randomName`
   - Wild pokemon DNA: `randomDNA`
   - Wild pokemon HP: `randomHP`

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.7-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.7-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.6-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
