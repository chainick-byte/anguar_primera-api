export class Usuario {

    id_usuario: string;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    email: string;
    created_at: string;
    phone: string;
    token: string;
    imagen: string;

    constructor(nuevoId_suario:string,
                nuevoNombre:string,
                nuevoPrimerApellido:string,
                nuevoSegundoApellido:string,
                nuevoEmail:string,
                nuevoCreated:string,
                nuevoPhone:string,
                nuevoToken:string,
                nuevoImagen:string            ) {
        this.id_usuario=nuevoId_suario;
        this.primerApellido=nuevoPrimerApellido;
        this.segundoApellido=nuevoSegundoApellido;
        this.nombre=nuevoNombre;
        this.email=nuevoEmail;
        this.created_at=nuevoCreated;
        this.phone=nuevoPhone;
        this.token=nuevoToken;
        this.imagen=nuevoImagen;
     }
    
}
