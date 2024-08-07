import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Comments, News, NewsItemTransform } from '../types/main';
import { apiUrl } from '../const';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  tagTypes: ['News'],
  endpoints: (builder) => ({
    getAllNews: builder.query<News[], void>({
      query: () => 'news',
    }),
    getNewById: builder.query<NewsItemTransform, number | string>({
      query: (id) => `news/${id}`,
    }),
    getAllComments: builder.query<Comments[], number | string>({
      query: (id) => `comments/${id}`,
    }),
  }),
});
