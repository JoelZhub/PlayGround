export class CreateUserPost {

    constructor(title, body, userId){

        this.title = title;
        this.body = body;
        this.userId = userId;
    }
    getName(){
        return `The title is: ${this.title}`;
    }
}