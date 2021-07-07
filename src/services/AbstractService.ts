import axios from "axios";
import env from "../util/env";
import CallableInterface from "./interfaces/CallableInterface";
import RequestInterface from "./interfaces/RequestInterface";
import ResponseInterface from "./interfaces/ResponseInterface";

interface InternalRequestInterface {
  call: string;
  app_key: string;
  app_secret: string;
  param: Array<RequestInterface>;
}

export default abstract class AbstractService implements CallableInterface {
  baseUrl: string = env<string>("BASE_URL");
  abstract endpoint: string;
  abstract method: string;

  get url(): string {
    return (this.baseUrl + this.endpoint).replace("v1//", "v1/");
  }

  async _call<R extends RequestInterface, T extends ResponseInterface>(params: R): Promise<T> {
    const internalParams: InternalRequestInterface = {
      call: this.method,
      app_key: env<string>("APP_KEY"),
      app_secret: env<string>("APP_SECRET"),
      param: [params],
    };

    return await (
      await axios.post<T>(this.url, internalParams, {
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).data;
  }
}
