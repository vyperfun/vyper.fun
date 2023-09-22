# Chapter 8: Interfaces

In the previous chapter, we completed the contract for the pokemon battle. Now to battle with the pokemons, the trainer contract (remember the first contract where each trainer owned a pokemon?) needs to interact with the pokemon battle contract.

For doing so we will use Interfaces.

## Interfaces

An interface is a set of function definitions used to enable communication between smart contracts. A contract interface defines **all of that contract’s externally available functions** (as we cannot access the private functions outside the contract, there is no point in adding them to the interface). By importing an interface, your contract knows how to call these functions in other contracts.

So, for our use-case, we need to create an interface for the pokemon battle contract in the trainer contract. This will allow the trainer contract to communicate with the pokemon battle contract.

### Using Interfaces

Interfaces can be added to contracts either through inline definition or by [importing them from a separate file](https://vyper.readthedocs.io/en/stable/interfaces.html?highlight=import#imports-via-import).

The `interface` keyword is used to define an inline external interface:

```vyper
interface Car:
    def start() -> bool: nonpayable
    def getSpeed() -> uint256: view
```

The defined `Car` interface can then be used to make external calls, given a contract address:

```vyper
@external
def Driver(some_address: address):
    Car(some_address).start()
```

The interface name (`Car`) can also be used as a type for storage variables. You then assign an address value to the variable to access that interface:

```vyper
car: Car

@external
def __init__(car_address: address):
    self.car = Car(car_address)

@external
def getCarSpeed():
    self.car.getSpeed()
```

Specifying `payable` or `nonpayable` annotation indicates that the call made to the external contract will be able to alter contract storage/data, whereas the `view`, `pure` call will NOT be able to alter contract storage/data. Additionally, `payable` allows non-zero value to be sent along with the call (meaning you can send ETH to when calling a payable function).

```vyper
interface Car:
    def calculateDoubleSpeed() -> uint256: pure
    def getSpeed() -> uint256: view
    def increaseSpeed(): nonpayable
    def payForPetrol(): payable

@external
def test(car_address: address):
    Car(car_address).calculateDoubleSpeed()  # cannot change storage
    Car(car_address).getSpeed()  # cannot change storage, but reads itself
    Car(car_address).increaseSpeed()  # storage can be altered
    Car(car_address).payForPetrol(value=100)  # storage can be altered, and value can be sent
```

> NOTE: `view` and `pure` call use a `STATICCALL` ensuring no storage can be altered during execution.

## Put it to the test

As the coding area can only have one file at a time, we have removed the pokemon battle contract and added the trainer contract. You can check out the pokemon battle contract [here](https://github.com/vyperfun/vyper.fun/blob/chapter1/assets/2/2.7-finished-code.vy).

1. The pokemon battle contract only has 1 external function: `battle`

```
@external
def battle(pokemon: Pokemon) -> (bool, String[32], uint256, uint256):
    # battle code
```

As the `battle` function alters the state of the pokemon battle contract by adding data to state variables, you will use `nonpayable` annotation.

Add an interface named `WildPokemons` with 1 function definition for `battle` with `nonpayable` annotation.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.8-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.8-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.7-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
