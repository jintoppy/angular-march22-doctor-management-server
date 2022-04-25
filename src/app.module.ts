import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DoctorsModule } from './doctors/doctors.module';

@Module({
  imports: [AuthModule, UsersModule, DoctorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
