<!-- Add translation for the following page: https://vyper.fun/#/1/contract_structure
Do NOT change the code below. The below code runs the code editor -->

# 第一章：契约（Contracts）

让我们从最基本的开始：

一份契约（Contract）是当创建以太坊（Ethereum）应用程序块时的基本 —— 所有变量以及函数都将属于一份契约，且它会成为你所有专案的起点。

Vyper的契约包含在文件中，每份文件只会拥有一份契约。

## 版本编译指示

Vyper支持一个版本编译指示，以确保一份契约只会被一个预期的编译器版本或一些版本范围编译。版本字串跟从[NPM](https://docs.npmjs.com/misc/semver)语法风格。

在此教学中，我们想用任何在`0.2.0`（含）到`0.3.0`（不含）之中的编译器版本来编译我们聪明的契约。它看起来就像是：

```vyper
# @version >=0.2.0 <0.3.0
```

## 来试试看吧

1. 在右侧的框中，让我们来创建一份可以被任何在`0.2.4`（含）到`0.3.0`（不含）之中的编译器版本编译的契约。

2. 当你完成时，你可以从`🛠 你的代码`标签转到`✅ 答案`标签来看看你的答案是不是与标准答案相同（标签在荧幕的右下方）.

3. 利用`𝌡 区别`标签来查看`🛠 你的代码`与`✅ 答案`的分别。

4. 如你有任何疑问，你可以在`打开聊天`来在聊天框里询问 😊

恭喜🎉

你刚刚完成了第一章，来分享一下你的壮举吧！

[![Tweet](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fvyper.fun%2F%23%2F1%2Fcontract_structure)](https://twitter.com/intent/tweet?hashtags=VyperFun&ref_src=twsrc%5Etfw&text=I%20just%20completed%20Chapter%201%20of%20%40VyperFun%3A%20Create%20your%20Pok%C3%A9mon%20on%20blockchain%20using%20%40vyperlang%20%F0%9F%98%8E%20&tw_p=tweetbutton&url=https%3A%2F%2Fvyper.fun%2F%23%2F1%2Fcontract_structure)

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/1/1.1-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/1/1.1-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/1/1.0-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
