# Capítulo 1: Direcciones   

En el último capítulo creamos Pokemones. Pero sin entrenadores para poder entrenarlos, nuestro juego seria aburrido. Agreguemos entrenadores al juego. Cada entrenador tendrá un Pokémon por defecto.

Para esto, necesitamos un nuevo tipo de dato: `address` (dirección).

## Direcciones

La cadena de bloques de Ethereum está formada por **accounts**(cuentas), que puedes visualizarlas como análogas a cuentas bancarias. Una cuenta tiene un saldo de **Ether** (la moneda usada en la cadena de bloques de Ethereum), y puedes enviar y recibir pagos de Ethereum desde otras cuentas, al igual que una cuenta bancaria puede transferir dinero a otras cuentas bancarias.

Cada cuenta tiene una `address`(dirección), como un número de cuenta bancaria. Esta dirección es única y su estructura es similar a la siguiente:

```
0x073Ab1C0CAd3677cDe9BDb0cDEEDC2085c029579
```

(Esta dirección le pertenece al equipo de Vyper.fun. ¡Si tu disfrutas nuestro trabajo podrías enviarnos algo de Ether! )

Entraremos más a detalle acerca de las direcciones en la siguiente lección, por ahora solo necesitamos saber que una dirección le pertenece a un usuario en específico o un Smart Contract (contrato inteligente).

Por lo cual podemos usarla para identificar a cada entrenador. Cuando un usuario cree un nuevo entrenador en la aplicación, asignaremos al entrenador a la dirección de Ethereum que llamo a la función.

## Mapeo anidado (nested mapping)

Un mapeo anidado se ve de la siguiente manera:

```vyper
# Asigna un profesor a una lista de estudiantes
teacherToStudents: HashMap[String[32], HashMap[uint256, String[32]]]

@external
def addStudent(teacherName: String[32], studentName: String[32], rollnumber: uint256):
    teacherToStudents[teacherName][rollnumber] = studentName
```

El mapping `teacherToStudents` asigna el nombre de un maestro (`String[32]`) a otro sub-mapping que representa una lista de estudiantes. Esta lista de estudiantes asigna el número del estudiante (`uint256`) a su nombre (`String[32]`).

El mapping `teacherToStudents` se puede completar agregando 2 claves: la primera para `String[32]` (`teacherName`) y la segunda para `uint256` (`rollnumber`). El valor asignado es un `String[32]` (`studentName`).

## Ponlo a prueba

Primero, para crear un entrenador, necesitamos una estructura 'entrenador'. Luego para almacenar la asignación de un entrenador y su Pokémon, vamos a necesitar usar 3 mappings.

1. Crea una estructura `Trainer` con la propiedad `name` (`String[32]`).
2. Crea un mapping,`trainerPokemonCount` con una clave de tipo `address` y un valor de tipo `uint256`.
3. Crea un mapping, `trainerList` con una clave de tipo `address` y un valor de tipo `Trainer`.
4. Crea un mapeo anidado (nested mapping), `trainerToPokemon` con una clave de tipo `address` que se asigne a otro sub-mapeo. El sub-mapeo tiene una clave de tipo `uint256` y un valor de tipo `Pokemon`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.1-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.1-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.12-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
