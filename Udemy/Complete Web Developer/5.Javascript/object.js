// Create an object and an array which we will use in our facebook exercise.

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var user = {
    username: 'Erica',
    password: '1972'
}

alert(user.username)

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [user]

alert(database[0].username)

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsfeed = [
    {
        username:'A',
        timeline:'1'
    },
    {
        username:'B',
        timeline:'2'
    },
    {
        username:'C',
        timeline:'3'
    }
]

alert(newsfeed[0].username)
