<!-- Add translation for the following page: https://vyper.fun/#/1/working_with_structs
Do NOT change the code below. The below code runs the code editor -->

# Capítulo 7: Trabajando Con Structs y Mappings

Te acuerdas de nuestro struct `Person` en el ejemplo anterior?

```vyper
struct Person:
    age: uint256
    name: String[64]

people: HashMap[uint256, Person]
```

Ahora vamos a aprender como crear nuevas `Persons` y a agregarlos a nuestro mapping `people`.

```vyper
// crea un nuevo Person:
Person vasa = Person({ name: "vasa", age: 22 })

// agrega esa persona al mapping con la clave 0:
self.people[0] = vasa
```

También podemos combinarlas y hacerlas en una sola línea de código para mantener las cosas limpias:

```vyper
self.people[0] = Person({ name: "vasa", age: 22 })
```

## La Variable `self`

Notar que estamos usando la palabra clave `self` para acceder a la variable `people` (su estado).

`self` es una variable de entorno que se utiliza para referirse a un contrato desde dentro de sí mismo. `self` te permite **leer y escribir variables de estado** y **llamar funciones privadas (internal) dentro del contrato**. Aprenderemos sobre las funciones externas/internas en el próximo capítulo.

`self` se utiliza para acceder a las variables de estado de un contrato, como se muestra en el siguiente ejemplo:

```vyper
message: String[10]

@external
def setMessage(msg: String[10]):
    self.message = msg
```

`self` también se utiliza para llamar a las funciones internas dentro de un contrato:

```vyper
@internal
def multiplyByTwo(amount: uint256):
    amount * 2

@external
def calculate(amount: uint256):
    self.multiplyByTwo(amount)
```

## Ponlo a prueba

Hagamos que nuestra funcion `createPokemon` haga algo!

1. Remueve la palabra clave `pass`. Rellena el cuerpo de la función para que cree un nuevo `Pokemon`, y lo añada al mapping `pokemonList`. Los valores para `name`, `dna`, y `HP` para el nuevo `Pokemon` deben provenir de los argumentos de la función.

2. No te olvides de usar la variable de entorno `self` para acceder al mapping `pokemonList`.

3. Hagámoslo en una línea de código para mantener las cosas limpias.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.7-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.7-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.6-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
