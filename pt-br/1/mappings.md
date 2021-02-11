<!-- Add translation for the following page: https://vyper.fun/#/1/mappings
Do NOT change the code below. The below code runs the code editor -->

<!-- tabs:start -->

# Capítulo 5: Mappings

Nos capítulos anteriores, aprendemos sobre structs. Os mapeamentos são outra forma de armazenar informações no Vyper.

Os mapeamentos são [tabelas de hash] (https://es.wikipedia.org/wiki/Tabla_hash) que são virtualmente inicializados para que todas as chaves possíveis existam e sejam mapeadas para um valor padrão.

A definição de um mapeamento é assim:

vyper
# um mapeamento para armazenar o número na linha e os nomes dos alunos
exampleMapping1: HashMap [uint256, String [64]]

# um mapeamento para armazenar nomes de usuário e seus respectivos números de seguidores
exampleMapping2: HashMap [String [32], uint256]

Um mapeamento é essencialmente um armazenamento de valor-chave para armazenar e pesquisar dados. No primeiro mapeamento denominado ʻexampleMapping1`, as chaves são do tipo ʻuint256` e os valores são do tipo `String [64]`, enquanto no segundo mapeamento, denominado ʻexampleMapping2`, as chaves são `String [32] ʻE os valores são ʻuint256`.

## Testando Conhecimento

Para armazenar nossos Pokemos, precisaremos de um mapeamento que relacione um número de série a um Pokémon.

1. Crie um mapeamento chamado `pokemonList` com chaves do tipo ʻuint256` e valores do tipo` Pokémon`.

#### ** Template **

[embedded-code](../../assets/1/1.5-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.5-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.4-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
