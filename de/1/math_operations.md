<!-- Add translation for the following page: https://vyper.fun/#/1/math_operations
Do NOT change the code below. The below code runs the code editor -->
# Chapter 3: Mathematische Operationen

Mathematik in Vyper ist ziemlich unkompliziert. Die folgenden Operationen sind die gleichen wie in den meisten anderen Programmiersprachen:

- Addition: `x + y`
- Subtraktion: `x - y`
- Multiplikation: `x * y`
- Division: `x / y`
- Division mit Rest: `x % y` (Zum Beispiel `13 % 5` ist `3`, weil beim Dividieren von `13` durch `5`, bleibt der Rest `3`)

Vyper unterstützt auch einen exponentiellen Operator (d.h. "`x` hoch `y`", `x^y`):

```vyper
# gleich 5^2 = 25
uint256 x = 5 ** 2
```

## Stellen Sie sich auf die Probe

Um sicherzustellen, dass die DNA unseres Pokemons nur 16 Zeichen lang ist, machen wir eine weitere `Konstante` `uint256` gleich `10^16`. Auf diese Weise können wir später den Modulus-Operator `%` verwenden, um eine ganze Zahl auf 16 Stellen zu verkürzen.


1. Erstellen Sie eine Konstante (`constant`) vom Typ `uint256` mit dem Namen `DNA_MODULUS`, und setzen Sie es gleich `10` hoch `DNA_DIGITS`.
<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.3-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.3-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.2-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
