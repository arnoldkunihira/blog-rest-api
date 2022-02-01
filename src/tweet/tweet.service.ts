import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTweetDto } from "./dto/create-tweet.dto";
import { UpdateTweetDto } from "./dto/update-tweet.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Tweet } from "./entities/tweet.entity";

@Injectable()
export class TweetService {
    constructor(@InjectRepository(Tweet) private readonly repository: Repository<Tweet>) {}

    create(createTweetDto: CreateTweetDto): Promise<Tweet> {
        const tweet = this.repository.create(createTweetDto);
        return this.repository.save(tweet);
    }

    findAll(): Promise<Tweet[]> {
        return this.repository.find();
    }

    async findOne(id: number): Promise<Tweet> {
        const tweet = await this.repository.findOne(id);
        if (!tweet) {
            throw new NotFoundException(`Tweet with id ${id} not found`);
        }
        return tweet;
    }

    async update(id: number, updateTweetDto: UpdateTweetDto): Promise<Tweet> {
        const tweet = await this.repository.preload({ id: id, ...updateTweetDto });

        if (!tweet) {
            throw new NotFoundException(`Tweet with id ${id} not found.`);
        }

        return this.repository.save(tweet);
    }

    async remove(id: number): Promise<Tweet> {
        const tweet = await this.findOne(id);
        return this.repository.remove(tweet);
    }
}
