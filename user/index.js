class User{
    constructor(user){
        this.user = user;
    }

    hello = () => {
        console.log('Hello ' + this.user);
    }
}

module.exports = User;