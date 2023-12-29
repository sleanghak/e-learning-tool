import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface queryPostParamInterface {
  page: number;
  limit: number;
}

export const defaultPostParams: queryPostParamInterface = {
  page: 1,
  limit: 10,
};

export const defaultListPosts: Post[] = [];
const baseUrl = "https://jsonplaceholder.typicode.com";

export const postApiService = createApi({
  reducerPath: "post",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPostById: builder.query<Post, number>({
      query: (id) => `/posts/${id}`,
    }),
    getListPosts: builder.query<Post[], queryPostParamInterface>({
      query: ({ page, limit }) => `/posts?_page=${page}&&_limit=${limit}`,
    }),
  }),
});

export const { useGetPostByIdQuery, useGetListPostsQuery } = postApiService;
