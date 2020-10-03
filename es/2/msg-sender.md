# Capítulo 2: Msg.sender

Ahora que podemos saber que entrenador es dueño de que Pokémon, actualizaremos las funciones del contrato.

Para ello, necesitamos usar algo llamado `msg.sender`.

## msg.sender

En Vyper, hay ciertas variables globales disponibles para todas las funciones. Una de ellas es `msg.sender`, que se refiere a la dirección de la persona (o contrato inteligente) que llamo a la función actual.

> Nota: En Vyper, la ejecución de una función siempre debe comenzar con una llamada externa. Un contrato simplemente permanecerá en la cadena de bloques (blockchain) hasta que alguien llame a alguna de sus funciones. Entonces siempre habrá un `msg.sender`.

Aquí hay un ejemplo de cómo utilizar `msg.sender` y actualizar el mapeo:

```vyper
favoriteNumber: HashMap[address, uint256]

@external
def setMyNumber(myNumber: uint256):
    # Actualiza nuestro `favoriteNumber` mapeo para almacenar `myNumber` en `msg.sender`
    favoriteNumber[msg.sender] = myNumber

@view
@external
def whatIsMyNumber() -> uint256:
    # Recupera el valor almacenado en la dirección del remitente
    # Sera `0` si el remitente aún no ha llamado a `setMyNumber`
    return favoriteNumber[msg.sender]
```

En este simple ejemplo, cualquiera podría llamar `setMyNumber` y almacenar un `uint256` en nuestro contrato, Que estaría asignado a su `address`. Entonces cuando llamen `whatIsMyNumber`, recibirán el `uint256` que esta almacenado.

Usando `msg.sender` te brinda la seguridad de que en la cadena de bloques de Ethereum — la única manera de que alguien pueda modificar los datos de otra persona seria robando su clave privada asociada con su dirección de Ethereum.

## Pongámoslo a prueba

Necesitamos actualizar las funciones del contrato para que podamos crear un entrenador usando la estructura `Trainer` y el mapeo `trainerList`. Esta función también debería llamar la función `_createPokemon` para crear un Pokémon y luego usar el mapeo `trainerToPokemon` para asignar la propiedad de un Pokémon en un entrenador. Finalmente, incrementamos el contador `trainerPokemonCount`.

1. Crea un evento, `NewTrainerCreated` con la propiedad: `name` (`String[32]`).

2. Crea una función `external` llamada `createTrainer` que toma 2 parametros: `trainerName` (`String[32]`) y `pokemonName` (`String[32]`).

3. Dentro de cuerpo de la función `createTrainer`, llama a `_createPokemon` pasando `pokemonName` como el parámetro `_name`. Esto regresara un `Pokemon`. Crea una variable llamada `newPokemon` de tipo `Pokemon` y asigna a su valor el Pokémon que regreso `_createPokemon`.

4. Dentro del cuerpo de la función `createTrainer`, crea un entrenador usando la estructura `Trainer` con el `name` como `trainerName`. Crea una variable `newTrainer` de tipo `Trainer` y asigna el valor del entrenador creado.

5. Agrega el nuevo entrenador al mapeo `trainerList` asignando `msg.sender` a `newTrainer`.

6. Agrega al nuevo entrenador y Pokémon al mapeo anidado `trainerToPokemon` agregando 2 claves: la primera como `msg.sender` y la segunda como `self.trainerPokemonCount[msg.sender]` (que actúa como una clave única para cada Pokémon de un entrenador). El valor asignado es `newPokemon`.

7. Incrementa el contador `trainerPokemonCount` para nuestra dirección de entrenador `msg.sender` en `1`.

8. Invoca el evento `NewTrainerCreated` con el parámetro `trainerName`.


<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.2-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.2-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.1-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
