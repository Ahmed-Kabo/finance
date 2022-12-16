import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import SolutionsServices from "./SolutionsServices";

interface Solutions {
  Solutions: any;
  isError: boolean;
  isSuccess: boolean;
  isLodaing: boolean;
  message: string;
}

const initialState: Solutions = {
  Solutions: null,
  isError: false,
  isSuccess: false,
  isLodaing: false,
  message: "",
};

export const getSolutions = createAsyncThunk(
  "Solutions/get",
  async (_, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.mainUser.data.token;
      return await SolutionsServices.getSolutions(token);
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const SolutionsSlice = createSlice({
  name: "Solutions",
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
    //getSolutions Actions
    builder.addCase(getSolutions.pending, (state: Solutions) => {
      state.isLodaing = true;
    });
    builder.addCase(
      getSolutions.fulfilled,
      (state: Solutions, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.Solutions = action.payload;
        state.isSuccess = true;
      }
    );
    builder.addCase(
      getSolutions.rejected,
      (state: Solutions, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.isError = true;
        state.message = action.payload;
      }
    );
  },
});

//export the reset action from reducer
export const { reset } = SolutionsSlice.actions;
//export the reducer to addd in store
export default SolutionsSlice.reducer;
