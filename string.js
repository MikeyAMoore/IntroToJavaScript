var someUser = {
    name: 'Blank'
};

function changeName(user) {
    return someUser.name = 'Jordan';
}

changeName(someUser);

console.log(someUser)