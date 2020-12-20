<!-- Add translation for the following page: https://vyper.fun/#/1/function_declarations
Do NOT change the code below. The below code runs the code editor -->


# Chapter 6: Funktionsdeklarationen

In Vyper sieht eine Funktionsdeklaration wie folgt aus:

```vyper
@external
def exampleFunction(name: String[64], age: uint256):
    pass
```

Das Beispiel ist eine Funktion mit dem Namen `exampleFunction`, die 2 Parameter erhält: einen `String[64]` (`name`) und einen `uint256` (`age`)

Achtung! Mit dem Funktionsdekorator `@external` setzen wir die Sichtbarkeit der Funktion auf `external` fest.

Alle Funktionen müssen einen Sichtbarkeitsdekorator (`@external` oder `@internal`) enthalten. In zukünftigen Kapiteln werden wir mehr über Funktionsvisibilität und Dekoratoren lernen.

Mit der Anweisung `pass` kann man die Funktion als leer definieren. Bei der Ausführung passiert dann einfach nichts.

##  Stellen Sie sich auf die Probe

Unsere App wird Pokemons generieren müssen. Schreiben wir eine Funktion dafür!

1. Erstellen sie eine `external` Funktion mit dem Namen `createPokemon`. Sie soll 3 Parameter erhalten:

  - `name` (a `String[32]`)
  - `dna` (a `uint256`)
  - `HP` (a `uint256`)

2. Nutzen Sie das `pass` Keyword um einen leeren Funktionskörper zu lassen.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/1/1.6-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.6-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.5-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
