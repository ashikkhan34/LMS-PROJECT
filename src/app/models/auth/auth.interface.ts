export interface ILoginData {
    email:string,
    password:string
}

export interface IRegisterData {
    id:string,
    name:string,
    email:string,
    password:string,
    role?:string
}