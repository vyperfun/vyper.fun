<!-- Add translation for the following page: https://vyper.fun/#/1/mappings
Do NOT change the code below. The below code runs the code editor -->

# Глава 5: Отображение
В предыдущей главе мы рассмотрели структуры. Отображение - это еще один способ хранения организованных данных в Vyper.

Отображение - это хеш-таблицы, которые виртуально инициализируются таким образом, что существует каждый возможный ключ и отображается значение по умолчанию.

Определение отображения выглядит так:

```
# Отображение для хранения номера списка и имен учащихся
exampleMapping1: HashMap[uint256, String[64]]

# Отображение для хранения имен пользователей и количества их подписчиков
exampleMapping2: HashMap[String[32], uint256]

```

По сути, отображение - это хранилище ключей и значений для хранения и поиска данных. В первом отображении с именем `exampleMapping1` ключом является `uint256`, а значением - `String [64]`, а во втором отображении с именем `exampleMapping2` ключом является `String [32]`, а значением - `uint256`.

## Давайте проверим это


Для хранения наших покемонов нам понадобится отображение, которое сопоставляет серийный номер с покемонами.

1.Создайте отображение с именем `pokemonList` с ключом типа `uint256` и значением типа `Pokemon`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.5-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.5-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.4-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
