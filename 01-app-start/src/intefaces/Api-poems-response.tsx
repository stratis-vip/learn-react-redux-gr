import {Poem} from './poem'
import {StatusCodes} from './status-code'

export interface ApiPoemsResponse {
    status: StatusCodes
    code: number
    data: Array<Poem> | []
}