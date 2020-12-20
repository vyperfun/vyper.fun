<!-- Add translation for the following page: https://vyper.fun/#/1/keccak256-and-typecasting
Do NOT change the code below. The below code runs the code editor -->


# Chapter 11: Keccak256 und Typecasting

Wir wollen, dass unsere `_generateRandomDna` Funktion einen (semi) zufälligen `uint256` zurückgibt. Wie können wir das erreichen?

Ethereum verfügt über eine eingebaute `keccak256` [Hashfunktion](https://de.wikipedia.org/wiki/Hashfunktion), wobei es sich um eine Version von SHA3 handelt. Eine Hashfunktion weist in Kürze einem Input eine zufällige 256-bit hexadezimale Zahl zu, wobei eine kleine Änderung im Input eine große Änderung im Hash erzeugen wird.

Dieses ist im Ethereum-Netzwerk aus vielen Gründen nützlich, aber wir werden es jetzt erstmal nur als Generator für pseudozufällige Zahlen verwenden.

Achtung! `keccak256` erwartet als Input ein einziges Argument vom Typ `bytes32` oder `String`.

### Beispiel

```vyper
keccak256("aaaab")
# Ergebnis: 6e91ec6b618bb462a4a6ee5aa2cb0e9cf30f7a052bb467b0ba58b8748c00d2e5

keccak256("aaaac")
# Ergebnis: b1f078126895a1424524de5321b339ab00408010b7cf0e6ed451514981e58aa9
```

Wie man sehen kann, ist der erhaltene Wert vollkommen unterschiedlich, obwohl das Input sich nur um 1 Zeichen verändert hat.

> Anmerkung: Sichere Generierung von zufälligen Zahlen im Blockchain ist ein sehr schwieriges Problem. Unsere Methode ist unsicher, aber da Sicherheit keine Priorität für unser Pokemon DNA ist, ist es für uns erstmal genug.

## Typecasting

Manchmal muss man zwischen verschiedenen Datentypen wechseln. Zum Beispiel:

```vyper
a: uint256 = 10
b: int128 = 10

# Die folgende Operation wird fehlschlagen,
# da a und b unterschiedliche Datentpen sind.
# A darf kein uint256 sein
c: int128 = a * b

# Der Fehler behebt sich, wenn wir den Wert
# von uint256 auf int128 konvertieren
c: int128 = convert(a, int128) * b
```

Hier haben wir das Problem dadurch gelöst, dass wir `a` von `uint256` auf `int128` gecastet haben.

Alle Typkonversionen in Vyper müssen explizit mit der eingebauten `convert(a: atype, btype)` Funktion ausgeführt werden. Hier ist die Liste der [unterstützten Konversionspaaren](https://vyper.readthedocs.io/en/stable/types.html#type-conversions).

## Stellen Sie sich auf die Probe

Jetzt können wir den Körper unserer `_generateRandomDna` Funktion ausfüllen! Es soll folgende Schritte ausführen:

1. Einen `keccak256` Hash aus den `_name` Argument generieren.
2. Diesen Hash in einen `uint256` umwandeln, und den daraus ergebenen Wert in einer `uint256` Variable mit dem Namen `random` speichern.
3. Wir wollen, dass unser DNA nur 16 Zeichen lang ist (erinnern Sie sich an unser `DNA_MODULUS`?). Geben Sie am Ende der Funktion `random` modulus (`%`) `DNA_MODULUS` zurück.


<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/1/1.11-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.11-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.10-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
