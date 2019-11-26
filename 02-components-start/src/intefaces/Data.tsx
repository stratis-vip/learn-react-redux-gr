import { StatusCodes } from '.'
export interface Data<T> {
    status: StatusCodes;
    code: number;
    data: [T | []];
    error?: string;
}
