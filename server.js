class User{
    constructor(user){
        this.user = user;
    }

    hello = () => {
        console.log('Hello ' + this.user);
    }
}

const user1 = new User('Vasya');
const user2 = new User('Egor');

user1.hello();
user2.hello();