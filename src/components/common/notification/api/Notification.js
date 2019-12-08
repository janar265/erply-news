import uuidv4 from 'uuid';

export class Notification {
    id;
    message;
    type;
    duration;

    constructor(message, type, duration = 5000) {
        this.id = uuidv4();
        this.message = message;
        this.type = type;
        this.duration = duration;
    }
}