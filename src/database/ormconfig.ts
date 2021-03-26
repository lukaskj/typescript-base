import { ConnectionOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import env from "../util/env";
const config: ConnectionOptions = {
    name: "default",
    type: "mysql",
    host: env<string>("DB_HOST", "127.0.0.1"),
    port: env<number>("DB_PORT", 3306),
    username: env<string>("DB_USERNAME", "root"),
    password: env<string>("DB_PASSWORD", "mysql"),
    database: env<string>("DB_DATABASE", "segagro-int"),
    synchronize: true,
    logging: false,
    namingStrategy: new SnakeNamingStrategy(),
    entities: [
        __dirname + "/../entities/**/*{.ts,.js}"
    ],
    migrations: [
        __dirname + "/database/migrations/**/*{.ts,.js}"
    ],
    subscribers: [
        __dirname + "/../subscribers/**/*{.ts,.js}"
    ],
    cli: {
        entitiesDir: "src/entities",
        migrationsDir: "src/database/migrations",
        subscribersDir: "src/subscribers"
    }
};

export default config;