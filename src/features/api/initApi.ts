import { createApi } from '@reduxjs/toolkit/query/react'
import {axiosBaseQuery} from "features/api/axiosBaseQuery";

export const api = createApi({
    reducerPath: 'Api',
    baseQuery: axiosBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/users' }),
    endpoints: () => ({}),
})

