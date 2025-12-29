export class CreateUser {

    // id;
    // name;
    // phone;
    // username;
    // website;
    // constructor(data){
    //     this.id = data.id;
    //     this.name = data.name;
    //     this.phone = data.phone;
    //     this.username = data.username;
    //     this.website = data.website;
    // }

    constructor({id, name, phone, username, website}){
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.username = username;
        this.website = website;
    }
    getDescripcion(){
        return `Name: ${this.name}`;
    }
}