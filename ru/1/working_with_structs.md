<!-- Add translation for the following page: https://vyper.fun/#/1/working_with_structs
Do NOT change the code below. The below code runs the code editor -->

# Глава 7: Работа со структурами и отображениями
Помните нашу структуру `Person` из предыдущего примера?

```vyper
struct Person:
    age: uint256
    name: String[64]

people: HashMap[uint256, Person]
```
Теперь мы узнаем, как создавать новых `Людей` и добавлять их в нашу отображение `people`.

```vyper
// создаем нового человека
Person vasa = Person({ name: "vasa", age: 22 })

// Добовляем этого человека в отображение с ключом `0`:
self.people[0] = vasa
```
Мы также можем объединить их вместе и сделать их в одной строке кода, чтобы все было в чистоте:

```vyper
self.people[0] = Person({ name: "vasa", age: 22 })
```
## Переменная self 

Обратите внимание, что мы используем ключевое слово `self` для доступа к переменной состояния people.

`self` - это переменная среды, используемая для ссылки на контракт изнутри. `self` позволяет вам __читать и писать в переменные состояния__ и __вызывать частные (внутренние) функции в контракте__. Мы узнаем о внешних / внутренних функциях в следующей главе.

`self` используется для доступа к переменным состояния контракта, как показано в следующем примере:
```vyper
message: String[10]

@external
def setMessage(msg: String[10]):
    self.message = msg
```

`self` также используется для вызова внутренних функций в контракте:
```vyper
@internal
def multiplyByTwo(amount: uint256):
    amount * 2

@external
def calculate(amount: uint256):
    self.multiplyByTwo(amount)
```
## Давайте проверим это
Заставим нашу функцию `createPokemon` что-нибудь сделать!

1. Удалите ключевое слово `pass`. Заполните тело функции, чтобы она создавала нового `Pokemon` и добавляла его в отображение `pokemonList`. `name`, `dna`, и `HP` нового покемона должны поступать из аргументов функции.

2. Не забудьте использовать переменную окружения `self` для доступа к отображению `pokemonList`.

3. Давайте сделаем это одной строкой кода, чтобы все было в порядке.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.7-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.7-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.6-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
