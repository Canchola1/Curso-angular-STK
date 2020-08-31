export class Usuario{
    constructor(
        public _id: string,
        public nickname: string,
        public nombre: string,
        public apellidos: string,
        public correo : string,
        public contrasenia: string
    ){

    }
}