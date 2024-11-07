import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database.config';
import { AuthModule } from './modules/auth/auth.module'
import { AddressModule } from './modules/address/address.module'
import { CartModule } from './modules/cart/cart.module'
import { CartItemModule } from './modules/cartitem/cartitem.module'
import { CategoryModule } from './modules/category/category.module';
import { FavouriteModule } from './modules/favorite/favourite.module';
import { FollowModule } from './modules/follow/follow.module';
import { ImageProductModule } from './modules/imageproduct/imageproduct.module';
import { ImageProductVariantModule } from './modules/imageproductvariant/imageproductvariant.module';
import { ImagereviewModule } from './modules/imagereview/imagereview.module';
import { OrderModule } from './modules/order/order.module';
import { OrderItemModule } from './modules/orderitem/orderitem.module';
import { PaymentModule } from './modules/payment/payment.module';
import { ProductModule } from './modules/product/product.module';
import { ProductVariantModule } from './modules/productvariant/productvariant.module';
import { ReviewModule } from './modules/review/review.module';
import { ShopModule } from './modules/shop/shop.module';
import { UserModule } from './modules/user/user.module';
import 'dotenv/config'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(databaseConfig),
    AuthModule,
    UserModule,
    ShopModule,
    ReviewModule,
    ProductModule,
    ProductVariantModule,
    PaymentModule,
    OrderItemModule,
    OrderModule,
    ImagereviewModule,
    ImageProductVariantModule,
    ImageProductModule,
    FollowModule,
    FavouriteModule,
    CategoryModule,
    CartItemModule,
    CartModule,
    AddressModule
  ],
})
export class AppModule {}
