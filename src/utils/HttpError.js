export default class HttpError extends Error {

    constructor(code, message, body = null) {
        super(message);
        this.code = code;
        this.body = body;
    }

}