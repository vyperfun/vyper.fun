<!-- Add translation for the following page: https://vyper.fun/#/1/public_vars
Do NOT change the code below. The below code runs the code editor -->


# Chapter 9: Öffentliche Variablen

Speichervariablen can man bei der Deklaration als `public` (öffentlich) bezeichnen:

```vyper
publicName: public(String[64])
```

Der Compiler erstellt dann automatisch getter-Funktionen für alle öffentlichen Speichervariablen. Diese getter sind NICHT im Code zu lesen, sondern werden erst bei der Kompilierung generiert.

Für das obere Beispiel wird der Compiler dann automatisch eine Funktion mit dem Namen `publicName` erstellen, die keine Argumente nimmt und den Wert der Zustandsvariable als einen `String[64]` zurückgibt.   

## Stellen Sie sich auf die Probe

Wir brauchen eine öffentliche Speichervariable, die die Anzahl der vom Contract generierten Pokemons verfolgt.

1. Deklarieren Sie eine `public` Variable mit dem Namen `totalPokemonCount` und dem Typ `uint256`.
2. Ersetzen Sie den Key `0` im Mapping `pokemonList` in der Funktion `_createPokemon` mit der Speichervariable `totalPokemonCount`.
   Vergessen Sie nicht, die `self` Umgebungsvariable zu benutzen, um von der Funktion heraus auf die Speichervariable zu greifen.
3. Nutzen Sie die `self` Umgebungsvariable, um in der `_createPokemon` Funktion den `totalPokemonCount` um 1 zu erhöhen. Nutzen Sie den Operator `+=`, damit der Code sauberer aussieht:

   ```vyper
   # addiert 1 zum erhaltenen Parameter
   @external
   def addOne(number: uint256):
      # Wir nutzen += um die Zahl um 1 zu erhöhen
      number += 1
   ```

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/1/1.9-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.9-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.8-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
