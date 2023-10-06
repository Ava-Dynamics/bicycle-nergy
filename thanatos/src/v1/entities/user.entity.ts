import { User } from '@prisma/client';
import { Exclude, Transform } from 'class-transformer';
import { IsEmail, IsOptional, IsBoolean } from 'class-validator';

export class UserEntity implements User {
    @IsEmail()
    @Transform(email => email.value.toLowerCase())
    email: string

    @IsOptional()
    name: string | null

    @Exclude()
    @IsOptional()
    password: string

    @IsBoolean()
    @IsOptional()
    actived: boolean

    username: string

    @Exclude()
    id: number

    @IsOptional()
    image: string

    constructor(partial: Partial<User>) {
        Object.assign(this, partial);
    }
    
}
