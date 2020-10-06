<!-- Add translation for the following page: https://vyper.fun/#/1/putting_it_together
Do NOT change the code below. The below code runs the code editor -->

# Capitulo 12: Poniéndolo junto
 
¡Estamos cercas de terminar con nuestro generador aleatorio de Pokemon! Vamos a hacer unos cuantos cambios a la declaración para crear un Pokemon aleatorio.

## Ponlo en la prueba

1. El HP máximo de cualquier Pokemon debe ser menor de 1000. Define una constante nombrada `HP_LIMIT` igual a 1000.

2. Remueve los argumentos `_dna` y `_HP` de la función declarada `_createPokemon`.

3. Dentro de `_createPokemon`. Llama la función `_generateRandomDNA` usando la variable `self` y pasa el argumento `_name`. Asignale el resultado igual a `RandomDNA`.

4. Dentro de `_createPokemon`, crea una variable `uint256` llamada `randomHP`. Asignale el resultado igual a `randomDNA` modulo (`%`) `HP_LIMIT`.

5. Dentro de `_createPokemon`, crea una variable `newPokemon` de tipo `Pokemon`. Usa el argumento `_name`, `randomDNA`, `randomHP` para definir el `newPokemon`.

6. Dentro de `_createPokemon`, llenar `pokemonList` usando la llave `totalPokemonCount` y el valor como `newPokemon`. Recuera usar la variable `self` para acceder a las variables almacenadas.

7. Modifica la función `_createPokemon` así retornara un `Pokemon`.

8. Al final de la función `_createPokemon`, retorna `newPokemon`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.12-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.12-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.11-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
