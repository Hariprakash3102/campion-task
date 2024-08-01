import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApi } from "../Components/ApiCall/Apicall";

const initialState ={
    data:[],
    selectedData:{},
    isLoading:false,
    error:''
};


export const getRedux = createAsyncThunk(
    'getUserList/getRedux',
    async (_,{rejectWithValue}) => {
        const response = await getApi();
        if(response.ok){
            return response.data;
        }
        else{
            return rejectWithValue({error:'data not added'})
        }
    } 
)

const slice =createSlice({
    name:'getUserList',
    initialState,
    reducers: {
        // addData:(state,action) => {
        //     state.data = action.payload;
        // }
    },
    extraReducers:(builder) => {
        builder.addCase(getRedux.pending,(state) =>{
            state.isLoading = true;
        })
        .addCase(getRedux.fulfilled,(state,action) => {
            state.isLoading = false;
            state.error ='';
            state.data = action.payload;
        })
        .addCase(getRedux.rejected,(state,action) => {
            state.error = action.payload.error;
            state.isLoading = false;
            state.data = [];
        })
    }
})


export default slice.reducer;