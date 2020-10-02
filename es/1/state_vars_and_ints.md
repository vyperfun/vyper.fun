<!-- Add translation for the following page: https://vyper.fun/#/1/state_vars_and_ints
Do NOT change the code below. The below code runs the code editor -->

# Capitulo 2: Variables de estado, Enteros & Constantes

Buen trabajo! Ahora que tenemos una estructura para nuestro contrato, aprendamos cómo Vyper trata las variables.

Las variables de estado se almacenan de forma permanente en el contrato. Esto significa que están escritas en la cadena de bloques del Ethereum. Piensa en ellas como si se escribieran en una base de datos.

### Ejemplo

```vyper
# @version >=0.2.4 <0.3.0

# Esto va a ser almacenado de forma permanente en la blockchain
storedData: int128
```

En este contrato de ejempli, creamos un [`int128`](https://vyper.readthedocs.io/en/stable/types.html#signed-integer-128-bit) llamado `storedData` que contiene por _defecto_ un valor de `1`.

## Enteros sin signo: `uint256`

El tipo de dato `uint256` es un entero sin signo (256 bit), esto quiere decir que su valor no puede ser negativo.

Tambien existe un tipo de dato `int128` (128 bit) para enteros con signo (un tipo que puede almacenar tanto enteros negativos como positivos).

### Ejemplo

```vyper
# @version >=0.2.4 <0.3.0

# Esto crea una constante uint256 con un valor de 10
TEN: constant(uint256) = 10
```

En este contrato de ejemplo, creamos una `constant` `uint256` llamada `TEN` y le asignamos un valor de `10`.

## Ponlo a prueba

El ADN de nuestro Pokemon va a ser determinado con un numero de 16 digitos.

En el área de codificación del lado derecho, declara una `constant` `uint256` llamada `DNA_DIGITS`, y asignale un valor igual a `16`.


<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.2-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.2-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.1-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
