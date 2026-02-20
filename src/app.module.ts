import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { RolesModule } from './modules/admin/roles/roles.module';
import { UsersModule } from './modules/admin/users/users.module';
import { PermisionsModule } from './modules/admin/permisions/permisions.module';

@Module({
  imports: [AuthModule, RolesModule, UsersModule, PermisionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
