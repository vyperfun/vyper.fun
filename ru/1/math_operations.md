<!-- Add translation for the following page: https://vyper.fun/#/1/math_operations
Do NOT change the code below. The below code runs the code editor -->

# Глава 3: Математические операции

Математика в Vyper довольно проста. Следующие операции такие же, как и в большинстве языков программирования:

- Сложение: `x + y`
- Вычитание: `x - y`
- Умножение: `x * y`
- Деление: `х / у`
- Модуль / остаток: `x% y` (например, `13% 5` равно `3`, потому что если вы разделите `5` на `13`, `3` будет остатком)

Vyper также поддерживает экспоненциальный оператор (например, «`x` в степени `y`», `x ^ y`):

```vyper
# равнозначно 5 ^ 2 = 25
uint256 х = 5 ** 2
```

## Давайте проверим это

Чтобы убедиться, что ДНК нашего покемона состоит всего из 16 символов, давайте сделаем еще одну` constant` `uint256` равной `10 ^ 16`. Таким образом, мы можем позже использовать деление с остатком`%`, чтобы сократить целое число до 16 цифр.

1. Создайте `constant` `uint256` с именем `DNA_MODULUS` и установите ее равной `10` в степени `DNA_DIGITS`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.3-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.3-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.2-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
