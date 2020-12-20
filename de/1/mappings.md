<!-- Add translation for the following page: https://vyper.fun/#/1/mappings
Do NOT change the code below. The below code runs the code editor -->

# Chapter 5: Mappings

Im vorigen Chapter haben wir uns mit Strukturen beschäftigt. Mappings sind eine andere Art, in Vyper organisierte Daten zu speichern.

Mappings sind [Hashtabellen](https://de.wikipedia.org/wiki/Hashtabelle) die virtuell initialisiert sind, so dass jeder mögliche Key schon existiert und auf einen Defaultwert zeigt.

Ein Mapping wird auf folgende Art erstellt:

```vyper
# ein Mapping um Matrikelnummern und Namen von Studenten zu speichern
exampleMapping1: HashMap[uint256, String[64]]

# ein Mapping um Usernames und Followeranzahl zu speichern
exampleMapping2: HashMap[String[32], uint256]
```

Ein Mapping dient um Werte unter einem bestimmten Key zu speichern und wieder aufzurufen. Im ersten Mapping `exampleMapping1` ist der Key ein `uint256` und der Wert ein `String[64]`. Im zweiten Mapping, `exampleMapping2`, ist der Key ein `String[32]` und der Wert ein `uint256`.

## Stellen Sie sich auf die Probe


Um unsere Pokemons zu speichern werden wir ein Mapping brauchen, dass unsere Pokemons mit einer Seriennummer verbindet.

1. Erstellen Sie ein Mapping mit dem Namen `pokemonList`, mit einem `uint256` Key und einem Wert vom Typ ´Pokemon´

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/1/1.5-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.5-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.4-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
