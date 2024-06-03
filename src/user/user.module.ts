import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { WalletModule } from 'src/wallet/wallet.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule, WalletModule],
})
export class UserModule {}
