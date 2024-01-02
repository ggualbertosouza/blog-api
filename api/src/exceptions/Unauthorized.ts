import { HttpException } from "exceptions/HttpException";

export class Unauthorized extends HttpException {
    constructor() {
        super(401, "Unauthorized");
    }
}
