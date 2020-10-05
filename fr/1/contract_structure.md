`<!-- Add translation for the following page: https://vyper.fun/#/1/contract_structure
Do NOT change the code below. The below code runs the code editor -->

# Chapitre 1 : Les contrats

Commmençons par les bases absolues :

Un contrat est la pierre angulaire des applications Ethereum - toutes les variables et fonctions appartiennent à un contrat, et ce sera le point de départ de tous vos projets.

Les contrats Vyper sont contenus dans des fichiers. Chaque fichier contient exactement un contrat.

## Version Pragma

Vyper prend en charge un pragma de version pour garantir qu'un contrat n'est compilé que par la version de compilateur ou la plage de versions prévue. Les chaînes de version utilisent la syntaxe de style [NPM](https://docs.npmjs.com/misc/semver).

Dans le cadre de ce tutoriel, nous allons compiler nos contrats intelligents avec n'importe quelle version du compilateur comprise entre `0.2.0` (inclus) et `0.3.0` (exclus). Cela ressemble à ceci :

```vyper
# @version >=0.2.0 <0.3.0
```

## Faites le test

1. Dans la zone de droite, créons un contrat qui peut être compilé par n'importe quelle version du compilateur dans la plage de `0.2.4` (inclus) à `0.3.0` (exclusif).

2. Lorsque vous avez terminé, vous pouvez passer de l'onglet `🛠 Your code` à l'onglet `✅ Solution` pour vérifier si votre réponse correspond à la solution **(Les onglets sont en bas à droite de l'écran)**.

3. Vérifiez la différence entre `🛠 Your code` et `✅ Solution` dans l'onglet `𝌡 Difference`.

4. Si vous avez des questions, cliquez simplement sur `Open Chat` et posez-les dans le chat 😊

Félicitations 🎉

Vous venez de terminer le chapitre 1. Tweetez à ce sujet pour partager votre incroyable exploit !

[![Tweet](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fvyper.fun%2F%23%2F1%2Fcontract_structure)](https://twitter.com/intent/tweet?hashtags=VyperFun&ref_src=twsrc%5Etfw&text=I%20just%20completed%20Chapter%201%20of%20%40VyperFun%3A%20Create%20your%20Pok%C3%A9mon%20on%20blockchain%20using%20%40vyperlang%20%F0%9F%98%8E%20&tw_p=tweetbutton&url=https%3A%2F%2Fvyper.fun%2F%23%2F1%2Fcontract_structure)

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.1-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.1-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.0-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
