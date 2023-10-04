import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Topic } from "src/entities/topic.entity";
import { ApplicationEsception } from "src/exceptions";
import { Repository } from "typeorm";

@Injectable()
export class TopicService {

    constructor(
        @InjectRepository(Topic)
        private readonly repository: Repository<Topic>
    ) { }
    findAll(): Promise<Topic[]> {
        return this.repository.find();
    }

    findById(id: number): Promise<Topic> {
        return this.repository.findOneBy({ id: id })
    }

    create(user: Topic): Promise<Topic> {
        return this.repository.save(user);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id)
    }

    async update(id: number, topic: Topic): Promise<Topic> {

        const found = await this.repository.findOneBy({ id: id })

        if (!found) {
            throw new ApplicationEsception("Topic not found", 404)
        }

        //Garante que o objeto substituído terá o mesmo ID da requisição
        topic.id = id;

        return this.repository.save(topic);

    }
}