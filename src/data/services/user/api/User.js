export default class User {
    name;
    email;
    apiKey;

    constructor({ name, email, apiKey }) {
        this.name = name || '';
        this.email = email;
        this.apiKey = apiKey;
    }
}