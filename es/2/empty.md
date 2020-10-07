<!-- Add translation for the following page: https://vyper.fun/#/2/empty
Do NOT change the code below. The below code runs the code editor -->

# Capítulo 7: Función Empty

En el capítulo anterior, se definió la lógica de una batalla pokemon y se retornaron los detalles del pokemon salvaje si el entrenador pokemon gana.

¿Pero qué pasa si el entrenador pokemon pierde? En tal caso necesitamos retornar algunos valores vacíos.

## empty(typename) → Any

`empty` es una función integrada en Vyper que devuelve un valor por defecto del mismo tipo(`typename`) que haya sido pasado como parámetro.

Es útil para inicializar nuevas variables de memoria.

    @external
    def someFunction():
      name: String[32] = empty(String[32])

Aquí puedes encontrar una lista de todos los tipos y valores predeterminados:

| Tipo    | Valor por defecto                                                  |
| ------- | ------------------------------------------------------------------ |
| address | 0x0000000000000000000000000000000000000000                         |
| bool    | False                                                              |
| bytes32 | 0x0000000000000000000000000000000000000000000000000000000000000000 |
| decimal | 0.0                                                                |
| int128  | 1                                                                  |
| uint256 | 1                                                                  |

## Ponlo a prueba

Usaremos la función `empty` para retornar los valores por defecto en caso de que el entrenador pokemon pierda.

1. Crea una declaración `else` que devuelva los siguientes valores:

   - Resultado de la Batalla: `False`
   - Nombre del pokemon salvaje: `empty(String[32])`
   - DNA del pokemon salvaje: `empty(uint256)`
   - HP del pokemon salvaje: `empty(uint256)`

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/2/2.7-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/2/2.7-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/2/2.6-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
