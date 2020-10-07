<!-- Add translation for the following page: https://vyper.fun/#/1/external_internal_functions
Do NOT change the code below. The below code runs the code editor -->
# Chapitre 8: Fonctions Interne / Externe

Comme nous avons vu dans le dernier chapitre, toutes les fonctions doivent inclure un décorateur de visibilité (`@external` ou `@internal`).

| Décorateur  | Description                                               |
| ----------- | --------------------------------------------------------- |
| `@external` | Fonction qui peut être appelée qu'à l'extérieur           |
| `@internal` | Fonction qui peut être appelée que dans le contrat actuel |

Nous voudrions créer certaines fonctions qui ne devraient pas être appelées extérieurement. Pour ces fonctions, nous utiliserions le décorateur de visibilité `@internal`.

Voyons comment déclarer une fonction interne :

```vyper
peopleToAge: HashMap[String[64], uint256]

@internal
def _addPerson(_name: String[64], _age: uint256):
    self.peopleToAge[_name] = [_age]
```

Ceci signifie que seules les fonctions qui sont dans notre contrat actuel pourront appeler la fonction `_addPerson` et l'ajouter au mappage `peopleToAge`.

Notez que le tiret bas (`_`) au début du nom de la fonction et des paramètres. Il s'agit d'une convention de dénomination d'ajouter un tiret bas (`_`) devant le nom d'une fonction interne et leurs paramètres.

## Faisons le test

Notre fonction `createPokemon` dans notre contrat est actuellement externe — ça signifie que tout le monde peut l'appeler et créer un nouveau Pokémon dans notre contrat! rendons la interne.

1. Modifiez `createPokemon` pour qu'elle devienne une fonction interne. N'oubliez pas la convention de dénomination!

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.8-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.8-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.7-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
