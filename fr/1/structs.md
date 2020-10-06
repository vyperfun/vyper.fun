<!-- Add translation for the following page: https://vyper.fun/#/1/structs
Do NOT change the code below. The below code runs the code editor -->
# Chapitre 4: Structures


Parfois, nous avons besoin d'un type de donnée plus complexe. Pour ça, Vyper fournit `structs`:

```vyper
struct Person:
    age: uint256
    name: String[64]
```

Les structures nous permettent de créer des types de données plus complexes qui ont de multiples propriétés.

> Notez que nous venons d'introduire un nouveau type, le String. Les chaînes de caractères ont une taille fixe qui peut contenir des chaînes de caractères dont la longueur est égale ou inférieure à la longueur maximale de notre chaîne.
>
> ```vyper
> testString: String[100] = "Hello World!"
> ```
>
> La chaîne `testString` peut contenir 100 caractères. Nous n'en avons utilisé que 12 pour `"Hello World!"`

Une autre chose a noté c'est que **Vyper (comme Python) utilise de l'indentation pour mettre en évidence les blocs de code**. Les espaces blancs sont utilisés pour indenter dans python. Toutes les déclarations ayant la même distance vers la droite font partie du même bloc. Si un bloc doit être imbriqué plus profondément, il faut simplement mis en retrait plus à droite.

Prenons la structure `Person` comme exemple, `age` et `name` sont indentés à la même distance vers la droite. Ils appartiennent donc au même bloc de code.

## Faisons le test

Dans notre application, nous allons créer quelques pokémon! Et les Pokémon auront plusieurs propriétés, donc c'est un cas d'utilisation parfaite pour une structure.

1. Creer une `struct` nommé `Pokemon`.

2. La structure de notre Pokémon doit avoir 5 propriété:
   - `name` (`String[32]`)
   - `dna` (`uint256`)
   - `HP` (`uint256`)
   - `matches` (`uint256`)
   - `wins` (`uint256`)

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.4-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.4-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.3-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
