<!-- Add translation for the following page: https://vyper.fun/#/1/external_internal_functions
Do NOT change the code below. The below code runs the code editor -->

# Chapter 8: Externe / Interne Funktionen

Wie wir besprochen haben, müssen alle Funktionen einen Sichtbarkeitsdekorator enthalten (`@external` oder `@internal`).

| Dekorator   | Beschreibung                                                   |
| ----------- | -------------------------------------------------------------- |
| `@external` | Funktion kann nur extern aufgerufen werden                     |
| `@internal` | Funktion kann nur innerhalb des Contracts aufgerufen werden    |

Jetzt wollen wir Funktionen schreiben, die nicht von einem anderen Contract aufrufbar sein sollen. Dafür werden wir den `@internal` Sichtbarkeitsdekorator nutzen.

Interne Funktionen werden so erstellt:

```vyper
peopleToAge: HashMap[String[64], uint256]

@internal
def _addPerson(_name: String[64], _age: uint256):
    self.peopleToAge[_name] = [_age]
```

So werden nur Funktionen innerhalb unseres Contracts die Funktion `_addPerson` aufrufen können, und damit den Mapping `peopleToAge` erweitern.

Beachten Sie den Unterstrich (`_`) zu Beginn des Funktionnames und der Argumente. Es ist Brauch, bei internen Funktionen den Namen und die Parameter mit einen Unterstrich zu beginnen.

## Stellen Sie sich auf die Probe

Unsere `createPokemon` Funktion ist zur Zeit extern - das heißt, jeder kann sie aufrufen und in unserem Contract neue Pokemons generieren! Machen wir sie besser intern.

1. Schreiben sie `createPokemon` um, so dass es eine interne Funktion wird. Vergessen Sie nicht die Unterstriche!

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/1/1.8-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.8-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.7-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
