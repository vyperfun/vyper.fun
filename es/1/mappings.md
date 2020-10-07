<!-- Add translation for the following page: https://vyper.fun/#/1/mappings
Do NOT change the code below. The below code runs the code editor -->

# Capítulo 5: Mappings

En el capítulos anteriores aprendimos sobre structs. Los mappings son otra forma de almacenar información en Vyper.

Los mappings son [tablas de hash](https://es.wikipedia.org/wiki/Tabla_hash) que son virtualmente inicializadas de manera que cada posible clave existe y está mapeada a un valor por defecto.

La definición de un mapping se ve así:

```vyper
# un mapping para almacenar el número en la fila y los nombres de los estudiantes
exampleMapping1: HashMap[uint256, String[64]]

# un mapping para almacenar nombres de usuarios y su respectiva cantidad de seguidores
exampleMapping2: HashMap[String[32], uint256]
```

Un mapping es esencialmente un almacén de clave-valor para almacenar y buscar datos. En el primer mapping llamado `exampleMapping1`, las claves son del tipo `uint256` y los valores son del tipo `String[64]`, mientras que en el segundo mapping, llamado `exampleMapping2`, la claves son `String[32]` y los valores son `uint256`.

## Ponlo a prueba

Para almacenar nuestros Pokemos, vamos a necesitar un mapping que relacione un número de serie con un Pokemon.

1. Crea un mapping llamado `pokemonList` con claves de tipo `uint256` y valores de tipo `Pokemon`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/1/1.5-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.5-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.4-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
