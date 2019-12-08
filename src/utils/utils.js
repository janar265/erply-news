import queryString from 'querystring';

export const getQueryParams = (queryParams) => {
    if (queryParams) {
        let cleanedParams = queryParams.slice(1);
        return queryString.parse(cleanedParams);
    }
}