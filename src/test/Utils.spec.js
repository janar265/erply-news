import { getQueryParams } from '../utils/utils';

describe("Utils", () => {
    it("Get query params from querystring", () => {
        const params = getQueryParams("?q=abc&category=Business");
        expect(params).toEqual({ q: "abc", category: "Business" });
    });
});