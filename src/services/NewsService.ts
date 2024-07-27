import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { News, NewsItem } from '../types/main';

const API_URL = 'http://localhost:4000';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['News'],
  endpoints: (builder) => ({
    getAllNews: builder.query<News[], void>({
      query: () => 'news',
    }),
    getNewById: builder.query<NewsItem, number | string>({
      query: (id) => `news/${id}`,
    }),
    // getAllComments: builder.query<NewsItem[], number | string>({
    //   query: (id) => `comments/${id}`,
    // }),
    getAllRootComments: builder.query<NewsItem[], number | string>({
      query: (id) => `comments/root/${id}`,
    }),
    getAllChildrenComments: builder.query<NewsItem[], number | string>({
      query: (id) => `comments/children/${id}`,
    }),
  }),
});
