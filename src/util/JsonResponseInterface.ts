/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface JsonResponseInterface {
    status: "ok" | "error";
    data: any;
}