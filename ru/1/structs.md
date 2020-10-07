<!-- Add translation for the following page: https://vyper.fun/#/1/structs
Do NOT change the code below. The below code runs the code editor -->

# Глава 4: Структуры

Иногда вам нужен более сложный тип данных. Для этого Vyper предоставляет `structs`

```vyper
struct Person:
    age: uint256
    name: String[64]
```

Структуры позволяют создавать более сложные типы данных, которые имеют несколько свойств.

> Обратите внимание, что мы только что ввели новый тип String. Строки фиксированного размера могут содержать строки с количеством символов, равным или меньшим, чем максимальная длина строки.
>
> ```vyper
> testString: String[100] = "Hello World!"
> ```
>
> Вышеупомянутая `testString` может содержать до 100 символов. Мы использовали только 12 символов в `"Hello World!"`.

Также следует отметить, что Vyper (как и Python) использует отступы для выделения блоков кода. Пробелы используются для отступов в Python. Все операторы с одинаковым расстоянием слева принадлежат одному блоку кода. Если блок должен быть более глубоко вложенным, он просто смещается вправо.

В структуре `Person`, приведенной выше в качестве примера, `age` и`name` смещены на одинаковое расстояние вправо. Следовательно, они принадлежат одному блоку кода.

## Давайте проверим это

В нашем приложении мы собираемся создать несколько Покемонов! А у Покемонов будет несколько свойств, так что это идеальный вариант для использования структуры.

1. Создайте `struct` с названием `Pokemon`.

2. Структура `Pokemon` будет иметь 5 свойств:
   - `name` (`String[32]`)
   - `dna` (`uint256`)
   - `HP` (`uint256`)
   - `matches` (`uint256`)
   - `wins` (`uint256`)

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/1/1.4-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.4-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.3-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
