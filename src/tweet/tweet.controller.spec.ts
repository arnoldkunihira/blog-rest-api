import { Test, TestingModule } from "@nestjs/testing";
import { TweetController } from "./tweet.controller";
import { TweetService } from "./tweet.service";

describe("PostController", () => {
    let controller: TweetController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TweetController],
            providers: [TweetService]
        }).compile();

        controller = module.get<TweetController>(TweetController);
    });

    it("should be defined", () => {
        expect(controller).toBeDefined();
    });
});
