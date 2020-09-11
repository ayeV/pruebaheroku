export class Entidad {
    Id:number;
    Sexo:string;
    Nombre:string;
    Apellido:string;

    FechaNac:string;
    
    FotoDePerfil:string;


    public constructor(Id:number,Sexo:string,Nombre:string,Apellido:string,FechaNac:string,FotoDePerfil:string  )
    {
        this.Id=Id;
        this.Sexo=Sexo;
        this.Nombre=Nombre;
        this.Apellido = Apellido;
        this.FechaNac= FechaNac;
        this.FotoDePerfil = FotoDePerfil;
    }
}
