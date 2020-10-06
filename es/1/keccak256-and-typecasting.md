<!-- Add translation for the following page: https://vyper.fun/#/1/keccak256-and-typecasting
Do NOT change the code below. The below code runs the code editor -->

# Capitulo 1: Keccak256 y Typecasting

Queremos que nuestra función `_generateRandomDna` retorne un (semi) aleatorio `uint256`. ¿Cómo podemos realizar esto?
Ethereum tiene la [Función Hash]([https://es.wikipedia.org/wiki/Función_hash]) `keccak256` incorporada, la cual es una versión de SHA3. Una función hash básicamente asigna una entrada a un número hexadecimal de 256-bits aleatorio. Un cambio ligero en la entrada causaría un gran cambio en el hash.
Es útil para muchos propósitos en Ethereum, pero ahora mismo solo vamos a usarla para generar un número pseudo-aleatorio.
Importante, `keccak256` espera un parámetro de tipo `bytes32`, `Bytes` o `String`.

### Ejemplo
```vyper
keccak256("aaaab")
# regresa 6e91ec6b618bb462a4a6ee5aa2cb0e9cf30f7a052bb467b0ba58b8748c00d2e5

keccak256("aaaac")
# regresa b1f078126895a1424524de5321b339ab00408010b7cf0e6ed451514981e58aa9
```
Como puedes ver, los valores retornados son totalmente diferentes a pesar que solo se cambia un carácter en la entrada.

	Nota: La generación de números random en blockchain es un problema muy difícil. Nuestro método aquí es inseguro, pero dado que la seguridad no es nuestra mayor prioridad para nuestro ADN Pokemon, Sera suficiente para nuestros propósitos.

## Typecasting
A veces necesitas convertir entre tipos de datos. Toma el siguiente ejemplo:

```vyper
a: uint256 = 10
b: int128 = 10

# La siguiente operación retornará error
# como a y b son tipos diferentes.
# Por lo tanto no puede ser un uint256
C: int125 = a * b

# Convirtiendo a de uint256 a int128
# removerá este error 
C: int128 = convert(a, int128) * b
```
Aquí mitigamos el error convirtiendo `a` de `uint256` a `int128`

Todas las conversiones de tipos en Vyper deben ser explícitamente usando la función incorporada `convert(a: atype, btype)`. Aquí está la lista de [Conversión de tipos soportada](https://vyper.readthedocs.io/en/stable/types.html#type-conversions)

## Ponlo en la prueba

¡Vamos a llenar el cuerpo de nuestra función `_generateRandomDna`!
Aquí esta lo que debe hacer:
1. Generar hash `keccak256` del argumento `_name`.
2. Convertir este hash en un `uint256` y asígnale su valor a una variable `uint256` nombrada `random`.
3. Queremos que nuestro ADN sea de solamente 16 dígitos (¿Recuerdas nuestro `DNA_MODULUS`?). Regresa módulo `random` (`%`) `DNA_MODULUS`. 

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.11-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.11-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.10-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
