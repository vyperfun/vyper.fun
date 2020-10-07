<!-- Add translation for the following page: https://vyper.fun/#/2/interfaces
Do NOT change the code below. The below code runs the code editor -->

# Capítulo 8: Interfaces

En el capítulo anterior, completamos el contrato para la batalla pokemon. Ahora, para luchar con los pokemones, el contrato de entrenador (¿recuerdas el primer contrato en el que cada entrenador poseía un pokemon?) debe interactuar con el contrato de la batalla de pokemones.

Para ello utilizaremos las Interfaces.

## Interfaces

Una interfaz es un conjunto de definiciones de funciones utilizadas para permitir la comunicación entre contratos inteligentes. Una contrato de interfaz define todas las funciones disponibles externamente de ese contrato (como no podemos acceder a las funciones privadas fuera del contrato, no tiene sentido añadirlas a la interfaz). Al importar una interfaz, tu contrato sabe cómo llamar a esas funciones en otros contratos.

Así que, para nuestro caso de uso, necesitamos crear una interfaz para el contrato de batalla pokemon en el contrato de entrenador. Esto permitirá que el contrato de entrenador se comunique con el contrato de batalla pokemon.

## Usando Interfaces

Las Interfaces se pueden añadir, ya sea definiéndolas en el mismo contrato o importándolas desde un archivo separado.

La palabra `interface` se utiliza para definir una interfaz externa en el mismo archivo:

    interface Car:
        def start() -> bool: nonpayable
        def getSpeed() -> uint256: view

La interfaz definida `Car` puede ser utilizada para hacer llamadas externas, dada una dirección de contrato:

    @external
    def Driver(some_address: address):
        Car(some_address).start()

El nombre de la interfaz (`Car`) también puede utilizarse como un tipo para las variables de almacenamiento. A continuación, se le asigna una dirección a la variable para acceder a esa interfaz:

    car: Car

    @external
    def __init__(car_address: address):
        self.car = Car(car_address)

    @external
    def getCarSpeed():
        self.car.getSpeed()

La especificación de la anotación `payable` o `nonpayable` que una llamada realizada desde un contrato externo podrá alterar el almacenamiento/datos del contrato, mientras que las llamadas anotadas como `view` o `pure` NO serán capaces de alterar el almacenamiento/datos del contrato. Además, `payable` permite enviar un valor distinto de cero junto con la llamada (lo que significa que se puede enviar ETH cuando se llama a una función payable).

    interface Car:
        def calculateDoubleSpeed() -> uint256: pure
        def getSpeed() -> uint256: view
        def increaseSpeed(): nonpayable
        def payForPetrol(): payable

    @external
    def test(some_address: address):
        Car(car_address).calculateDoubleSpeed()  # no puede cambiar almacenamiento
        Car(car_address).getSpeed()  # no puede cambiar almacenamiento, pero se lee a sí mismo
        Car(car_address).increaseSpeed()  # almacenamiento puede ser alterado
        Car(car_address).payForPetrol(value=100)  # almacenamiento puede ser alterado, y el valor puede ser enviado

> NOTA: `view` y la llamada `pure` usan un `STATICCALL` asegurando que no se pueda alterar el almacenamiento durante la ejecución.

## Ponlo a prueba

Dado que el area donde codificamos nuestros contratos sólo puede tener un archivo a la vez, hemos eliminado el contrato de batalla pokemon y añadido el contrato de entrenador. Puedes ver el contrato de batalla de pokemon [aquí](https://github.com/vyperfun/vyper.fun/blob/chapter1/assets/2/2.7-finished-code.vy).

El contrato de batalla pokemon sólo tiene 1 función externa: `battle`

    @external
    def battle(pokemon: Pokemon) -> (bool, String[32], uint256, uint256):
        # battle code

Como la función de `battle` altera el estado del contrato de batalla pokemon agregando datos a las variables de estado, deberas usar la anotación `nonpayable`.

Añade una interfaz llamada `WildPokemons` con 1 definición de función para `battle` con anotación `nonpayable`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/2/2.8-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/2/2.8-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/2/2.7-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
