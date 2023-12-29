import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

import { env } from "@/env.config";
export const CourseApiService = createApi({
  reducerPath: "course",
  baseQuery: fetchBaseQuery({
    baseUrl: `${env.API_BASE_URL}/${env.API_CONTEXT_PATH}/${env.API_VERSION}`,
  }),
  endpoints: (builder) => ({
    listCourses: builder.query<Course[], queryParamInterface>({
      query: ({}) => `courses`,
    }),
  }),
});
