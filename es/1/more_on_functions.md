<!-- Add translation for the following page: https://vyper.fun/#/1/more_on_functions
Do NOT change the code below. The below code runs the code editor -->

# Capítulo 10: Más sobre funciones

In this chapter, we're going to learn about function `return` values, and optional function decorators.
En este capítulo, aprenderemos sobre los valores de retorno de las funciónes (`return`) y los decoradores de función opcionales.

## Devolver valores

Para devolver un valor desde una función, la declaración tiene este aspecto:

```vyper
nameToAge: HashMap[String[64], uint256]

@external
def getAge(name: String[64]) -> uint256:
    return self.nameToAge[name]
```

La función `getAge` de arriba devuelve un `uint256` que se representa con el símbolo `->` seguido del tipo de retorno, en este caso `uint256`.

## Decoradores de funciones

En un capítulo anterior, exploramos 2 de los decoradores de función: `@internal` y `@external`.

Hay algunos decoradores de función _opcionales_ más:

| Decorador                     | Descripción                                                                         |
| ----------------------------- | ----------------------------------------------------------------------------------- |
| `@pure`                       | La función no lee el estado del contrato o las variables del entorno                |
| `@view`                       | La función no altera el estado del contrato, pero puede leer el estado del contrato |
| `@payable`                    | La función es capaz de recibir Ether                                                |
| `@nonreentrant(<unique_key>)` | La función solo puede ser llamada una vez durante una llamada externa               |

Siguiendo el ejemplo anterior, podemos añadir el decorador `@view` en la función `getAge` ya que lee el estado del contrato (variable de almacenamiento) pero no lo altera.

```vyper
nameToAge: HashMap[String[64], uint256]

@view
@external
def getAge(name: String[64]) -> uint256:
    return self.nameToAge[name]
```

## Ponlo a prueba

Queremos crear una función `internal` que no lea o altere el estado del contrato o las variables de entorno (es decir, una función `pure`) que devuelva un `uint256`.

1. Crear una función llamada `_generateRandomDNA` con decoradores de función interna y pura.
2. La función debe aceptar un parametro de entrada: `_name` de tipo `String[32]`.
3. La función debe devolver un elemento de tipo `uint256`.
4. Usa la palabra clave `pass` para dejar el cuerpo de la función sin definír.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.10-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.10-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.9-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
