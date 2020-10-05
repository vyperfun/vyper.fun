<!-- Add translation for the following page: https://vyper.fun/#/1/state_vars_and_ints
Do NOT change the code below. The below code runs the code editor -->

# Chapitre 2 : Variables d'état, entiers et constantes

Bon travail! Maintenant que nous avons un shell pour notre contrat, apprenons comment Vyper traite les variables.

Les variables d'état sont stockées de façon permanente dans le stockage des contrats. Cela signifie qu'elles sont écrites dans la chaîne de bloc Ethereum. Imaginez-les comme si elles étaient écrites dans une base de données.

### Exemple

```vyper
# @version >=0.2.4 <0.3.0

# Ceci sera stocké de manière permanente dans la chaîne de blocs
storedData: int128
```

Dans cet exemple de contrat, nous avons créé un [`int128`](https://vyper.readthedocs.io/en/stable/types.html#signed-integer-128-bit) appelé `storedData` qui contient une valeur par _défaut_ de `1`.

## Entiers non signés : `uint256`.

Le type de données `uint256` est un entier non signé (256 bits), ce qui signifie que sa valeur doit être non négative.

Il existe également un type de données `int128` (128 bits) pour les entiers signés (un type pour stocker les entiers positifs et négatifs).

### Exemple

```vyper
# @version >=0.2.4 <0.3.0

# Cela crée une constante uint256 avec une valeur de 10
TEN: constant(uint256) = 10
```

Dans cet exemple de contrat, nous avons créé une "constante", "uint256", appelée "TEN" et l'avons fixée à "10".

## Mettez-le à l'épreuve

Notre ADN de Pokémon va être déterminé par un nombre à 16 chiffres.

Dans la zone de codage sur le côté droit, déclarez une constante `uint256` nommée `DNA_DIGITS`, et mettez la à 16.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.2-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.2-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.1-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
