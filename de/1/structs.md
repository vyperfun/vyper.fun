<!-- Add translation for the following page: https://vyper.fun/#/1/structs
Do NOT change the code below. The below code runs the code editor -->

# Chapter 4: Structs

Ab und zu braucht man Datentypen, die etwas komplexer sind. Hierfür bietet Vyper `structs`:

```vyper
struct Person:
    age: uint256
    name: String[64]
```

Strukturen ermöglichen komplexe Datentypen, die mehrere Variablen zusammenbündeln.

>	Achtung! Wir haben gerade einen neuen Datentyp eingeführt: Den String. Bei Strings mit fest angegebener Länge darf die gespeicherte Zeichenkette diese nicht überschreiten, doch aber kürzer sein.
>
> ```vyper
> testString: String[100] = "Hello World!"
>
>	Dieser `testString` kann bis zu 100 Zeichen speichern. Wir haben mit `"Hello World!"` aber nur 12 davon benutzt.

Vyper (wie Python auch) nutzt Einrückung, um Codeblöcke zu strukturieren. Python nutzt für die Einrückung Whitespace-Zeichen: alle Anweisungen mit der selben Verschiebung nach rechts gehören zum selben Codeblock. Wenn ein einzelner Codeblock weiter unterteilt werden muss, wird der Sub-Block einfach weiter nach rechts eingerückt.
Zum Beispiel: Beim unserem Personen-struct oben sind Alter und Name um den selben Abstand eingerückt, also gehören sie zum selben Codeblock.

## Stellen Sie sich auf die Probe

Zeit, ein Paar Pokemons für unsere App zu generieren! Die Pokemons sollen verschiedene Eigenschaften haben, also ist ein struct die perfekte Lösung dafür.


1. Erstellen Sie ein `struct` mit dem Namen `Pokemon`.

2. Unser Pokemon-struct wird 5 Eigenschaften haben:
   - `name` (`String[32]`)
   - `dna` (`uint256`)
   - `HP` (`uint256`)
   - `matches` (`uint256`)
   - `wins` (`uint256`)


#### ** Template **

[embedded-code](../../assets/1/1.4-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.4-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.3-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
