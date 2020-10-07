# Capítulo 10: Llamando a un Contrato

En el [Capítulo 8](https://vyper.fun/#/2/interfaces), agregamos la interfaz `WildPokemons` al contrato del entrenador. En este capítulo, vamos a llamar a la función `battle` de la interfaz `WildPokemon`.

Si recuerdas el [Capítulo 8](https://vyper.fun/#/2/interfaces), necesitamos la dirección de un contrato para interactuar con `WildPokemons`.

Aprenderemos como implementar un contrato en la blockchain de Ethereum y obtener la dirección del contrato en lecciones futuras. Para propósitos de este capítulo, he implementado el [contrato `WildPokemons` en la Rinkeby Testnet](https://rinkeby.etherscan.io/address/0xC84a08B45CF0FC28EFC8caE8B7Fc1d062115048e)

Aquí está la dirección del contrato: [0xC84a08B45CF0FC28EFC8caE8B7Fc1d062115048e](https://rinkeby.etherscan.io/address/0xC84a08B45CF0FC28EFC8caE8B7Fc1d062115048e)

Usando la dirección del contrato y la interfaz, puedes hacer llamadas externas a las funciones de la interfaz (que fue discutida detalladamente en el [Capítulo 8](https://vyper.fun/#/2/interfaces)):

```vyper
interface Car:
    def start() -> bool: nonpayable
    def getSpeed() -> uint256: view

@external
def Driver(some_address: address):
    Car(some_address).start()
```

## Manejando Múltiples Retornos usando Tuplas

A diferencia de Python, no puedes declarar directamente una [tupla](https://www.tutorialspoint.com/python/python_tuples.htm) en Vyper. Sin embargo, en ciertos casos puedes usar tuplas literales durante la asignación. Por ejemplo, cuando una función retorna múltiples valores.

```vyper
@internal
def getNameAndAge() -> (String[32], int128):
    return "vasa", 22

@external
def getPerson():
    name: String[32] = empty(String[32])
    age: int128 = empty(int128)

    # El valor retornado por `getNameAndAge` es asignado usando una tupla
    (name, age) = self.getNameAndAge()

    # También puedes ignorar los paréntesis
    name, age = self.getNameAndAge()
```

## Ponlo a prueba

La función `battle` retorna los siguientes 4 argumentos:

- `battleResult`: `bool`
- `newPokemonName`: `String[32]`
- `newPokemonDNA`: `uint256`
- `newPokemonHP`: `uint256`

1. Dentro de `battleWildPokemon`, define estas 4 variables de función e inicialízalas usando la función incorporada `empty`.

2. Define una variable de almacenamiento con `constant` `address` llamada `WILD_POKEMON` con el valor `0xC84a08B45CF0FC28EFC8caE8B7Fc1d062115048e`.

3. Dentro de `battleWildPokemon`, usa `WildPokemons` y `WILD_POKEMON` para llamar a la función `battle` que recibe un solo parámetro de tipo `Pokemon`. Este parámetro puede ser obtenido usando el mapeo `trainerToPokemon` enviando 2 claves: `msg.sender` como la primera y `pokemonIndex` como la segunda.

4. Usa las variables de función creadas en el paso 1 para crear una tupla que sirva para capturar los múltiples valores a ser retornados.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/2/2.10-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/2/2.10-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/2/2.9-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
