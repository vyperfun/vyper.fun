# Structure of a Contract

Vyper contracts are contained within files. Each file contains exactly
one contract.

This section provides a quick overview of the types of data present
within a contract, with links to other sections where you can obtain
more details.

## Version Pragma

Vyper supports a version pragma to ensure that a contract is only
compiled by the intended compiler version, or range of versions. Version
strings use [NPM](https://docs.npmjs.com/misc/semver) style syntax.

```python
# @version ^0.2.0
```

In the above example, the contract only compiles with Vyper versions
`0.2.x`.

## State Variables

State variables are values which are permanently stored in contract
storage. They are declared outside of the body of any functions, and
initially contain the [default value](https://vyper.readthedocs.io/en/stable/types.html#types-initial) for their type.

```python
storedData: int128
```

State variables are accessed via the [self](https://vyper.readthedocs.io/en/stable/constants-and-vars.html#constants-self) object.

```python
self.storedData = 123
```

See the documentation on [Types](https://vyper.readthedocs.io/en/stable/types.html#types) or [Scoping and Declarations](https://vyper.readthedocs.io/en/stable/scoping) for more information.

## Functions

Functions are executable units of code within a contract.

```python
@external
def bid():
    ...
```

Functions may be called internally or externally depending on their [visibility](https://vyper.readthedocs.io/en/stable/control-structures.html#function-visibility). Functions may accept input arguments and return variables in order to pass values between them.

See the [Functions](https://vyper.readthedocs.io/en/stable/control-structures.html#control-structures-functions) documentation for more information.

## Events

Events provide an interface for the EVM's logging facilities. Events may
be logged with specially indexed data structures that allow clients,
including light clients, to efficiently search for them.

```python
event Payment:
    amount: int128
    sender: indexed(address)

total_paid: int128

@external
@payable
def pay():
    self.total_paid += msg.value
    log Payment(msg.value, msg.sender)
```

See the [Event](https://vyper.readthedocs.io/en/stable/event-logging.html#event-logging) documentation for more information.

## Interfaces

An interface is a set of function definitions used to enable calls
between smart contracts. A contract interface defines all of that
contract's externally available functions. By importing the interface,
your contract now knows how to call these functions in other contracts.

Interfaces can be added to contracts either through inline definition,
or by importing them from a seperate file.

```python
interface FooBar:
    def calculate() -> uint256: view
    def test1(): nonpayable
```

```python
from foo import FooBar
```

Once defined, an interface can then be used to make external calls to a
given address:

```python
@external
def test(some_address: address):
    FooBar(some_address).calculate()
```

See the [Interfaces](https://vyper.readthedocs.io/en/stable/interfaces.html#interfaces) documentation for more information.

## Structs

A struct is custom defined type that can allows you to group several
variables together:

```python
struct MyStruct:
    value1: int128
    value2: decimal
```

See the [Structs](https://vyper.readthedocs.io/en/stable/types.html#types-struct) documentation for more information.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.1-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.1-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.0-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
