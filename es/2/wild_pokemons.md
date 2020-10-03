# Capítulo 3: Pokemones salvajes

Ahora tenemos entrenadores y sus pokemones. Como todo fan de Pokémon sabe los entrenadores salen de viaje y luchan contra pokemones salvajes. Si ellos ganan la batalla, ellos pueden atrapar al Pokémon.

Creemos un nuevo contrato con el cual podamos luchar contra pokemones salvajes e intentar atraparlos.

## Pongámoslo a prueba

Reutilizaremos algunas partes de nuestro contrato anterior. Ahora, agreguemos algunas variables de estado.

1. Agrega una variable de almacenamiento `constant` `uint256` llamada `NAME_MODULUS`, y asigna su valor igual a `20`.

2. Crea una variable de almacenamiento `uint256` llamada `battleCount`.

3. Cree un mapeo con la clave `uint256` y el valor `String[32]`, llamado `pokemonNames`.

4. Realice los siguientes cambios en la función `_generateRandomDNA`:

   - Elimina el parámetro de entrada `_name` para que `_generateRandomDNA` no acepte ningún parámetro.
   - En el cuerpo de la función `_generateRandomDNA`, remplaza `_name` por `battleCount`. Ahora puedes recordar de [Lección 1, Capitulo 11](https://vyper.fun/#/1/keccak256-and-typecasting), que `keccak256` espera un único parámetro de tipo `bytes32`, `Bytes` o `String`. Entonces, necesitamos usar `convert` para castear `battleCount` a `bytes32`.
   - Puedes recordar de [Lección 1, Capitulo 10](https://vyper.fun/#/1/more_on_functions) que agregamos el decorador `@pure` a una función que no lee el estado del contrato o las variables de entorno. Pero ahora que `_generateRandomDNA` accede a `battleCount` (una variable de estado), ya no es una función `@pure`. Por lo cual, elimina el decorador de función `@pure`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.3-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.3-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.2-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
