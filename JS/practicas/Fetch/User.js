export class User {
    constructor({username, email}){
        this.username = username;
        this.email = email;
    }
    getUserName(){
        return this.username;
    }

}