<!-- Add translation for the following page: https://vyper.fun/#/1/math_operations
Do NOT change the code below. The below code runs the code editor -->

# Chapitre 3: Opérations mathématiques

Mathématiques dans Vyper sont trés facile. Les suivant opérations sont identique que la plupart des langages de programmation:

- Somme: `x + y`
- Soustraction: `x - y`
- Multiplication: `x * y`
- Division: `x / y`
- Reste de la division: `x % y` (pour exemple, `13 % 5` est `3`, parce que si vous divisez `5` dans `13`, `3` est la reste de la division)

Aussi Vyper supporte un operator exponentiel (p.e. "`x` a la `y` puissance", `x^y`):

```vyper
# égal que 5^2 = 25
uint256 x = 5 ** 2
```

## Faire le test

Pour assurer que notre ADN Pokemon est seulement de 16 caractéres, Nous allons faire une autre `constante` `uint256` égal de `10^16`. De cette maniére nous purrions utiliser le module operator `%` plus tard pour réduire entier de 16 chiffres.

1. Créer une `constante` `uint256` s'appeler `DNA_MODULUS`, et assigne-le `10` a la `DNA_DIGITS` puissance.


<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/1/1.3-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.3-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.2-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
