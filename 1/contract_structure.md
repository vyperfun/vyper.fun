# Chapter 1: Contracts

Starting with the absolute basics:

A contract is the fundamental building block of Ethereum applications — all variables and functions belong to a contract, and this will be the starting point of all your projects.

Vyper contracts are contained within files. Each file contains exactly
one contract.

## Version Pragma

Vyper supports a version pragma to ensure that a contract is only
compiled by the intended compiler version, or range of versions. Version
strings use [NPM](https://docs.npmjs.com/misc/semver) style syntax.

For the scope of this tutorial, we'll want to compile our smart contracts with any compiler version in the range of `0.2.0` (inclusive) to `0.3.0` (exclusive). It looks like this:

```vyper
# @version >=0.2.0 <0.3.0
```

## Put it to the test

1. In the box to the right, let's create a contract that can be compiled by any compiler version in the range of `0.2.4` (inclusive) to `0.3.0` (exclusive).

2. When you're finished, you can switch from `🛠 Your code` tab to the `✅ Solution` tab to check if your answer matches with the solution **(Tabs are on the bottom right of the screen)**.

3. Check the difference between `🛠 Your code` and `✅ Solution` in the `𝌡 Difference` tab.

4. If you have any questions just click `Open Chat` and ask in the chat 😊

Congratulations 🎉

You just completed Chapter 1. Tweet about it to share your amazing feat!

[![Tweet](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fvyper.fun%2F%23%2F1%2Fcontract_structure)](https://twitter.com/intent/tweet?hashtags=VyperFun&ref_src=twsrc%5Etfw&text=I%20just%20completed%20Chapter%201%20of%20%40VyperFun%3A%20Create%20your%20Pok%C3%A9mon%20on%20blockchain%20using%20%40vyperlang%20%F0%9F%98%8E%20&tw_p=tweetbutton&url=https%3A%2F%2Fvyper.fun%2F%23%2F1%2Fcontract_structure)

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.1-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.1-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.0-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
