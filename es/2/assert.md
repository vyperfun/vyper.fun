# Capítulo 9: Afirmaciones

En el capítulo anterior, agregamos la interfaz `WildPokemons` al contrato del entrenador. En los siguientes capítulos, empezaremos a escribir las funciones para pelear con los pokemones salvajes usando la función `battle` de la interfaz `WildPokemon`.

En el contrato actual, cuando llamamos la función `createTrainer`, un nuevo entrenador es creado con un solo pokemon.

Ahora un entrenador debería ser capaz de usar su pokemon para batallar contra pokemones salvajes. Si el pokemon del entrenador gana, entonces el entrenador captura al pokemon salvaje. Si el pokemon del entrenador pierde, el entrenador no recibe nada.

## assert

La declaración `assert` realiza una afirmación sobre una condición específica. Si la condición es evaluada como `False`, entonces la transacción es revertida.

Adicionalmente puedes agregar un mensaje de error _opcional_.

```vyper
@external
def applyForDriversLicense(String[32]: name, uint256: age):
    assert age < 18 , "no es elegible para una licencia de conducir"
```

Aquí, si el parámetro `age` que recibe la función `applyForDriversLicense` is menor a `18`, entonces la transacción es revertida con el mensaje `"no es elegible para una licencia de conducir".

> NOTA: Si una transacción es revertida, entonces cualquier cambio realizado al estado del contrator por la transacción será cancelada. En otras palabras, el estado del contrato va a ser restaurado al estado que tenía antes de que la transacción ocurriera.

## Ponlo a prueba

Un entrenador puede batallar, capturar y poseer múltiples pokemones. Debido a esto, un entrenador debe escoger cuál pokemon quiere usar para batallar contra el pokemon salvaje.

Todos los pokemones de un entrenador están almacenados en el mapeo `trainerToPokemon`:

```vyper
trainerToPokemon: HashMap[address, HashMap[uint256, Pokemon]]
```

Para seleccionar un `Pokemon` específico de un entrenador, necesitamos dos cosas:

- `address` del entrenador ejecutando el contrato.

- Un índice `uint256` que seleccionará el pokemon específico del entrenador.

Recordemos del [Capítulo 2](https://vyper.fun/#/2/msg-sender) que puedes obtener la dirección del ejecutor del contrato usando `msg.sender`.

1. Crea una función `external` llamada `battleWildPokemon` que reciba un solo parámetro: `pokemonIndex` de tipo `uint256`.

Un entrenador que ejecute la función `battleWildPokemon`, puede enviar el `pokemonIndex` para seleccionar el pokemon a usar durante la batalla contra el pokemon salvaje.

Ahora, supongamos que un entrenador solo tiene un pokemon. Vamos a examinar las siguientes líneas de código en `createTrainer`:

```vyper
self.trainerToPokemon[msg.sender][self.trainerPokemonCount[msg.sender]] = newPokemon
self.trainerPokemonCount[msg.sender] += 1
```

Cuando un nuevo entrenador es creado, el valor de `self.trainerPokemonCount[msg.sender]` para el entrenador es `0`.

El primer pokemon es agregado al índice `0` del mapeo `trainerToPokemon`.

Mientras vamos incrementando `trainerPokemonCount`, subsecuentes pokemones son añadidos a índices superiores.

¿Qué ocurre si un entrenador con un solo pokemon ejecuta la función `battleWildPokemon` con un `pokemonIndex` mayor a `0`?

Como no hay pokemones asociados con `pokemonIndex` mayor a `0` para este entrenador, la transacción causaría un error durante el tiempo de ejecución (runtime error).

2. Para mitigar esta situación, dentro de la función `battleWildPokemon`, agregamos una declaración `assert` que chequea si `pokemonIndex` es menor que `self.trainerPokemonCount[msg.sender]`. Si la condición es `Falsa`, retornamos el mesaje de error: `"Índice No Válido Provisto"`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.9-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.9-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.8-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
