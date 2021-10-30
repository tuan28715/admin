export interface User {
    uid: string,
    username: string,
    password: string,
    email: string,
    imagePath: string,
    isAdmin: boolean,
    metadata:{
        created: string,
        update: string
    }
}