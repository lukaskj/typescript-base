import RequestInterface from "./RequestInterface";
import ResponseInterface from "./ResponseInterface";

export default interface CallableInterface {
  baseUrl: string;
  endpoint: string;
  method: string;
  _call<R extends RequestInterface, T extends ResponseInterface>(params: R): Promise<T>;
}
