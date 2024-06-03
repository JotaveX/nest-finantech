import { wallet } from '@prisma/client';
import { IsDate, IsEmail, IsNotEmpty, IsString, IsStrongPassword, Length} from 'class-validator';
import { Wallet } from 'src/wallet/entities/wallet.entity';

export class createUserDto {
    @IsString()
    @Length(10)
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    })
    @IsNotEmpty()
    password: string;
    
    @IsNotEmpty()
    @IsDate()
    birth: Date;
}
