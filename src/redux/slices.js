import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkQuery = createApi({
    reducerPath:'rtkQuery',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.escuelajs.co/api/v1'}),
    endpoints: (builder) => ({
        getRtk: builder.query({
            query: () => '/products',
        }),
        getidRtk: builder.query ({
            query: (id) => `/products/${id}`,
        }),
        postRtk: builder.mutation ({
            query: ( values) =>  ({
                url: '/products',
                method: 'POST',
                body: values,
            }),
        }),
        putRtk: builder.mutation ({
            query: ({id , ...values}) => ({
                url: `/products/${id}`,
                method: 'PUT',
                body: values,
            }),
        }),
        deleteRtk: builder.mutation ({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE', 
            })
        }),
        paginateRtk: builder.query ({
            query : ({offset,limit }) => `/products?offset=${offset}&limit=${limit}`, 
        })
    }),
});

export const { useGetRtkQuery, useGetidRtkQuery, usePostRtkMutation, useDeleteRtkMutation, usePutRtkMutation, usePaginateRtkQuery } = rtkQuery;












// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getApi } from "../Components/ApiCall/Apicall";

// const initialState ={
//     data:[],
//     isLoading:false,
//     error:''
// }; 
// // export const getRedux = createAsyncThunk(
//     'getUserList/getRedux',
//     async (_,{rejectWithValue}) => {
//         try{
//              const response = await getApi(); 
//             return response.data;
//         }  
//         catch(error){
//             return rejectWithValue({error:'data not get'})
//         }
//     } 
// )

// const slice =createSlice({
//     name:'getUserList',
//     initialState, 
//     extraReducers:(builder) => {
//         builder.addCase(getRedux.pending,(state) =>{
//             state.isLoading = true;
//         })
//         .addCase(getRedux.fulfilled,(state,action) => {
//             state.isLoading = false;
//             state.error ='';
//             state.data = action.payload;
//         })
//         .addCase(getRedux.rejected,(state,action) => {
//             state.error = action.payload.error;
//             state.isLoading = false;
//             state.data = [];
//         })
//     }
// })

// export default slice.reducer;