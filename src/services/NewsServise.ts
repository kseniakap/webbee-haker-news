import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { News, NewsItem } from '../types/main';
import { count, newsCountOnPage } from '../const';

const API_URL = 'https://api.hnpwa.com/v0/';

export const newsAllApi = createApi({
  reducerPath: 'newsAllApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['News'],
  endpoints: (builder) => ({
    getAllNews: builder.query<News[], void>({
      queryFn: async () => {
        const requests = [];
        for (let i = 1; i <= count; i++) {
          requests.push(fetch(`${API_URL}newest/${i}.json`).then((res) => res.json()));
        }
        const responses = await Promise.all(requests);
        const data = responses.flat().slice(0, newsCountOnPage);
        return { data };
      },
      providesTags: ['News'],
    }),
    getNewById: builder.query<NewsItem, number | string>({
      query: (id) => `item/${id}.json`,
    }),
  }),
});
