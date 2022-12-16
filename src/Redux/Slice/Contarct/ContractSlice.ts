import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import ContarctServices from "./ContractServices";

interface Contract {
  Contract: any;
  isError: boolean;
  isSuccess: boolean;
  isLodaing: boolean;
  message: string;
}

const initialState: Contract = {
  Contract: null,
  isError: false,
  isSuccess: false,
  isLodaing: false,
  message: "",
};

export const getContract = createAsyncThunk(
  "Contract/get",
  async (_, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.mainUser.data.token;
      return await ContarctServices.getContract(token);
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const ContractSlice = createSlice({
  name: "Contract",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLodaing = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    //getContract Actions
    builder.addCase(getContract.pending, (state: Contract) => {
      state.isLodaing = true;
    });
    builder.addCase(
      getContract.fulfilled,
      (state: Contract, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.Contract = action.payload;
        state.isSuccess = true;
      }
    );
    builder.addCase(
      getContract.rejected,
      (state: Contract, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.isError = true;
        state.message = action.payload;
      }
    );
  },
});

//export the reset action from reducer
export const { reset } = ContractSlice.actions;
//export the reducer to addd in store
export default ContractSlice.reducer;
