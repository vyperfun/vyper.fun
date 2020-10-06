<!-- Add translation for the following page: https://vyper.fun/#/1/external_internal_functions
Do NOT change the code below. The below code runs the code editor -->
## Глава 8: Внешние / внутренние функции
Как мы обсуждали в предыдущей главе, все функции должны включать один декоратор видимости (`@external` или `@internal`).

| Декоратор | Описание |
|-----------|:----------|
|`@external`| Функция может быть вызвана только извне|
|`@internal`| Функция может быть вызвана только в рамках текущего контракта|

Мы хотели бы создать некоторые функции, которые не должны вызываться извне.
Для таких функций мы будем использовать декоратор видимости `@internal`.

Давайте посмотрим, как объявить внутреннюю функцию:

```vyper
peopleToAge: HashMap[String[64], uint256]

@internal
def _addPerson(_name: String[64], _age: uint256):
    self.peopleToAge[_name] = [_age]
```

Это означает, что только другие функции в нашем контракте смогут вызывать функцию `_addPerson` и добавлять в сопоставление `peopleToAge`.

Обратите внимание на подчеркивание (`_`) в начале имени функции и параметров. Согласно соглашению об именах, перед именем внутренней функции и ее параметром (-ами) добавляется подчеркивание (`_`).

## Давайте проверим это

Функция `createPokemon` нашего контракта в настоящее время является внешней - это означает, что любой может вызвать ее и создать нового покемона в нашем контракте! Сделаем данную функцию внутренней.

1. Измените `createPokemon`, сделав её внутренней функцией. Не забывайте о соглашении об именах!

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.8-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.8-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.7-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
