import { HttpException } from "exceptions/HttpException";

export class BadRequest extends HttpException {
    constructor(message:string) {
        super(400, message);
    }
}
