<!-- Add translation for the following page: https://vyper.fun/#/1/structs
Do NOT change the code below. The below code runs the code editor -->

# Capítulo 4: Structs

Às vezes, precisamos de estruturas de dados mais complexas. Para isso, Vyper fornece as `structs`:

```vyper
struct Person:
    age: uint256
    name: String[64]
```

As estruturas nos permitem criar tipos de dados mais complexos, capazes de conter várias propriedades.

> Observe também que acabamos de introduzir um novo tipo de dados, String. De tamanho fixo, as Strings podem conter strings de caracteres iguais ou menores que o comprimento máximo da string.

>
> ```vyper
> testString: String[100] = "Hello World!"
> ```
>

Outra coisa a observar é que ** Vyper (como Python) usa indentação para diferenciar blocos de código **. O espaço em branco é usado para indentação em Python. Todas as instruções com a mesma distância para a direita pertencem ao mesmo bloco de código. Se um bloco precisa ser aninhado mais profundamente, ele é simplesmente recuado mais para a direita.

Tomando a estrutura `Person` acima como exemplo, ʻage` e` name` são indentados com a mesma distância para a direita. Portanto, ambos pertencem ao mesmo bloco de código.

## Testando conhecimento

Em nosso aplicativo, vamos criar Pokemos! E os Pokémons terão várias propriedades, então este é um caso de uso perfeito para uma estrutura.

1. Crie um `struct` chamado` Pokémon`.

2. A estrutura de nossos Pokémons conterá cinco propriedades:
    - `nome` (` String [32] `)
    - `dna` (ʻuint256`)
    - `HP` (ʻuint256`)
    - `corresponde` (ʻuint256`)
    - `wins` (ʻuint256`)

#### ** Template **

[embedded-code](../../assets/1/1.4-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.4-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.3-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
