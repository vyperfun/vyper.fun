<!-- Add translation for the following page: https://vyper.fun/#/1/state_vars_and_ints
Do NOT change the code below. The below code runs the code editor -->

# Kapitel 2: Zustandsvariablen, Zahlen & Konstanten

Großartige Arbeit! Jetzt, wo wir eine Hülle für unseren Auftrag haben, wollen wir erfahren, wie Vyper mit Variablen umgeht.

Zustandsvariablen sind permanent im Contract-Speicher gespeichert. Das bedeutet, dass sie in die Ethereum-Blockkette geschrieben werden. Das bedeutet soviel wie eine Datenbank.

### Beispiel

```vyper
# @version >=0.2.4 <0.3.0

# Dieser Wert wird dauerhaft in der Blockkette gespeichert.
storedData: int128
```

In diesem Beispielcontract speicherten wir ein [`int128`](https://vyper.readthedocs.io/en/stable/types.html#signed-integer-128-bit) genannt `storedData`, welche einen _Standardwert_ von `1` besitzt.

## Positive Zahlen: `uint256`

Der `uint256` Datentyp ist eine ganze Zahl ohne Vorzeichen (256 bit), bedeutet, die kann nicht negativ werden.

Es gibt gleichzeitig den Datentyp `int128` (128 bit), der sowohl positive als auch negative Zahlen speichern kann.

### Beispiel

```vyper
# @version >=0.2.4 <0.3.0

# Dieser Code erstellt eine Konstante vom Typ uint256 mit einem Wert von 10
TEN: constant(uint256) = 10
```

In diesem Beispielcontract, wir erstellten eine Konstante (`constant`) mit dem Typ `uint256`, genannt `TEN` und setzten sie auf den Wert `10`.

## Stellen Sie sich auf die Probe

Unsere Pokemon-DNA wird durch eine 16-stellige Zahl bestimmt werden.

In der Codebox, erstellen Sie eine Konstante(`constant`) mit dem Typ `uint256`, genannt `DNA_DIGITS`, und setzten sie auf den Wert `16`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/1/1.2-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.2-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.1-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
