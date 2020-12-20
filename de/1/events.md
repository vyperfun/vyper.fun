<!-- Add translation for the following page: https://vyper.fun/#/1/events
Do NOT change the code below. The below code runs the code editor -->


# Chapter 13: Events

Unser Contract ist fast fertig! Jetzt fügen wir ein `event` hinzu.

**Events** ermöglichen deinem Contract dem App Front-End mitzuteilen, dass etwas im Blockchain geschehen ist. Das Front-End kann so auf bestimmte Events warten und entsprechend handeln, wenn sie auftreten.

### Beispiel

```vyper
# Ein Event deklarieren
event NewPersonAdded:
    name: String[64]
    age: uint256

people: HashMap[String[64], uint256]

@external
def addNewPerson(name: String[64], age: uint256):
    self.people[name] = age

	# Ein Event auslösen, damit die App weiß, dass die Funktion aufgerufen wurde
    log NewPersonAdded(name, age)
```

Das Front-End kann dann auf das Event warten. Eine mögliche Implementation in javascript würde so aussehen:

```js
YourContract.NewPersonAdded(function(error, result) {
  // Mit dem Eventergebnis etwas machen
}
```

## Stellen Sie sich auf die Probe

Wir wollen unser Front-End immer benachrichtigen, wenn ein neues Pokemon erstellt wird, damit unsere App es anzeigen kann.

1. Erstellen Sie ein Event mit dem Namen `NewPokemonCreated`. Es soll 3 Argumente haben:

- `name`, mit Typ `String[32]`
- `dna`, mit Typ `uint256`
- `HP`, mit Typ `uint256`


2. Nutzen Sie das `log` Keyword, um das Event in der `_createPokemon` Funktion genau vor der `return` Anweisung auszulösen.

Herzlichen Glückwunsch! 🎉

Sie haben den ersten Abschnitt von Vyper.fun beendet. Jetz haben Sie die Macht, mit Vyper neue Pokemons auf dem Blockchain zu schöpfen 🔥

Tweeten Sie Ihren Erfolg!

[![Tweet](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fvyper.fun%2F%23%2F1%2Fintroduction)](https://twitter.com/intent/tweet?hashtags=VyperFun&ref_src=twsrc%5Etfw&text=I%20just%20completed%20Lesson%201%3A%20Create%20your%20Pok%C3%A9mon%20on%20blockchain%20using%20%40vyperlang%20at%20%40VyperFun%20%F0%9F%98%8E%20&tw_p=tweetbutton&url=https%3A%2F%2Fvyper.fun%2F%23%2F1%2Fintroduction)

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/1/1.13-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.13-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.12-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
