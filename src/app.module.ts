import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContatoModule } from './contato/contato.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ContatoModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
