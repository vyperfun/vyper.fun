<!-- Add translation for the following page: https://vyper.fun/#/1/contract_structure
Do NOT change the code below. The below code runs the code editor -->

# Capítulo 1: Contratos

Empezando por lo más básico:

Todas las variables y funciones pertenecen a un contrato, y este será el punto de partida de todos tus proyectos.

Los contratos de Vyper están contenidos en archivos. Cada archivo contiene exactamente un contrato.

# Version Pragma

Vyper soporta el comando de versionado Pragma para asegurar que un contrato sólo se compila con la versión del compilador previsto, o rango de versiones. El texto de la versión utilizan una sintaxis de estilo NPM.

Para el alcance de este tutorial, queremos compilar nuestros contratos inteligentes con cualquier versión del compilador en el rango de 0.2.0 (incluida) a 0.3.0 (exclusiva). Así es como se ve:

```vyper
# @versión >=0.2.0 <0.3.0
```

# Ponlo a prueba

En el recuadro de la derecha, vamos a crear un contrato que puede ser compilado por cualquier versión del compilador en el rango de 0.2.4 (incluido) a 0.3.0 (exclusivo).

Cuando hayas terminado, puedes cambiar de la pestaña `🛠 Tu codigo` a la pestaña `✅ Solución` para comprobar si tu respuesta coincide con la solución **(las pestañas están en la parte inferior derecha de la pantalla)**.

Comprueba la diferencia entre `🛠 Tu codigo` y `✅ Solución` en la pestaña `𝌡 Diferencia`.

Si tienes alguna pregunta, haz clic en `Abrir chat` y pregunta en el chat 😊

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.1-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.1-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.0-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
