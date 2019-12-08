import { get } from '../../../utils/httpClient';

export default {
    fetchTopNews: async (pageSize, page, searchQuery) => {
        return await get(`top-headlines?country=us&pageSize=${pageSize}&page=${page}&q=${searchQuery}`);
    }
}