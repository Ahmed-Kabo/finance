import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

export const FinanceSlice = createApi({
  reducerPath: "financeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://crm.boxbyld.tech/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.mainUser.access_token;

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["finance"],
  endpoints: (builder) => ({
    //start  get all signed conatct
    getReport: builder.query({
      query: (page) => ({
        url: "finance",
        method: "GET",
        params: {
          page: page,
        },
      }),
      providesTags: ["finance"],
    }),

    //get Single Lead Details

    getSingleReport: builder.query({
      query: (id) => ({
        url: `finance/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetReportQuery, useGetSingleReportQuery } = FinanceSlice;
