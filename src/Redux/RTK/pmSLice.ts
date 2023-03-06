import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

// Define a service using a base URL and expected endpoints
export const pmSlice = createApi({
  reducerPath: "PM_API",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pmb.boxbyld.tech/api",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.mainUser.access_token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFinalReport: builder.query<any, any>({
      query: (id) => `project-costs/${id}`,
    }),
  }),
});

export const { useGetFinalReportQuery } = pmSlice;
