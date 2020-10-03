# Capítulo 11: Juntándolo todo

En el capítulo anterior, llamamos la función `battle` perteneciente al contrato del pokemon salvaje, desde el contrato del entrenador.

Manejamos múltiples valores retornados por la función `battle` usando una tupla. Ahora usaremos las variables de la tupla para alterar el estado del contrato del entrenador.

Como discutimos en capítulos anteriores, si el pokemon del entrenador gana la batalla contra un pokemon salvaje, el entrenador captura al pokemon salvaje. Si el pokemon del entrenador pierde, el entrenador no recibe nada.

## Ponlo a prueba

Como discutimos, tenemos 2 condiciones basadas en la variable `battleResult`. Si `battleResult` es `True` eso significa que el pokemon del entrenador ha ganado, de lo contrario (si es `False`), entonces el pokemon del entrenador perdió.

1. Crea una expresión if/else con la condición `battleResult`.

2. Si `battleResult` es `True`:

  - Incrementa el número de `matches` para el pokemon del entrenador por `1` (utiliza el operador aritmético `+=` para mantener el código limpio). Para acceder al pokemon del entrenador, utiliza el mapeo `trainerToPokemon` con la primera llave `msg.sender` y la segunda llave `pokemonIndex`.
  - Incrementa el número de `wins` para el pokemon del entrenador por `1` (utiliza el operador aritmético `+=` para mantener el código limpio).
  - Crea una nueva variable llamada `newPokemon` de tipo `Pokemon` y asigna su valor a un nuevo Pokemon creado usando la estructura `Pokemon` y los siguientes parámetros:
    - name: `newPokemonName`
    - dna: `newPokemonDNA`
    - HP: `newPokemonHP`
    - matches: `1` (ya que el pokemon salvaje acaba de pelear)
    - wins: `0`
  - Agrega este `newPokemon` al mapeo `pokemonList` usando la llave `totalPokemonCount`.
  - Incrementa `totalPokemonCount` por `1`.
  - Agrega el `newPokemon` al mapeo `trainerToPokemon` usando como primera llave `msg.sender` y como segunda llave `trainerPokemonCount[msg.sender]`.
  - Incrementa `trainerPokemonCount[msg.sender]` por `1` usando el operador aritmético `+=`.
  - Emite el evento `NewPokemonCreated` con los siguientes parámetros: `newPokemonName`, `newPokemonDNA` y `newPokemonHP`.

3. Si `battleResult` es `False`, incrementa el número de `matches` para el pokemon del entrenador por `1` (utiliza el operador aritmético `+=` para mantener el código limpio).

Felicitaciones 🎉

Has completado la Lección 2 y los entrenadores ya pueden batallar y capturar pokemones salvajes ⚔️

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.11-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.11-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.10-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
