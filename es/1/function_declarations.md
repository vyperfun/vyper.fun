<!-- Add translation for the following page: https://vyper.fun/#/1/function_declarations
Do NOT change the code below. The below code runs the code editor -->

# Capítulo 6: Declaración de funciones

La declaración de una función en Vyper tiene el siguiente aspecto:

```vyper
@external
def exampleFunction(name: String[64], age: uint256):
    pass
```

Esta es una función llamada `exampleFunction` que toma 2 parámetros: un `String[64]` (`name`) y un `uint256` (`age`).

Notar que estamos especificando la visibilidad de la función como externa usando el decorador de funciones `@external`.

Todas las funciones deben incluir un decorador de visibilidad (`@external` or `@internal`). Aprenderemos más sobre la visibilidad de las funciones y los decoradores en los próximos capítulos.

Puedes definir un cuerpo de función vacío usando la palabra clave `pass`. Cuando se ejecuta, no pasa nada.

## Ponlo a prueba

En nuestra app, necesitaremos crear algunos Pokemons. Vamos a crear una función para eso.

1. Crea una funcion `external` llamada `createPokemon`. Debería tomar tres parámetros:

- `name` (a `String[32]`)
- `dna` (a `uint256`)
- `HP` (a `uint256`)

2. Usa la palabra clave `pass` para definir una función con un cuerpo vacío.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/1/1.6-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.6-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.5-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
