import { HttpException } from "exceptions/HttpException";

export class Unauthorized extends HttpException {
    constructor(message: string) {
        super(401, message);
    }
}
