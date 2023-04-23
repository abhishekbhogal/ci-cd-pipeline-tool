export class ResourceError extends Error {
    message;
    code;
    statusCode;

    constructor ( {
        message
        , code
        , statusCode = 500
    } ) {
        super();

        this.message = message;
        this.code = code;
        this.statusCode = statusCode;
    }
}