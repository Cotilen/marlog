import { Module } from '@nestjs/common';
import { ContatoService } from './contato.service';
import { ContatoController } from './contato.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ContatoController,],
  providers: [ContatoService,PrismaService ],
  imports:[ PrismaModule]
})
export class ContatoModule {}
