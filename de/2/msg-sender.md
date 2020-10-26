<!-- Add translation for the following page: https://vyper.fun/#/2/msg-sender
Do NOT change the code below. The below code runs the code editor -->

# Kapitel 2:Msg.sender

Jetzt, da wir unsere Zuordnungen haben, mit denen wir verfolgen können, welcher Trainer welches Pokemon besitzt, wollen wir die Contract-Funktionen aktualisieren, um sie nutzen zu können.

Um dies zu tun, müssen wir `msg.sender` verwenden.

## msg.sender

In Vyper gibt es bestimmte globale Variablen, die allen Funktionen zur Verfügung stehen. Eine davon ist msg.sender, die sich auf die Adresse der Person (oder des Smart Contract) bezieht, die die aktuelle Funktion aufgerufen hat.

>Hinweis: In Vyper muss die Funktionsausführung immer mit einem externen Anrufer beginnen. Ein Contract wird einfach auf der Blockchain sitzen und nichts tun, bis jemand eine seiner Funktionen aufruft. Es wird also immer einen `msg.sender` geben.

Hier ist ein Beispiel für die Verwendung von `msg.sender` und die Aktualisierung einer Zuordnung:

```vyper
favoriteNumber: HashMap[address, uint256]

@external
def setMyNumber(myNumber: uint256):
    # Update our `favoriteNumber` mapping to store `myNumber` under `msg.sender`
    favoriteNumber[msg.sender] = myNumber

@view
@external
def whatIsMyNumber() -> uint256:
    # Retrieve the value stored in the sender's address
    # Will be `0` if the sender hasn't called `setMyNumber` yet
    return favoriteNumber[msg.sender]
```

In diesem trivialen Beispiel könnte jeder `setMyNumber` aufrufen und eine `uint256` in einem Contract speichern, die an seine `address` gebunden wäre. Wenn er dann `whatIsMyNumber` anruft, erhält er die `uint256` zurück, die er gespeichert hat.

Die Verwendung von `msg.sender` gibt Ihnen die Sicherheit der Ethereum-Blockchain - die einzige Möglichkeit, wie jemand die Daten eines anderen ändern kann, wäre, den privaten Schlüssel zu stehlen, der mit dessen Ethereum-Adresse verbunden ist.

## Testen Sie es

Wir müssen die Contract-funktionen aktualisieren, damit wir einen Trainer mit Hilfe der `Trainer`-Struktur und der `trainerList`-Zuordnung erstellen können.
Diese Funktion sollte auch die Funktion `_createPokemon` aufrufen, um ein Pokemon zu erstellen und dann die Zuordnung `trainerToPokemon` verwenden, um einem Trainer den Besitz eines Pokemons zuzuweisen. Schließlich würden wir den `trainerPokemonCount` inkrementieren.

1. Erstellen Sie ein Ereignis, `NewTrainerCreated`, mit einer einzigen Eigenschaft: `name` (`String[32]`).

2. Erstellen Sie eine `external` Funktion namens `createTrainer`, die 2 Parameter benötigt: `trainerName` (`String[32]`) und `pokemonName` (`String[32]`).

3. Rufen Sie innerhalb des Korpus `createTrainer`, `_createPokemon` auf, indem Sie `pokemonName` als Parameter `_name` übergeben. Dies wird ein `Pokemon` zurückgeben. Erstellen Sie eine Variable `newPokemon` vom Typ `Pokemon` und weisen Sie ihr den Wert des von `_createPokemon` zurückgegebenen Pokemon zu.

4. Erstellen Sie innerhalb des `createTrainer`-Körpers einen Trainer unter Verwendung der "Trainer"-Struktur mit dem Wert "name" als "trainerName". Erstellen Sie eine Variable `newTrainer` vom Typ `Trainer` und weisen Sie ihr den Wert des erstellten Trainers zu.

5. Fügen Sie den neuen Trainer zur `trainerListe` hinzu, indem Sie `msg.sender` dem `neuenTrainer` zuweisen.

6. Fügen Sie den neuen Trainer und das Pokemon in die verschachtelte Zuordnung `trainerToPokemon` ein, indem Sie 2 Schlüssel hinzufügen: den ersten Schlüssel als `msg.sender` und den zweiten Schlüssel als `self.trainerPokemonCount[msg.sender]` (der als eindeutiger Schlüssel für jedes Pokemon eines Trainers fungiert). Der zugewiesene Wert ist `newPokemon`.

7. Erhöhen Sie den `trainerPokemonCount` für unsere Traineradresse `msg.sender` um `1`.

8. Feuern Sie das Ereignis `NewTrainerCreated` mit dem Parameter `trainerName` ab.



<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/2/2.2-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/2/2.2-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/2/2.1-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
