<!-- Add translation for the following page: https://vyper.fun/#/1/structs
Do NOT change the code below. The below code runs the code editor -->

# Capítulo 4: Structs

Algunas veces, necesitamos estrucutras de datos mas complejas. Para ello, Vyper provee los `structs`:

```vyper
struct Person:
    age: uint256
    name: String[64]
```

Los structs nos permiten crear tipos de datos mas complejos, capaces de contener multiples propiedades.

> Notar también que acabamos de introducir un nuevo tipo de dato, los String. De tamaño fijo, los Strings pueden contener cadena de caracteres de igual o menor cantidad de caracteres que el largo máximo de la cadena.
>
> ```vyper
> testString: String[100] = "Hello World!"
> ```
>
> El `testString` anterior puede contener hasta 100 caracteres. Nosotros sólo hemos usado 12 caracteres asignando `"Hello World!"`

Otra cosa a tener en cuenta es que **Vyper (como Python) usa la indentación para diferenciar los bloques de código**. El espacio en blanco se utiliza para la indentación en Python. Todas las sentencias con la misma distancia a la derecha pertenecen al mismo bloque de código. Si un bloque tiene que ser anidado más profundamente, simplemente se identa más hacia la derecha.

Tomando el struct `Person` anterior como ejemplo, `age` y `name` estan identados con la misma distancia hacia la derecha. Por lo tanto, ambos pertenecen al mismo bloque de codigo.

## Ponlo a prueba

En nuestra app, vamos a crear Pokemos! Y los Pokemons van a tener múltiples propiedades, por lo tanto éste es un caso de uso perfecto para un struct.

1. Crea un `struct` llamado `Pokemon`.

2. El struct de nuestros Pokemons contendrá cinco propiedades:
   - `name` (`String[32]`)
   - `dna` (`uint256`)
   - `HP` (`uint256`)
   - `matches` (`uint256`)
   - `wins` (`uint256`)


#### ** Template **

[embedded-code](../assets/1/1.4-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.4-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.3-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
