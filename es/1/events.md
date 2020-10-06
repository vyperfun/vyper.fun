<!-- Add translation for the following page: https://vyper.fun/#/1/events
Do NOT change the code below. The below code runs the code editor -->

# Capitulo 13: Eventos

¡Nuestra declaración está casi terminada! Ahora vamos a añadir un `evento`.

**Eventos** son una manera para que tu declaración comunique que algo paso en la blockchain para tu aplicación front-end, la cual puede ser ‘escuchada’ por ciertos eventos y tomar acción cuando ocurren.

### Ejemplo

```Vyper
# declarar un evento
event NewPersonAdded:
	name: String[64]
	agre: uint256

people: HashMap[String[64], uint256]

@external
Def addNewPerson(name: String[64], uint256, age: uint256):
	Self.people[name] = age

	# Dispara un evento para que la función sepa que la función fue llamada
	Log NewPersonAdded(name, age)
```

Tu aplicación front-end ahora podrá escuchar al evento. Una implementación de javascript se vería algo así:

```js
YurContract.NewPersonAdded(function(error, result) {
	// hace algo con el resultado
}
```

# Ponlo en la prueba

Queremos un evento que haga saber a nuestro front-end cada vez que un nuevo Pokemon sea creado, así la aplicación pueda mostrarlo.

1. Creamos un evento nombrado `NewPokemonCreated`. Debería tener 3 argumentos:
    - `name` de tipo `String[32]`
    - `dna` de tipo `uint256`
    - `HP` de tipo `uint256`

2. Usar la palabra clave `log` para disparar el evento dentro de la función `_createPokemon` antes de la sentencia `return`.

Felicidades 🎉

Haz completado la lección 1 de Vyper. Divirtiendose y ahora tienes el poder de crear nuevos Pokemon en el blockchain usando Vyper 🔥

¡Tweetealo para compartir asombrosa hazaña!

[![Tweet](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fvyper.fun%2F%23%2F1%2Fintroduction)](https://twitter.com/intent/tweet?hashtags=VyperFun&ref_src=twsrc%5Etfw&text=I%20just%20completed%20Lesson%201%3A%20Create%20your%20Pok%C3%A9mon%20on%20blockchain%20using%20%40vyperlang%20at%20%40VyperFun%20%F0%9F%98%8E%20&tw_p=tweetbutton&url=https%3A%2F%2Fvyper.fun%2F%23%2F1%2Fintroduction)

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.13-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.13-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.12-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
