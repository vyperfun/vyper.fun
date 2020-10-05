<!-- Add translation for the following page: https://vyper.fun/#/1/math_operations
Do NOT change the code below. The below code runs the code editor -->

# Capítulo 3: Operações Matemáticas

A matemática em Vyper é bastante simples. As seguintes operações são iguais às da maioria das linguagens de programação:

- Adição: `x + y`
- Subtração: `x - y`
- Multiplicação: `x * y`
- Divisão: `x / y`
- Módulo / resto: `x % y` (por exemplo, `13% 5` é `3`, porque se você dividir `5` em `13`,` 3` é o resto)

Vyper também suporta um operador exponencial (ou seja, "`x` elevado à potência de `y`", `x ^ y`):

```vyper
# igual a 5^2 = 25
uint256 x = 5 ** 2
```

## Coloca-lo a prova

Para ter certeza de que o DNA do nosso Pokémon tem apenas 16 caracteres, vamos fazer outra `constant` `uint256` igual a `10 ^ 16`. Dessa forma, podemos usar posteriormente o operador de módulo `%` para encurtar um número inteiro para 16 dígitos.

1. Crie uma `constante` `uint256` chamada` DNA_MODULUS` e defina-a igual a `10` com a potência de` DNA_DIGITS`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.3-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.3-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.2-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
