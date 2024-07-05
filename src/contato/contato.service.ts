import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';

@Injectable()
export class ContatoService {

  constructor(private prisma: PrismaService){}
  async create(createContatoDto: CreateContatoDto) {
    const contato = await this.prisma.tbl_contato.create({
      data:{
        nome: createContatoDto.nome,
        email: createContatoDto.email,
        telefone: createContatoDto.telefone,
        assunto: createContatoDto.assunto,
      }
    })

    return contato;
    
  }

  async findAll() {
    const contatos = await this.prisma.tbl_contato.findMany()

    return contatos;
  }

  findOne(id: number) {
    return `This action returns a #${id} contato`;
  }

  update(id: number, updateContatoDto: UpdateContatoDto) {
    return `This action updates a #${id} contato`;
  }

  remove(id: number) {
    return `This action removes a #${id} contato`;
  }
}
