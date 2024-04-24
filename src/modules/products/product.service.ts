import { Injectable, Param } from "@nestjs/common";
import { ProductDto } from "src/dto/product.dto";
import { Product } from "src/models/product.model";

@Injectable()
export class ProductService {

    private products: Product[] = [
        {
            id: 1,
            categoryId: 2,
            price: 8000,
            productName: "Keyboard"
        },
        {
            id: 2,
            categoryId: 3,
            price: 9000,
            productName: "Nine dev"
        }
    ]

    getProducts(): Product[] {
        return this.products;
    }

    createProduct(productDto: ProductDto): ProductDto {
        const product: Product = {
            id: Math.random(),
            ...productDto
        }
        this.products.push(product);
        return product;
    }

    detailProduct(id: number): Product {
        return this.products.find(item => item.id === Number(id));
    }

    updateProduct(productDto: ProductDto, id: number): Product {
        const indexProduct = this.products.findIndex(item => item.id === Number(id));
        this.products.splice(indexProduct, 1, {
            ...this.products[indexProduct],
            ...productDto,
        })
        return this.products[indexProduct];
    }

    deleteProduct(id: number): boolean {
        const indexProduct = this.products.findIndex(item => item.id === Number(id));
        if (indexProduct !== -1) {
            this.products.splice(indexProduct, 1);
            return true;
        }
        return false;
    }
}