<!-- Add translation for the following page: https://vyper.fun/#/1/more_on_functions
Do NOT change the code below. The below code runs the code editor -->


# Chapter 10: Mehr über Funktionen


In diesem Kapitel werden wir mehr über die `return`-Werte einer Funktion und über optionale Funktionsdekoratoren lernen.

## Return-Werte

So gibt eine Funktion nach Ihrer Durchführung einen Wert zurück:

```vyper
nameToAge: HashMap[String[64], uint256]

@external
def getAge(name: String[64]) -> uint256:
    return self.nameToAge[name]
```

Die Funktion `getAge` gibt einen `uint256` zurück. Dieses wird durch das Symbol `->` festgelegt, gefolgt vom gewünschten Datentyp (`int256`).

## Funktionsdekoratoren

Im vorigen Kapitel haben wir 2 der möglichen Funktionsdekoratoren kennengelernt: `@internal` und `@external`.

Es gibt mehrere andere _freiwillige_ Funktionsdekoratoren:

| Dekorator                     | Beschreibung                                                                 |
| ----------------------------- | ---------------------------------------------------------------------------- |
| `@pure`                       | Die Funktion liest keine Zustands- oder Umgebungsvariablen des Contracts     |
| `@view`                       | Die Funktion verändert nicht den Contractzustand, kann ihn aber lesen        |
| `@payable`                    | Die Funktion kann Ether empfangen                                            |
| `@nonreentrant(<unique_key>)` | Die Funktion kann innerhalb eines externen Aufrufes nicht Rückgerufen werden |

Wir können also der Funktion `getAge` den Dekorator `@view` hinzufügen, da sie den Zustand des Contracts liest (den Speicherplatz), ihn aber nicht verändert.

```vyper
nameToAge: HashMap[String[64], uint256]

@view
@external
def getAge(name: String[64]) -> uint256:
    return self.nameToAge[name]
```

## Stellen Sie sich auf die Probe

Wir wollen eine `internal` Funktion erstellen, die weder Contract-Zustand noch Umgebungsvariablen liest oder verändert (also eine `pure` Funktion), und einen `uint256` zurückgibt.

1. Erstellen Sie eine Funktion mit dem Namen `_generateRandomDNA` mit `internal` und `pure` Dekoratoren.
2. Die Funktion soll ein Inputargument bekommen: `_name`, mit Typ `String[32]`.
3. Die Funktion soll einen `uint256` zurückgeben.
4. Nutzen Sie das `pass` Keyword um einen leeren Funktionskörper zu definieren.


<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/1/1.10-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.10-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.9-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
