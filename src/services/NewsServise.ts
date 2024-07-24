import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { News, NewsItem } from '../types/main';

const API_URL = 'https://api.hnpwa.com/v0/';

export const newsAllApi = createApi({
  reducerPath: 'newsAllApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllNews: builder.query<News[], string>({
      query: (page) => `newest/${page}.json`,
    }),
    getNewById: builder.query<NewsItem, number | string>({
      query: (id) => `item/${id}.json`,
    }),
  }),
});
