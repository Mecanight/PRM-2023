import { Topic } from "src/topics/topic.entity";
import { User } from "src/users/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity('topic_user_comment')
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, length: 250 })
    content: string;

    @ManyToOne(() => User, { eager: true, nullable: false })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Topic, { eager: true, nullable: false })
    @JoinColumn({ name: 'topic_id' })
    topic: Topic;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}