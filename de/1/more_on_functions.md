<!-- Add translation for the following page: https://vyper.fun/#/1/more_on_functions
Do NOT change the code below. The below code runs the code editor -->

# Kapitel 10: Mehr über Funktionen

In diesem Kapitel werden wir uns mit Funktionsrückgabewerten (`return`) und optionale Funktionsdekoratoren beschäftigen.

## Rückgabewerte

Um einen Wert aus einer Funktion zurückzugen muss der Deokorator wie folgt aussehen:
```vyper
nameToAge: HashMap[String[64], uint256]

@external
def getAge(name: String[64]) -> uint256:
    return self.nameToAge[name]
```

Die obige Funktion `getAge` gibt einen `uint256` zurück. Dies wird durch das Symbol -> gefolgt von dem Rückgabetyp `uint256` dargestellt.

## Funktionsdekoratoren

In einem früheren Kapitel haben wir zwei der Funktionsdekoratoren untersucht: `@intern` und `@extern`.

Es gibt einige weitere _optionale_ Funktionsdekoratoren

| Decorator                     | Description                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------|
| `@pure`                       | Die Funktion liest keine Vertragsstatus oder Umgebungsvariablen                  |
| `@view`                       | Die Funktion ändert den Vertragsstatus nicht, kann aber den Vertragsstatus lesen |
| `@payable`                    | Funktion kann Ether empfangen                                                    |
| `@nonreentrant(<unique_key>)` | Funktion kann während eines externen Anrufs nicht zurückgerufen werden           |

In Anlehnung an das obige Beispiel können wir der Funktion `getAge` den Funktionsdekorator `@view` hinzufügen, da diese den Vertragsstatus (Speichervariable) einliest, ihn aber nicht verändert.

```vyper
nameToAge: HashMap[String[64], uint256]

@view
@external
def getAge(name: String[64]) -> uint256:
    return self.nameToAge[name]
```

## Testen Sie es

Wir wollen eine interne (`internal`) Funktion erstellen, die den Vertragsstatus oder die Umgebungsvariablen nicht liest oder verändert (d.h. eine `pure` Funktion) und `uint256` zurückgibt.

1. Erstellen Sie eine Funktion mit dem Namen `_generateRandomDNA` mit `internal` und `pure` Funktionsdekoratoren.
2. Die Funktion sollte einen Eingabeparameter akzeptieren: `_name` vom Typ `String[32]`.
3. Die Funktion gibt `uint256-Typ` als Rückgabewert zurück.
4. Verwenden Sie das Schlüsselwort `pass`, um einen leeren Funktionskörper zu definieren.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/1/1.10-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.10-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.9-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
