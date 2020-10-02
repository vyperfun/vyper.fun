<!-- Add translation for the following page: https://vyper.fun/#/1/public_vars
Do NOT change the code below. The below code runs the code editor -->

# Capítulo 9: Variables públicas

Las variables de almacenamiento pueden marcarse como `public` durante la declaración:

```vyper
publicName: public(String[64])
```

El compilador automáticamente crea funciones getter para todas las variables de almacenamiento `public`. Estas funciones getter NO están escritas en tu código, sino que son generadas por el compilador cuando el código es compilado.

Para el ejemplo anterior, el compilador generará una función llamada `publicName` que no toma ningún argumento y devuelve una `String[64]`, el valor de la variable de estado `publicName`. Así que, incluso si no puedes ver ninguna función llamada `publicName`, será generada cuando tu código sea compilado.

## Ponlo a prueba

Necesitamos una variable de almacenamiento público para dar seguimiento al número de pokemons creados en el contrato.

1. Crea una variable de almacenamiento `public` llamada `totalPokemonCount` de tipo `uint256`.
2. Reemplaza la clave `0` en el mapping `pokemonList` de la función `_createPokemon` con
   la variable de almacenamiento `totalPokemonCount`. Recuerda usar la variable de entorno `self` para acceder a la variable de almacenamiento de la función.
3. En la función `_createPokemon`, incrementa `totalPokemonCount` en 1 usando la variable de entorno `self`. Para que el código se vea limpio usa el operador aritmético `+=` como se muestra a continuación:

   ```vyper
   # suma uno a la variable pasada como parámetro
   @external
   def addOne(number: uint256):
      # usamos += para incrementar number en 1
      number += 1
   ```

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.9-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.9-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.8-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
