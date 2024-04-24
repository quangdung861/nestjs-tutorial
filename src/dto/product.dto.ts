import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class ProductDto {
    id?: number;

    @IsNotEmpty()
    categoryId?: number;

    @MinLength(5, { message: 'This field must be then 5 character' })
    productName?: string;

    @IsNumber()
    price?: number;
}