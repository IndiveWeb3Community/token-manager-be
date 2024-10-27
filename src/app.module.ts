import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './shared/config/config.service';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
