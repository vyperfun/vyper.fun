<!-- Add translation for the following page: https://vyper.fun/#/2/addresses
Do NOT change the code below. The below code runs the code editor -->

# Kapitel 1: Adressen

Im letzten Kapitel haben wir die ersten Pokemon erstellt. Aber ohne Trainer um sie zu trainieren wäre unser Spiel langweilig. Lass uns Trainer zum Spiel hinzufügen. Jeder Trainer kriegt standardmäßig ein Pokemon.

Um das zu ermöglichen brauchen wir einen neuen Datentypen: `address`.

## Adressen

Die Ethereum Blockchain besteht aus **Accounts** welche vergleichbar mit Bankkonten sind. Ein Account hat einen Betrag an **Ether** (die Währung, welche auf der Ethereum Blockchain benutzt wird) und du kannst Ether Bezahlungen senden und empfangen, genau wie man mit einer normalen Banküberweisung Geld von einem Bankkonto auf ein anderes überweisen kann.

Jeder Account hat eine `address` welche mit einer Kontonummer bei einem Bankkonto vergleichbar ist. Es ist eine einzigarte Kennzeichnung welche auf einen Account zeigt und sieht wie folgt aus:

```
0x073Ab1C0CAd3677cDe9BDb0cDEEDC2085c029579
```

(Diese Adresse gehört dem Vyper.fun Team. Wenn dir Vyper.fun gefällt, dann kannst du uns ein paar Ether senden! 😉)

Zu dem praktischen Themen rund um Adressen kommen wir noch in einer späteren Lektion, aber fürs erste musst du nur verstehen, dass eine Adresse einem bestimmten Nutzer (oder einem Smart Contract) gehört.

Deswegen können wir sie als einzigartige Kennzeichnung von einem Trainer benutzen. Wenn ein Nutzer einen neuen Trainer erstellt, wenn er mit unserer App interagiert, dann setzen wir den Inhaber von dem Trainer zu der Ethereum Adresse, welche die Funktion aufgerufen hat.

## Nested Mapping

Ein Nested Mapping sieht wie folgt aus:

```vyper
# maps a teacher to a list of students
teacherToStudents: HashMap[String[32], HashMap[uint256, String[32]]]

@external
def addStudent(teacherName: String[32], studentName: String[32], rollnumber: uint256):
    teacherToStudents[teacherName][rollnumber] = studentName
```

Das `teacherToStudents` Mapping mappt den Namen des Lehrers (`String[32]`) zu einem anderen Sub-Mapping, welches eine Liste an Schülern darstellt. Diese Liste an Schülern mappt die Schülernummer (`uint256`) zu den dazugehörigen Namen (`String[32]`).

Das `teacherToStudents` Mapping kann gefüllt werden, in dem man zwei Schlüssel hinzufügt: der erste Schlüssel ist `String[32]` (`teacherName`) und der zweite Schlüssel ist `uint256` (`rollnumber`). Der zugehörige Wert ist ein `String[32]` (`studentName`).

# Stell es auf die Probe

Als erstes, um einen Trainer zu erstellen, benötigen wir ein Trainer struct. Dann um den Inhaber eines Trainers und seine Pokemon zu speichern, müssen wir drei Mappings benutzen.

1. Erstelle ein `Trainer` struct mit einer Eigenschaft: `name` (`String[32]`).
2. Erstelle ein Mapping namens `trainerPokemonCount` mit einem Schlüssel vom Typ `address` und einem Wert vom Typ `uint256`.
3. Erstelle ein Mapping namens `trainerList` mit einem Schlüssel vom Typ `address` und einem Wert vom Typ `Trainer`.
4. Erstelle ein Nested Mapping namens `trainerToPokemon` mit einem Schlüssel vom Typ `address` welcher zu einem anderen Sub-Mapping mappt. Das Sub-Mapping hat einen Schlüssel vom Typ `uint256` und einen Wert vom Typ `Pokemon`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/2/2.1-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/2/2.1-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.12-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
