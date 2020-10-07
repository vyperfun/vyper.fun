<!-- Add translation for the following page: https://vyper.fun/#/1/contract_structure
Do NOT change the code below. The below code runs the code editor -->

# Kapitel 1: Contracts

Fangen wir mit den Grundlagen an:

Ein Contract ist der Grundbaustein einer Ethereum Anwendung - alle Variablen und Funktionen gehören zu einem Contract und dieser Contract wird der Startpunkt all unserer Projekte sein.

Vyper Contracts sind innerhalb von Dateien. Jede Datei enthält genau einen Contract.

## Versions-Compiler-Anweisung

Vyper unterstützt Versions-Compiler-Anweisungen um sicherzustellen, dass ein Contract
nur mit einer festgelegten Compilerversion bzw. Versionsspanne kompiliert wird.
Dazu wird die [NPM](https://docs.npmjs.com/misc/semver) Syntax verwendet.

Für dieses Tutorial verwenden wir eine Compilerversion zwischen `0.2.0` (inklusive) und `0.3.0` (exklusive). Da sieht wie folgt aus:

```vyper
# @version >=0.2.0 <0.3.0
```

## Stell es auf die Probe

1. Erstelle in der Box rechts einen Contract, der mit einer Version zwischen `0.2.4` (inklusive) und `0.3.0` (exklusive) kompiliert werden kann.

2. Wenn du fertig bist kannst du von `🛠 Yout code` zum Reiter `✅ Solution` wechseln, um deine Lösung mit dieser zu vergleichen. **(Tab-Reiter sind im rechten unteren Bereich des Bildschirms)**

3. Nutze den `𝌡 Difference` Reiter, um die Unterschiede zwischen `🛠 Your code` und `✅ Solution` zu sehen.

4. Wenn du Fragen hast, dann klicke auf `Open Chat` und stelle dort deine Frage 😊

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/1/1.1-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.1-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.0-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
