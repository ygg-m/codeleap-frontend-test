import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post, rawFetch } from "../types/postsSlice";

interface UpdatePostPayload {
  id: number;
  patch: Partial<Post>;
}

// Define a service using a base URL and expected endpoints
export const codeLeapApi = createApi({
  reducerPath: "codeLeapApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.codeleap.co.uk/careers/",
  }),
  endpoints: (builder) => ({
    getList: builder.query<rawFetch, { limit: number; offset: number }>({
      query: ({ limit, offset }) =>
        `?format=json&limit=${limit}&offset=${offset}`,
    }),
    addPost: builder.mutation<rawFetch, Partial<Post>>({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
    }),
    getPost: builder.query<Post, number>({
      query: (id) => `${id}`,
    }),
    updatePost: builder.mutation<void, UpdatePostPayload>({
      query: ({ id, ...patch }) => ({
        url: `${id}`,
        method: "PATCH",
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          codeLeapApi.util.updateQueryData("getPost", id, (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    deletePost: builder.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetListQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = codeLeapApi;
