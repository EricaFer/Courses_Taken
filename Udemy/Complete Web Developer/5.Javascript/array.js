// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.
array.splice(0,1)
alert(array)

// 2. Sort the array in order.
alert(array.sort())

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi")
alert(array)

// 4. Remove "Apples" from the array.
array.splice(0,1)
alert(array)

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse()
alert(array)

//you should have at the end:
//["Kiwi", "Oranges", "Blueberries"]

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

alert(array2[1][1])