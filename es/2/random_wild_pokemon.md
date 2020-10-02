<!-- Add translation for the following page: https://vyper.fun/#/2/random_wild_pokemon
Do NOT change the code below. The below code runs the code editor -->

# Capítulo 5: Crea un Pokémon salvaje aleatorio

En el capítulo anterior, inicializamos nuestro contrato con 20 nombres de Pokémon. Ahora es el momento de luchar ⚔️

## Función con múltiples valores de retorno

Una función también puede devolver múltiples valores de retorno como el siguiente:

```vyper
struct Student:
    name: String[32]
    age: uint256

# a mapping between roll number and
# student details
studentList: HashMap[uint256, Student]

@external
def getPersonDetails(rollNumber: uint256) -> (String[32], uint256):
    student: Student = self.studentList[rollNumber]
    return student.name, student.age
```

## Ponlo a prueba

1. Cree una `@external` función nombrada `battle` que tenga 1 parámetro de entrada: `pokemon` de tipo `Pokemon`. Devuelve 4 parámetros: `bool`, `String[32]`, `uint256`, `uint256`.

2. Dentro de la `battle` función, cree una `uint256` variable llamada `randomDNA`. Ahora llame a la `_generateRandomDNA` función y asigne su salida a `randomDNA`.

3. Dentro de la `battle` función, cree una `String[32]` variable llamada `randomName`. Ahora, para asignar un valor a `randomName`, tenemos que seleccionar un nombre aleatorio pokemonNamespasando cualquiera `uint256` de 0a 19como clave. Podemos generar un aleatorio adecuado `uint256` mediante la siguiente operación: `randomDNA` módulo `NAME_MODULUS`.

4. Dentro de la `battle` función, crea una `uint256` variable `randomHP`. Establezca su valor igual a `randomDNA` módulo ( `%` ) `HP_LIMIT`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.5-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.5-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.4-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
