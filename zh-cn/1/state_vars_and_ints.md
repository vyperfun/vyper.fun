<!-- Add translation for the following page: https://vyper.fun/#/1/state_vars_and_ints
Do NOT change the code below. The below code runs the code editor -->

# 第二章：状态变量，整数及常量

做得不错！现在我们已经摸索过契约，让我们来学习一下Vyper是如何处理变量吧。

状态变量（State variables）会被永久储存在契约的存储中，这表示它们会被写入以太坊区块链（Ethereum blockchain）。想象一下它们就像是在写入进一个资料库。

### 例子

```vyper
# @version >=0.2.4 <0.3.0

# 这会被永久储存到区块链中
storedData: int128
```

在这个例子中， 我们创建了一个名叫`storedData`的[`int128`](https://vyper.readthedocs.io/en/stable/types.html#signed-integer-128-bit)。它的*默认值*为`1`。

## 无符号整数：`uint256`

`uint256`资料类型是一个无符号整数（占256位元），意味着他的值一定不是负数。

另外也有带有符号整数的`int128`（占128位元）资料类型（它可以储存正数及负数）。

### 例子

```vyper
# @version >=0.2.4 <0.3.0

# 这会创建一个值为10的uint256常量（Constant）
TEN: constant(uint256) = 10
```

在这个例子中，我们创建了一个名为`TEN`的`uint256` `常量`并把它的值设为`10`。

## 来试试看吧

我们的宝可梦DNA将会被判断成一串16位的数字。

在右侧的编码范围，声明一个名为`DNA_DIGITS`的`uint256` `常量`，并把它的值设置为`16`。

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/1/1.2-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.2-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.1-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
