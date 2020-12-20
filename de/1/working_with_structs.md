<!-- Add translation for the following page: https://vyper.fun/#/1/working_with_structs
Do NOT change the code below. The below code runs the code editor -->

# Chapter 7: Arbeit mit Structs und Mappings

Erinnern Sie sich an unser `Person` struct im vorigen Beispiel?

```vyper
struct Person:
    age: uint256
    name: String[64]

people: HashMap[uint256, Person]
```

Jetzt ist es Zeit zu lernen, wie man neue `Personen` generiert und sie unserem `people` Mapping hinzufügt.

```vyper
// neue Person generieren:
Person vasa = Person({ name: "vasa", age: 22 })

// Diese Person dem Mapping unter dem Key `0` hinzufügen:
self.people[0] = vasa
```

Wir können diese Schritte auch in eine einzige Zeile zusammenfassen um es übersichtlicher zu halten:

```vyper
self.people[0] = Person({ name: "vasa", age: 22 })
```

## Die `self` Variable

Um die Zustandsvariable `people` aufzurufen nutzten wir das `self` Keyword.

`self` ist eine Umgebungsvariable die benutzt wird, um sich auf den Contract selbst zu beziehen. `self` ermöglicht es **Zustandsvariablen zu lesen und zu schreiben,** und **private (interne) Funktionen im Contract aufzurufen**. Wir werden im nächsten Chapter mehr über externe/interne Funktionen lernen.

`self` wird benutzt, um auf die Zustandsvariablen eines Contracts zu greifen, wir zum Beispiel:

```vyper
message: String[10]

@external
def setMessage(msg: String[10]):
    self.message = msg
```

`self` wird auch benutzt, um interne Funktionen im Contract aufzurufen:

```vyper
@internal
def multiplyByTwo(amount: uint256):
    amount * 2

@external
def calculate(amount: uint256):
    self.multiplyByTwo(amount)
```

## Stellen Sie sich auf die Probe

Sehen wir jetzt zu, dass unsere `createPokemon` Funktion auch etwas macht!

1. Entfernen sie das `pass` Keyword. Füllen sie die Funktion so aus, dass sie ein neues `Pokemon` generiert, und es zur `pokemonList` hinzufügt. Nutzen Sie folgende Werte für das neue `Pokemon`:

   - `name`: name (aus den Funktionsargumenten),
   - `dna`: dna (aus den Funktionsargumenten),
   - `HP`: HP (aus den Funktionsargumenten),
   - `matches`: 0,
   - `wins`: 0

2. Vergessen Sie nicht, die `self` Umgebungsvariable zu nutzen, um auf die `pokemonList` zuzugreifen.

3. Machen Sie alles in einer Zeile Code, damit es übersichtlich bleibt.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/1/1.7-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.7-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.6-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
