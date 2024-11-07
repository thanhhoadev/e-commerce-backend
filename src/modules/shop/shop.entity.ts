import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from '../user/user.entity';
import { Product } from '../product/product.entity';
import { Follow } from '../follow/follow.entity';

@Entity()
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @Column()
  rating: number;

  @Column({ default: false })
  isVerify: boolean;

  @Column({ nullable: true })
  description: string;

  @Column({ default: 0 })
  follower: number;

  @Column()
  totalProduct: number;

  @Column()
  address: string;

  @Column()
  typeBusiness: number;

  @Column()
  taxCode: string;

  @Column()
  businessRegistrationCetificate: string;

  @Column()
  ownerCCCDNumber: string;

  @Column()
  ownerCCCDImgFront: string;

  @Column()
  ownerCCCDImgBack: string;

  @Column()
  isDeleted: boolean;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @OneToMany(() => Product, (product) => product.shop)
  products: Product[];

  @ManyToOne(() => User, (user) => user.owner)
  user: User;

  @OneToMany(() => Follow, (follow) => follow.shop)
  follows: Follow[];
}
