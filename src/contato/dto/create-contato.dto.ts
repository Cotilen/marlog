import { IsNotEmpty, IsString } from "class-validator"

export class CreateContatoDto {

    @IsString()
    @IsNotEmpty()
    nome: string

    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    telefone: string

    @IsString()
    @IsNotEmpty()
    assunto: string
}
