import { IsBoolean, IsDate, IsDateString, IsNotEmpty, IsString, isStrongPassword } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    user: string;

    @IsString()
    @IsNotEmpty()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    password: string;
    
    date_created: Date | string;
    
    date_updated?: Date | string;
    
    date_deleted?: Date | string;
    
    admin?: boolean;

    banned?: Date | string;
    
    deleted?: boolean;
}