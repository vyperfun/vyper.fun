<!-- Add translation for the following page: https://vyper.fun/#/1/working_with_structs
Do NOT change the code below. The below code runs the code editor -->
# Chapitre 7: Travailler avec les Structures et les Mappages.

Vous souvenez vous de la structure `Person` de l'exemple précédent ? 
```vyper
struct Person:
    age: uint256
    name: String[64]

people: HashMap[uint256, Person]
```

Maintenant nous allons apprendre comment créer un nouveau `Persons` et l'ajouter au mappage `people`.

```vyper
// create a New Person:
Person vasa = Person({ name: "vasa", age: 22 })

// Add that person to the mapping with key `0`:
self.people[0] = vasa
```

Nous pouvons aussi les combiner ensemble et les faire en une seule ligne de code pour garder les choses propres :

```vyper
self.people[0] = Person({ name: "vasa", age: 22 })
```

## La variable `self`

Notez que nous avons utilisé le mot-clé `self` pour accéder à la variable (d'état) `people`.

La variable `self` est une variable d'environnement utilisé pour référencer un contrat de l'intérieur. `self` nous permet de **lire et écrire une variable d'état** et **appeler la fonction privée (interne) de notre contrat**. Nous allons apprendre les fonctions externes/internes dans le chapitre suivant.

`self` est utilisé pour accéder les variables d'état d'un contrat, comme dans l'exemple suivant :  

```vyper
message: String[10]

@external
def setMessage(msg: String[10]):
    self.message = msg
```

`self` est aussi utilisé pour appeler une fonction interne dans un contrat.

```vyper
@internal
def multiplyByTwo(amount: uint256):
    amount * 2

@external
def calculate(amount: uint256):
    self.multiplyByTwo(amount)
```

## Faisons le test

Faisons en sorte que notre fonction `createPokemon` fasse quelque chose !

1. Supprime le mot-clé `pass`. Remplis le corps de la fonction pour qu'elle crée un nouveau `Pokemon`, et l'ajoute au mappage `pokemonList`. Utilisez les valeurs suivantes pour notre nouveau `Pokemon`.

   - `name`: nom (depuis les arguments de la fonction),
   - `dna`: ADN (depuis les arguments de la fonction),
   - `HP`: PV (depuis les arguments de la fonction),
   - `matches`: 0,
   - `wins`: 0

2. Ne pas oublier d'utiliser la variable d'environnement `self` pour accéder au mappage `pokemonList`.

3. Faisons le en une seule ligne de code pour garder les choses propres.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.7-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.7-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.6-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
