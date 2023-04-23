import { ResourceError } from '../../errors/index.js';

export class OperatorNotFound extends ResourceError {
    constructor () {
        const message = 'We were unable to locate the specified operator.';
        const code = 'OPERATOR_NOT_FOUND';
        const statusCode = 404;
        super( { message, statusCode, code } );
    }
}
