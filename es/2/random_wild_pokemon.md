<!-- Add translation for the following page: https://vyper.fun/#/2/random_wild_pokemon
Do NOT change the code below. The below code runs the code editor -->

# Capítulo 5: Crear un Pokemon Aleatorio Salvaje

En el capítulo anterior, iniciamos nuestro contrato con 20 nombres de pokemon. Ahora es el momento de luchar ⚔️

## Función con multiples valores de retorno

Una función puede tambien retornar multiples valores de retorno como el siguiente ejemplo:

    struct Student:
        name: String[32]
        age: uint256

    # un mapeo entre el número de roll y
    # detalles del estudiante
    studentList: HashMap[uint256, Student]

    @external
    def getPersonDetails(rollNumber: uint256) -> (String[32], uint256):
        student: Student = self.studentList[rollNumber]
        return student.name, student.age

## Poniendolo a prueba

1. Crea función `@external` llamada `battle` que tiene 1 parámetro de entrada: `pokemon` de tipo `Pokemon`. Este devuelve 4 parametros: `bool`, `String[32]`, `uint256`, `uint256`.

2. Dentro de la función `battle`, crear una variable `uint256` llamada `randomDNA`. Ahora llama a la función `_generarADN` aleatorio y asigna su salida `randomDNA`.

3. Dentro de la función de `battle`, crea una variable `String[32]` llamada `randomName`. Ahora para asignar un valor a `randomName`, tenemos que seleccionar un nombre aleatorio de `pokemonNames` pasando cualquier `uint256` de `0` a `19` como llave. Podemos generar un `uint256` aleatorio adecuado mediante la siguiente operación: `randomDNA` modulus `NAME_MODULUS`.

4. Dentro de la función de `battle`, crear una variable `uint256` `randomHP`. Establezca su valor igual al módulo `randomDNA` (`%`) `HP_LIMIT`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.5-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.5-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.4-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->