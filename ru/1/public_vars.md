<!-- Add translation for the following page: https://vyper.fun/#/1/public_vars
Do NOT change the code below. The below code runs the code editor -->

# Глава 9: Публичные переменные

Переменные хранилища могут быть помечены как `public` во время объявления:

```vyper
publicName: public (String [64])
```

Компилятор автоматически создает функции получения для всех переменных хранилища public. Эти функции получения НЕ записаны в вашем коде, но генерируются компилятором при его компиляции.

В приведенном выше примере компилятор сгенерирует функцию с именем `publicName`, которая не принимает никаких аргументов и возвращает` String [64] `, значение переменной состояния` publicName`. Таким образом, даже если вы не видите ни одной функции с именем `publicName`, она будет сгенерирована при компиляции вашего кода.

## Давайте проверим это

Нам нужна переменная публичного хранилища, которая отслеживает количество покемонов, созданных в контракте.

1. Создайте переменную хранилища `public` с именем` totalPokemonCount` типа ʻuint256`.
2. Замените ключ `0` в сопоставлении` pokemonList` в функции `_createPokemon` на
   переменная хранения `totalPokemonCount`. Не забудьте использовать переменную среды `self` для доступа к переменной хранилища из функции.
3. В функции `_createPokemon` увеличьте значение totalPokemonCount на 1, используя переменную среды self. Чтобы код выглядел чистым, используйте арифметический оператор `+=`, как показано ниже:
   ```vyper
   # adds 1 to the parameter passed
   @external
   def addOne(number: uint256):
      # we used += to increment number by 1
      number += 1
   ```
<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.9-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.9-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.8-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
