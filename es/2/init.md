# Capítulo 4: Función de inicio (Init Function)

Nuestro contrato creara pokemones aleatorios con los cuales puede luchar un entrenador. Entonces, necesitamos una lista de nombres de pokemones con los cuales peleara un entrenador.

Necesitamos una forma de almacenar una lista de nombres de pokemones una vez inicializamos nuestro contrato. Para ello utilizaremos la función **\_\_init\_\_**.

## La función \_\_init\_\_

**\_\_init\_\_** es una función de inicialización especial que solo se puede llamar al momento de implementar un contrato. Se puede utilizar para establecer valores iniciales para las variables de almacenamiento. Un caso común es establecer una variable de propietario con el creador del contrato:

```vyper
owner: address

@external
def __init__():
    self.owner = msg.sender
```

No puedes hacer llamadas a otro contrato en la función \_\_init\_\_.

## Ponlo a prueba

Vamos a agregar una lista de 20 pokemones en la función \_\_init\_\_.

1. Define la función \_\_init\_\_.

2. Agrega el decorador `@external` a la función \_\_init\_\_.

3. Agrega el siguiente código en el cuerpo de la función \_\_init\_\_:

```vyper
    self.pokemonNames[0] = "Bulbasaur"
    self.pokemonNames[1] = "Charmander"
    self.pokemonNames[2] = "Charizard"
    self.pokemonNames[3] = "Squirtle"
    self.pokemonNames[4] = "Blastoise"
    self.pokemonNames[5] = "Pidgey"
    self.pokemonNames[6] = "Raticate"
    self.pokemonNames[7] = "Pikachu"
    self.pokemonNames[8] = "Raichu"
    self.pokemonNames[9] = "Venomoth"
    self.pokemonNames[10] = "Arcanine"
    self.pokemonNames[11] = "Abra"
    self.pokemonNames[12] = "Machop"
    self.pokemonNames[13] = "Golem"
    self.pokemonNames[14] = "Onix"
    self.pokemonNames[15] = "Hypno"
    self.pokemonNames[16] = "Rhydon"
    self.pokemonNames[17] = "Kangaskhan"
    self.pokemonNames[18] = "Scyther"
    self.pokemonNames[19] = "Mewtwo"
```

<!-- tabs:start -->

#### ** Template **

[embedded-code](../../assets/2/2.4-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../../assets/2/2.4-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../../assets/2/2.3-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
