<!-- Add translation for the following page: https://vyper.fun/#/1/external_internal_functions
Do NOT change the code below. The below code runs the code editor -->

<!-- tabs:start -->

# Capítulo 8: Funciones Externas / Internas
Como discutimos en el capítulo anterior, todas las funciones deben incluir un decorador de visibilidad (`@external` o `@internal`).

| Decorador   | Descripcion                                                  |
| ----------- | ------------------------------------------------------------ |
| `@external` | La función sólo puede ser llamada externamente               |
| `@internal` | La función sólo puede ser llamada dentro del contrato actual |

Quisiéramos crear algunas funciones que no deberían poder ser llamadas externamente. Para tales funciones utilizaremos el decorador de visibilidad `@internal`.

Veamos cómo declarar una función interna:

```vyper
peopleToAge: HashMap[String[64], uint256]

@internal
def _addPerson(_name: String[64], _age: uint256):
    self.peopleToAge[_name] = [_age]
```

Esto significa que sólo otras funciones dentro de nuestro contrato podrán llamar a la función `_addPerson` y añadirla al mapping `peopleToAge`.

Observa el guión bajo (`_`) al comienzo del nombre de la función y los parámetros. Es una convención de nombres añadir un guión bajo (`_`) delante del nombre de una función interna y su(s) parámetro(s).

## Ponlo a prueba

La función `createPokemon` de nuestro contrato es externa actualmente — esto significa que cualquiera podría llamarla y crear un nuevo Pokemon en nuestro contrato! Hagámoslo interna.

1. Modifica `createPokemon` para que sea una función interna. ¡No olvides la convención de nombres!

#### ** Template **

[embedded-code](../assets/1/1.8-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.8-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.7-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
