# Built in Functions

Vyper provides a collection of built in functions available in the
global namespace of all contracts.

## Bitwise Operations

## Chain Interaction

> **note**
>
> It is very important that the deployed contract at `target` is code
> you know and trust, and does not implement the `selfdestruct` opcode
> as this will affect the operation of the forwarder contract.
>
> > - `target`: Address of the contract to duplicate
> > - `value`: The wei value to send to the new contract address
> >   (Optional, default 0)
> >
> > Returns the address of the duplicated contract.
> >
> > ```python
> > @external
> > def foo(_target: address) -> address:
> >     return create_forwarder_to(_target)
> > ```

## Cryptography

## Data Manipulation

## Math

## Utilities

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.1-template-code.vy ':include :type=code embed-template')

<!-- tabs:end -->
