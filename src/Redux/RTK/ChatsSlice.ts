import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatSlice = createApi({
  reducerPath: "chatsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://msg.boxbyld.tech/api/chat/",
    prepareHeaders: (headers) => {
      headers.set("token", "bL4r$a$c$e6JA8cU");
      return headers;
    },
  }),
  tagTypes: ["messages"],

  endpoints: (builder) => ({
    getChat: builder.query({
      query: (body) => ({
        url: `get_last_chat`,
        method: "POST",
        body,
      }),
      providesTags: ["messages"],
    }),

    //get all messages

    getAllChats: builder.query({
      query: (body) => ({
        url: `message`,
        method: "POST",
        body,
      }),
      providesTags: ["messages"],
    }),

    //getallstatus
    getStaus: builder.query({
      query: (body) => ({
        url: `change_status`,
        method: "POST",
        body,
      }),
      providesTags: ["messages"],
    }),

    //get all List
    getUsersList: builder.query({
      query: (body) => ({
        url: `get_users_with_last_chat`,
        method: "POST",
        body,
      }),
      providesTags: ["messages"],
    }),

    //send messages
    sendMessage: builder.mutation({
      query: (body) => ({
        url: `store`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["messages"],
    }),
  }),
});

export const {
  useGetChatQuery,
  useGetAllChatsQuery,
  useGetStausQuery,
  useGetUsersListQuery,
  useSendMessageMutation,
} = chatSlice;
