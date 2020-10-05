# Capitolo 1: Contratti

Iniziamo dalle basi:

Un contratto è il mattone fondamentale delle applicazioni Ethereum - tutte le variabili e le funzioni appartengono a un contratto. Il punto di partenza di ogni tuo progetto sarà un contratto.

I contratti in Vyper sono contenuti in un file. Ciascun file contiene uno e un solo contratto.

## Version Pragma

Vyper supporta un version pragma per far sì che un contratto sia compilato
soltanto da un compilatore specifico per quella versione o intervallo di versioni.
I codici di versione seguono la sintassi NPM (https://docs.npmjs.com/misc/semver).

In questo tutorial compileremo i nostri contratti con un compilatore per versioni dalla `0.2.0` (inclusa) alla `0.3.0` (esclusa). La specifica è:

```vyper
# @version >=0.2.0 <0.3.0
```

## Mettilo alla prova

1. Nella casella a destra, creiamo un contratto che può essere compilato da qualsiasi versione del compilatore nell'intervallo da `0.2.4` (incluso) a `0.3.0` (esclusivo).

2. Quando hai fatto, passa dalla scheda `🛠 Your code` alla scheda `✅ Solution` per verificare se la tua risposta è corretta. **(Le schede si trovano in basso a destra)**.

3. Controlla le differenze tra `🛠 Your code` e `✅ Solution` nella scheda `𝌡 Difference`.

4. Se hai domande, apri `Apri Chat` e chiedi in chat 😊

Congratulazioni! 🎉

Hai appena completato il capitolo 1. Pubblica un tweet e comunica a tutti la tua grande impresa!

[![Tweet](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fvyper.fun%2F%23%2F1%2Fcontract_structure)](https://twitter.com/intent/tweet?hashtags=VyperFun&ref_src=twsrc%5Etfw&text=I%20just%20completed%20Chapter%201%20of%20%40VyperFun%3A%20Create%20your%20Pok%C3%A9mon%20on%20blockchain%20using%20%40vyperlang%20%F0%9F%98%8E%20&tw_p=tweetbutton&url=https%3A%2F%2Fvyper.fun%2F%23%2F1%2Fcontract_structure)

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.1-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.1-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.0-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
