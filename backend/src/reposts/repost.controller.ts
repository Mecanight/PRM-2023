import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { Topic } from "src/topics/topic.entity";
import { TopicService } from "src/topics/topic.service";
import { RepostService } from "./repost.service";


@UseInterceptors(ClassSerializerInterceptor)
@Controller('reposts')
export class RepostController {
    constructor(
        private readonly repostService: RepostService,
        private readonly topicService: TopicService
    ) { }

    @UseGuards(AuthGuard)
    @Get()
    async filterByTopic(@Query() query): Promise<Topic[]> {

        if (!query?.topic) {
            throw new HttpException('Tópico não informado', HttpStatus.BAD_REQUEST)
        }

        //Busco o tópico
        const found = await this.topicService.findById(query.topic);

        if (!found) {
            throw new HttpException('Tópico não encontrado', HttpStatus.BAD_REQUEST)
        }

        return this.repostService.findByTopic(found);
    }
}