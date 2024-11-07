import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Review } from "../review/review.entity";

@Entity()
export class ImageReview{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: "" })
    url: string;

    @ManyToOne(() => Review, (review) => review.images)
    review: Review;

}