import { HttpException } from "exceptions/HttpException";

export class BadRequest extends HttpException {
    constructor() {
        super(400, "Bad Request");
    }
}
