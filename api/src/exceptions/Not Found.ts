import { HttpException } from "exceptions/HttpException";

export class NotFound extends HttpException {
    constructor() {
        super(404, "Not Found");
    }
}
