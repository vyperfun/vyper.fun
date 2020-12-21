<!-- Add translation for the following page: https://vyper.fun/#/1/function_declarations
Do NOT change the code below. The below code runs the code editor -->

<!-- tabs:start -->

# Capítulo 6: Declaração de funções

A declaração de uma função em Vyper se parece com isto:

```vyper
@external
def exampleFunction(name: String[64], age: uint256):
    pass
```
Esta é uma função chamada ʻexampleFunction` que leva 2 parâmetros: uma `String [64]` (`nome`) e uma ʻuint256` (ʻage`).

Observe que estamos especificando a visibilidade da função como externa usando o decorador de função `@ external`.

Todas as funções devem incluir um decorador de visibilidade (`@ external` ou` @ internal`). Aprenderemos mais sobre a visibilidade de recursos e decoradores nos próximos capítulos.

Você pode definir um corpo de função vazio usando a palavra-chave `pass`. Quando é executado, nada acontece.

## Testando o conhecimento

Em nosso aplicativo, precisaremos criar alguns Pokémons. Vamos criar uma função para isso.

1. Crie uma função ʻexternal` chamada `createPokemon`. Deve ter três parâmetros:

- `nome` (para` String [32]`)
- `dna` (para ʻuint256`)
- `HP` (para ʻuint256`)

2. Use a palavra-chave `pass` para definir uma função com um corpo vazio.


#### ** Template **

[embedded-code](../../assets/1/1.6-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.6-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.5-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
