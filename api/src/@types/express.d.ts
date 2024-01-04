import { IPayload } from "../middlewares/Auth";

declare global {
    namespace Express {
        export interface Request {
            payload: IPayload;
        }
    }
}
