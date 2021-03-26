import { Get, JsonController, OnUndefined } from "routing-controllers";
import env from "../util/env";
import JsonResponseInterface from "../util/JsonResponseInterface";


@JsonController("/api/v1")
export class IndexController {
    @Get("/")
    @OnUndefined(404)
    index(): JsonResponseInterface {

        const t: string = env<string>("DB_HOST", "b");

        return {
            status: "ok",
            data: t
        };
    }
}