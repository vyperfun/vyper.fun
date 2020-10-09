# Chapter 10: Calling a Contract

In [Chapter 8](https://vyper.fun/#/2/interfaces), we added `WildPokemons` interface in the trainer contract. In this chapter, we will call the `battle` function of the `WildPokemon` interface.

If you recall from [Chapter 8](https://vyper.fun/#/2/interfaces), we need a contract address to interact with `WildPokemons`.

We will learn how to deploy a contract to Ethereum blockchain and get the contract address in future lessons. For the purpose of this chapter, I have deployed the [`WildPokemons` contract to the Rinkeby Testnet](https://rinkeby.etherscan.io/address/0x66f4804E06007630e1aF0a7B0b279e6F27A3FdE5)

Here is the contract address: [0x66f4804E06007630e1aF0a7B0b279e6F27A3FdE5](https://rinkeby.etherscan.io/address/0x66f4804E06007630e1aF0a7B0b279e6F27A3FdE5)

Using the contract address and the interface, you can make external calls to the interface functions (which was discussed in depth in [Chapter 8](https://vyper.fun/#/2/interfaces)):

```vyper
interface Car:
    def start() -> bool: nonpayable
    def getSpeed() -> uint256: view

@external
def Driver(some_address: address):
    Car(some_address).start()
```

## Handling Multiple Returns using Tuple Assignment

Unlike Python, you cannot directly declare [tuple types](https://www.tutorialspoint.com/python/python_tuples.htm) in Vyper. However, in certain cases you can use literal tuples during assignment. For example, when a function returns multiple values:

```vyper
@internal
def getNameAndAge() -> (String[32], int128):
    return "vasa", 22

@external
def getPerson():
    name: String[32] = empty(String[32])
    age: int128 = empty(int128)

    # the return value of `getNameAndAge` is assigned using a tuple
    (name, age) = self.getNameAndAge()

    # Can also skip the parenthesis
    name, age = self.getNameAndAge()
```

## Put it to the test

The `battle` function returns the following 4 arguments:

- `battleResult`: `bool`
- `newPokemonName`: `String[32]`
- `newPokemonDNA`: `uint256`
- `newPokemonHP`: `uint256`

1. Inside `battleWildPokemon`, define these 4 function variables and initialize them using the `empty` built-in function.

2. Define a `constant` `address` storage variable named `WILD_POKEMON` having the value `0x66f4804E06007630e1aF0a7B0b279e6F27A3FdE5`.

3. Inside `battleWildPokemon`, use `WildPokemons` and `WILD_POKEMON` to call the `battle` function that takes a single parameter of type `Pokemon`. This parameter can be obtained using the `trainerToPokemon` mapping by passing the 2 keys: `msg.sender` as the first key and `pokemonIndex` as the second key.

4. Use the function variables created in step 1 to create a tuple in order to handle/capture the multiple return values.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.10-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.10-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.9-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
