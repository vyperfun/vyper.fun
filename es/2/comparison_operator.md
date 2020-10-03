<!-- Add translation for the following page: https://vyper.fun/#/2/comparison_operator
Do NOT change the code below. The below code runs the code editor -->

# Capítulo 6: Operadores de Comparación y If-Else

En el capítulo anterior, creamos la función de `battle` que creó un pokemon aleatorio.

Necesitamos comparar el pokemon salvaje y el pokemon del entrenador para retornar el resultado de la batalla. Para ello necesitamos operadores de comparación

## Operadores de Comparación

Los diferentes tipos admiten diferentes operadores de comparación. Para nuestro caso de uso compararemos 2 `uint256`.

Aquí hay una lista de operadores de comparación soportados por el tipo `uint256`.

| Operador | Descripción         |
|----------|---------------------|
| x < y    | Menor que           |
| x <= y   | Menor que o igual a |
| x == y   | Es igual a          |
| x != y   | No es igual a       |
| x >= y   | Mayor que o igual a |
| x > y    | Mayor que           |

## Declaraciones If-Elif-Else

La declaración `if` es un flujo de control utilizado para la ejecución condicional:

    if CONDICIÓN:
        # hacer algo

La `CONDICIÓN` es un boolean o operación booleana. El boolean se evalúa de izquierda a derecha, una expresión a la vez, hasta que la condición es verdadera o falsa. Si es verdadera, la lógica en el cuerpo de la expresión if se ejecuta.

Obsérvese que, a diferencia de Python, Vyper no permite la conversión implícita de tipos no-booleanos dentro de la condición de una sentencia if. `if 1: pass` fallará en la compilación con una falta de coincidencia de tipos.

También se pueden incluir declaraciones `elif` y `else`, para añadir más declaraciones condicionales y un cuerpo que se ejecuta cuando las condicionales son falsas:

    if CONDICIÓN:
        # hace algo 1
    elif OTRA_CONDICIÓN:
        # hace algo 2
    else:
        # hace algo 3

## Poniendolo a prueba

Compararemos el `HP` de los pokemons para decidir el ganador. Si el entrenador pokemon gana, el entrenador obtiene el nuevo pokemon.

1. Dentro de la función `battle`, incrementa el estado de la variable `battleCount` en 1.

2. Crear una declaración `if` que compare el HP del parámetro del entrenador `pokemon` y el `randomHP` del pokemon salvaje. Si el HP del entrenador `pokemon` es mayor que el `randomHP`, entonces el entrenador `pokemon` gana.

3. En el cuerpo de la declaración de if, retornar los siguientes argumentos:

   * Resultado de Batalla: `True`
   * Nombre de Pokemon Salvaje: `randomName`
   * DNA de Pokemon Salvaje: `randomDNA`
   * HP de Pokemon Salvaje: `randomHP`

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.6-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.6-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.5-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
