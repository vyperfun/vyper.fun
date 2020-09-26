# Chapter 5: Create a Random Wild Pokemon

In the previous chapter, we initialized our contract with 20 pokemon names. Now, it's the time we battle ⚔️

## Funtion with multiple return values

A function can also return multiple return values like the following:

```vyper
struct Student:
    name: String[32]
    age: uint256

# a mapping between roll number and
# student details
studentList: HashMap[uint256, Student]

@external
def getPersonDetails(rollNumber: uint256) -> (String[32], uint256):
    student: Student = self.studentList[rollNumber]
    return student.name, student.age
```

## Put it to the test

1. Create an `@external` function named `battle` which has 1 input paramter: `pokemon` of type `Pokemon`. It returns 4 parameters: `bool`, `String[32]`, `uint256`, `uint256`.

2. Inside the `battle` function, create a `uint256` variable named `randomDNA`. Now call the `_generateRandomDNA` function and assign its output to `randomDNA`.

3. Inside the `battle` function, create a `String[32]` variable named `randomName`. Now to assign a value to `randomName`, we have to select a random name from `pokemonNames` by passing any `uint256` from `0` to `19` as key. We can generate a suitable random `uint256` by following operation: `randomDNA` modulus `NAME_MODULUS`.

4. Inside the `battle` function, create a `uint256` variable `randomHP`. Set its value equal to `randomDNA` modulus (`%`) `HP_LIMIT`.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.5-template-code.vy ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.5-finished-code.vy ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.4-finished-code.vy ':include :type=code embed-previous')

<!-- tabs:end -->
