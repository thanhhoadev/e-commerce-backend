import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  createAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;

  // Nhiều sản phẩm thuộc về một danh mục
  @OneToMany(() => Product, (product) => product.category)
  products: Product[];

  // Mối quan hệ danh mục cha - con
  @ManyToOne(() => Category, (category) => category.subcategories)
  parentCategory: Category;

  // Một danh mục cha có thể có nhiều danh mục con
  @OneToMany(() => Category, (category) => category.parentCategory)
  subcategories: Category[];
}
