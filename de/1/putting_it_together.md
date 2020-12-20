<!-- Add translation for the following page: https://vyper.fun/#/1/putting_it_together
Do NOT change the code below. The below code runs the code editor -->


# Chapter 12: Zeit, alles zusammen zu bringen

Wir sind mit unserem Zufalls-Pokemongenerator fast fertig! Machen Sie einige Änderungen am Contract um zufällige Pokemons zu generieren.

## Stellen Sie sich auf die Probe

1. Die maximalen HP eines Pokemons sollten unter 1000 sein. Definieren sie eine Konstante mit dem Namen `HP_LIMIT` und dem Wert 1000.

2. Entfernen sie die `_dna` und `_HP` Argumente von der `_createPokemon` Funktionsdeklaration.

3. Erstellen Sie eine Variable namens `randomDNA` mit Typ `uint256` innerhalb von `_createPokemon`. Rufen Sie die Funktion `_generateRandomDNA` mit `self` auf, und liefern Sie `_name` als Argument. Weisen Sie das Ergebnis `randomDNA` zu.

4. Erstellen Sie eine Variable namens `randomHP` mit Typ `uint256` innerhalb von `_createPokemon`. Geben Sie ihr den Wert `randomDNA` modulus (`%`) `HP_LIMIT`.

5. Erstellen Sie eine Variable namens `newPokemon` mit Typ `Pokemon` innerhalb von `_createPokemon`. Nutzen Sie das `_name` Argument, `randomDNA` und `randomHP` um `newPokemon` zu definieren.

6. Fügen Sie innerhalb von `_createPokemon` das neue Pokemon zur `PokemonList` hinzu. Nutzen Sie dazu `totalPokemonCount` als Key und `newPokemon` als Wert. Denken Sie daran, `self` für den Zugriff auf die Datenspeichervariablen zu nutzen.

7. Ändern Sie die `_createPokemon` Funktionsdeklaration so, dass sie ein `Pokemon` zurückgibt.

8. Geben Sie am Ende der `_createPokemon` Funktion ein `newPokemon` zurück.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/1/1.12-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.12-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.11-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
