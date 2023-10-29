import {api} from "features/api/initApi";
import {SearchParams, UserI} from "./types";
import {RequestConfig} from "features/api/types";

const UserApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<UserI[], unknown>({
            query: (params: SearchParams): RequestConfig<unknown, unknown> => {
                return {
                    url: "/",
                    method:"GET",
                    params: {
                        [params.type]: params.value
                    }
                }

            }
        }),
        getUserId: builder.query<UserI, unknown>({
            query: (id): RequestConfig<string, unknown> => ({
                url: `/${id}`,
                method:"GET",
            })
        })
    })
})

export const {useLazyGetUsersQuery,useGetUserIdQuery} = UserApi