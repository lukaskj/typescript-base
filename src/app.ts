import "reflect-metadata";

import {createExpressServer} from "routing-controllers";
import env from "./util/env";

const baseDir = __dirname;

const port: number = env<number>("PORT", 3000);

const app = createExpressServer({
   controllers: [baseDir + "/controllers/*{.js,.ts}"],
   middlewares: [baseDir + "/middlewares/*{.js,.ts}"],
});

app.listen(port);

console.log(`Server is running on port ${port}`);
