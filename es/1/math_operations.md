<!-- Add translation for the following page: https://vyper.fun/#/1/math_operations
Do NOT change the code below. The below code runs the code editor -->

# Capítulo 3: Operaciones matemáticas

Las matemáticas en Vyper son bastante sencillas. Las siguientes operaciones son las mismas que en la mayoría de los lenguajes de programación:

- Suma: `x + y`
- Resta: `x - y`
- Multiplicación: `x * y`
- División: `x / y`
- Modulo / Resto: `x % y` (por ejemplo, `13 % 5` es `3`, porque si divides `13` por `5`, `3` es el resto)

Vyper también soporta un operador exponencial (es decir "`x` elevado a la `y`", `x^y`):

```vyper
# igual que 5^2 = 25
uint256 x = 5 ** 2
```

## Ponlo a prueba

Para estar seguros que el ADN de nuestro Pokemon es de solo 16 caracteres, vamos a hacer otra `constant` `uint256` igual a `10^16`. De esta forma, luego podemos usar el operador de modulo `%` para acortar un entero a 16 dígitos.

1. Crea una `constant` `uint256` llamada `DNA_MODULUS`, y asignale un valor igual a `10` elevado a la `DNA_DIGITS`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.3-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.3-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.2-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
