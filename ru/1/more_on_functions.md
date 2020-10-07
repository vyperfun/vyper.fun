`<!-- Add translation for the following page: https://vyper.fun/#/1/more_on_functions
Do NOT change the code below. The below code runs the code editor -->

# Глава 10: Подробнее о функциях

В этой главе мы узнаем о значении `return` в функции и необязательных декораторах функций.

## Возвращаемые значения

Чтобы вернуть значение из функции, объявление выглядит так:

```vyper
nameToAge: HashMap[String[64], uint256]

@external
def getAge(name: String[64]) -> uint256:
    return self.nameToAge[name]
```

Вышеупомянутая функция `getAge` возвращает `uint256`, который представлен символом `->`, за которым следует возвращаемый тип `uint256`.

## Декораторы функций

В предыдущей главе мы исследовали 2 декоратора функций: `@internal` и` @external`.

Есть еще несколько необязательных декораторов функций:

| Декоратор                     | Описание                                                                     |
| ----------------------------- | ---------------------------------------------------------------------------- |
| `@pure`                       | Функция не считывает состояние контракта или переменные среды                |
| `@view`                       | Функция не изменяет состояние контракта, но может читать состояние контракта |
| `@payable`                    | Функция может получать Ether                                                 |
| `@nonreentrant(<unique_key>)` | Функцию нельзя вызвать обратно во время внешнего вызова                      |

Следуя приведенному выше примеру, мы можем добавить декоратор функции `@view` в функцию `getAge`, поскольку он считывает состояние контракта (переменную хранения), но не меняет его.

```vyper
nameToAge: HashMap[String[64], uint256]

@view
@external
def getAge(name: String[64]) -> uint256:
    return self.nameToAge[name]
```

## Давайте проверим это

Мы хотим создать`internal` функцию, которая не считывает и не изменяет состояние контракта или переменные среды (то есть `pure` функцию), которая возвращает `uint256`.

1. Создайте функцию с именем `_generateRandomDNA` с внутренними и чистыми декораторами функций.
2. Функция должна принимать входной параметр: `_name` типа`String [32]`.
3. Функция возвращает тип `uint256`.
4. Используйте ключевое слово `pass`, чтобы определить пустое тело функции.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/1/1.10-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.10-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.9-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
