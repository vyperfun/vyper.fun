<!-- Add translation for the following page: https://vyper.fun/#/1/contract_structure
Do NOT change the code below. The below code runs the code editor -->

# Capítulo 1: Contratos

Começando com o básico absoluto:

Um contrato é o bloco de construção fundamental das aplicações Ethereum - todas as variáveis ​​e funções pertencem a um contrato e este será o ponto de partida de todos os seus projetos.

Os contratos Vyper estão contidos em arquivos. Cada arquivo contém exatamente 
um contrato.

## Versão Pragma

Vyper suporta um pragma de versão para garantir que um contrato seja apenas
compilado pela versão pretendida do compilador ou intervalo de versões. Versão
strings usam sintaxe de estilo [NPM] (https://docs.npmjs.com/misc/semver).

Para o escopo deste tutorial, queremos compilar nossos contratos inteligentes com qualquer versão do compilador no intervalo de `0.2.0` (inclusive) a` 0.3.0` (exclusivo). Se parece com isso:

```vyper
# @version >=0.2.0 <0.3.0
```

## Coloca-lo a prova

1. Na caixa à direita, vamos criar um contrato que pode ser compilado por qualquer versão do compilador no intervalo de `0.2.4` (inclusive) a` 0.3.0` (exclusivo).

2. Quando terminar, você pode alternar da guia `🛠 Seu código` para a guia` ✅ Solução` para verificar se a sua resposta corresponde à solução ** (as guias estão no canto inferior direito da tela) **.

3. Verifique a diferença entre `🛠 Your code` e` ✅ Solution` na guia `𝌡 Difference`.

4. Se você tiver alguma dúvida, clique em ʻOpen Chat` e pergunte no chat 😊

Parabéns 🎉

Você acabou de completar o Capítulo 1. Tweet sobre isso para compartilhar seu feito incrível!

[![Tweet](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fvyper.fun%2F%23%2F1%2Fcontract_structure)](https://twitter.com/intent/tweet?hashtags=VyperFun&ref_src=twsrc%5Etfw&text=I%20just%20completed%20Chapter%201%20of%20%40VyperFun%3A%20Create%20your%20Pok%C3%A9mon%20on%20blockchain%20using%20%40vyperlang%20%F0%9F%98%8E%20&tw_p=tweetbutton&url=https%3A%2F%2Fvyper.fun%2F%23%2F1%2Fcontract_structure)

<!-- tabs:start -->

#### ** Modelo **

[embedded-code](../assets/1/1.1-template-code.vy ':include :type=code embed-template')

#### ** Solução **

[embedded-code-final](../assets/1/1.1-finished-code.vy ':include :type=code embed-final')

#### ** Solução do capítulo anterior **

[embedded-code-previous](../assets/1/1.0-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
