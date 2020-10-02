<!-- Add translation for the following page: https://vyper.fun/#/2/addresses
Do NOT change the code below. The below code runs the code editor -->

# Capítulo 1: Direcciones

En el último capítulo creamos Pokemons. Pero sin entrenadores para entrenar a los pokemons, nuestro juego sería aburrido. Agreguemos entrenadores al juego. Cada entrenador obtendría un Pokémon por defecto.

Para ello, necesitaremos un nuevo tipo de datos: `address`.

Direcciones
La cadena de bloques Ethereum está formada por cuentas , en las que puede pensar como cuentas bancarias. Una cuenta tiene un saldo de Ether (la moneda utilizada en la cadena de bloques Ethereum), y puede enviar y recibir pagos con Ether a otras cuentas, al igual que su cuenta bancaria puede transferir dinero a otras cuentas bancarias.

Cada cuenta tiene un `address`, que puede considerar como un número de cuenta bancaria. Es un identificador único que apunta a esa cuenta y tiene este aspecto:

```vyper

0x073Ab1C0CAd3677cDe9BDb0cDEEDC2085c029579

```

(Esta dirección pertenece al equipo de Vyper.fun. Si estás disfrutando de Vyper.fun, ¡puedes enviarnos un poco de Ether! 😉)

Entraremos en el meollo de las direcciones en una lección posterior, pero por ahora solo necesita comprender que una dirección es propiedad de un usuario específico (o un contrato inteligente).

Entonces podemos usarlo como una identificación única para la propiedad de un entrenador. Cuando un usuario crea un nuevo entrenador al interactuar con nuestra aplicación, estableceremos la propiedad del entrenador en la dirección de Ethereum que llamó a la función.

## Mapeo anidado

Un mapeo anidado tiene el siguiente aspecto:

```vyper

# maps a teacher to a list of students
teacherToStudents: HashMap[String[32], HashMap[uint256, String[32]]]

@external
def addStudent(teacherName: String[32], studentName: String[32], rollnumber: uint256):
    teacherToStudents[teacherName][rollnumber] = studentName

```

El `teacherToStudentsmapeo` asigna el nombre de un profesor ( `String[32]`) a otro submapeo que representa una lista de estudiantes. Esta lista de estudiantes asigna el número de lista de estudiantes ( `uint256`) a sus nombres ( `String[32]`).

Se `teacherToStudents` puede completar agregando 2 claves: la primera clave para `String[32]`( `teacherName`) y la segunda clave para `uint256`( `rollnumber`). El valor asignado es un `String[32]`( `studentName`).

## Ponlo a prueba

Primero, para crear un entrenador, necesitaríamos crear una estructura de entrenador. Luego, para almacenar la propiedad de un entrenador y su pokemon, usaremos 3 mapeos.

1. Cree una `Trainer` estructura con una sola propiedad: `name`( `String[32]`).
2. Cree un mapeo, `trainerPokemonCount` con una clave de `address` tipo y un valor de `uint256` tipo.
3. Cree un mapeo, `trainerList`con una clave de `address` tipo y un valor de `Trainer` tipo.
4. Cree un mapeo anidado, `trainerToPokemon` con una clave de tipo `address` que se mapea a otro submapeo. El submapeo tiene una clave de tipo `uint256` y un valor de tipo `Pokemon`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.1-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.1-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.12-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
