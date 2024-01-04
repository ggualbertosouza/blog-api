import { HttpException } from "exceptions/HttpException";

export class NotFound extends HttpException {
    constructor(message: string) {
        super(404, message);
    }
}
