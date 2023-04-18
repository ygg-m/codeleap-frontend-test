import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { rawFetch } from "../types/postsSlice";

// Define a service using a base URL and expected endpoints
export const codeLeapApi = createApi({
  reducerPath: "codeLeapApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.codeleap.co.uk/careers/?format=json",
  }),
  endpoints: (builder) => ({
    getList: builder.query<rawFetch, string>({
      query: (name) => "",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetListQuery } = codeLeapApi;
