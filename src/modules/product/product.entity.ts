import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Shop } from '../shop/shop.entity';
import { Category } from '../category/category.entity';
import { ImageProduct } from '../imageproduct/imageproduct.entity';
import { ProductVariant } from '../productvariant/productvariant.entity';
import { Review } from '../review/review.entity';
import { Favorite } from '../favorite/favourite.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  rating: number;

  @Column({ nullable: true })
  status: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Shop, (shop) => shop.products)
  shop: Shop;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;

  @OneToMany(() => ImageProduct, (imageProducts) => imageProducts.product)
  images: ImageProduct[];

  @OneToMany(() => ProductVariant, (productVariant) => productVariant.product)
  productVariants: ProductVariant[];

  @OneToMany(() => Review, (review) => review.product)
  reviews: Review[];

  @OneToMany(() => Favorite, (favorite) => favorite.product)
  favorites: Favorite[];
}
