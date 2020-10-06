<!-- Add translation for the following page: https://vyper.fun/#/1/function_declarations
Do NOT change the code below. The below code runs the code editor -->

# Глава 6: Объявления функций

Объявление функции в Vyper выглядит следующим образом:

```vyper
@external
def exampleFunction(name: String[64], age: uint256):
    pass
```

Это функция с именем `exampleFunction`, которая принимает 2 параметра: `String [64]` (имя) и `uint256` (возраст).

Обратите внимание, что мы указываем видимость функции как внешнюю с помощью декоратора функции `@external`.

Все функции должны включать один декоратор видимости (`@external`(внешний) или `@internal`(внутренний). Мы узнаем больше о видимости функций и декораторах в следующих главах.

Вы можете определить пустое тело функции с помощью ключевого слова `pass`. Когда оно выполняется, ничего не происходит.

## Давайте проверим это

В нашем приложении мы собираемся создать несколько покемонов. Создадим для этого функцию.

1. Создайте `внешнюю` функцию с именем `createPokemon`. Она должена принимать три параметра:
   - name (a `String[32]`)
   - dna (a `uint256`)
   - HP (a `uint256`)
2. Используйте ключевое слово `pass`, чтобы определить пустое тело функции.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.6-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.6-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.5-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
