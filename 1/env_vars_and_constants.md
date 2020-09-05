# Environment Variables and Constants

## Environment Variables

Environment variables always exist in the namespace and are primarily
used to provide information about the blockchain or current transaction.

### Block and Transaction Properties

| Name               | Type      | Value                                       |
| ------------------ | --------- | ------------------------------------------- |
| `block.coinbase`   | `address` | Current block miner’s address               |
| `block.difficulty` | `uint256` | Current block difficulty                    |
| `block.number`     | `uint256` | Current block number                        |
| `block.prevhash`   | `bytes32` | Equivalent to `blockhash(block.number - 1)` |
| `block.timestamp`  | `uint256` | Current block epoch timestamp               |
| `chain.id`         | `uint256` | Chain ID                                    |
| `msg.gas`          | `uint256` | Remaining gas                               |
| `msg.sender`       | `address` | Sender of the message (current call)        |
| `msg.value`        | `uint256` | Number of wei sent with the message         |
| `tx.origin`        | `address` | Sender of the transaction (full call chain) |

> **note**
>
> `msg.sender` and `msg.value` can only be accessed from external
> functions. If you require these values within a private function they
> must be passed as parameters.

### The self Variable

`self` is an environment variable used to reference a contract from within itself. Along with the normal [address](https://vyper.readthedocs.io/en/stable/types.html#address) members, `self` allows you to read and write to state variables and to call private functions within the contract.

| Name           | Type      | Value                      |
| -------------- | --------- | -------------------------- |
| `self`         | `address` | Current contract's address |
| `self.balance` | `uint256` | Current contract's balance |

#### Accessing State Variables

`self` is used to access a contract's [state variables](https://vyper.readthedocs.io/en/stable/structure-of-a-contract.html#structure-state-variables), as shown in the following example:

```python
state_var: uint256

@external
def set_var(value: uint256) -> bool:
    self.state_var = value
    return True

@external
@view
def get_var() -> uint256:
    return self.state_var
```

#### Calling Internal Functions

`self` is also used to call [internal functions](https://vyper.readthedocs.io/en/stable/control-structures.html#structure-functions-internal) within a contract:

```python
@internal
def _times_two(amount: uint256) -> uint256:
    return amount * 2

@external
def calculate(amount: uint256) -> uint256:
    return self._times_two(amount)
```

## Built In Constants

Vyper has a few convenience constants builtin.

| Name            | Type      | Value                                                                |
| --------------- | --------- | -------------------------------------------------------------------- |
| `ZERO_ADDRESS`  | `address` | `0x0000000000000000000000000000000000000000`                         |
| `EMPTY_BYTES32` | `bytes32` | `0x0000000000000000000000000000000000000000000000000000000000000000` |
| `MAX_INT128`    | `int128`  | `2**127 - 1`                                                         |
| `MIN_INT128`    | `int128`  | `-2**127`                                                            |
| `MAX_DECIMAL`   | `decimal` | `(2**127 - 1)`                                                       |
| `MIN_DECIMAL`   | `decimal` | `(-2**127)`                                                          |
| `MAX_UINT256`   | `uint256` | `2**256 - 1`                                                         |

## Custom Constants

Custom constants can be defined at a global level in Vyper. To define a
constant make use of the `constant` keyword.

```python
TOTAL_SUPPLY: constant(uint256) = 10000000
total_supply: public(uint256)

@external
def __init__():
    self.total_supply = TOTAL_SUPPLY
```

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.1-template-code.vy ':include :type=code embed-template')

<!-- tabs:end -->
