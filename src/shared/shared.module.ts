import { Global, Module } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { PrismaService } from './prisma/prisma.service';

const providers = [ConfigService, PrismaService];

@Global()
@Module({
  providers,
  exports: [...providers],
})
export class SharedModule {}
