import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import PmServices from "./PmServices";

interface PM {
  PmUser: any;
  PmStatus: any;
  isError: boolean;
  isSuccess: boolean;
  isLodaing: boolean;
  message: string;
}

const initialState: PM = {
  PmUser: null,
  PmStatus: null,
  isError: false,
  isSuccess: false,
  isLodaing: false,
  message: "",
};

export const getPmUser = createAsyncThunk(
  "pm/getUser",
  async (_, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.mainUser.data.token;
      return await PmServices.getPmUser(token);
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getPmStatus = createAsyncThunk(
  "pm/getStatus",
  async (_, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.mainUser.data.token;
      return await PmServices.getPmUser(token);
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const PmSlice = createSlice({
  name: "pm",
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
    //getPmUser Actions
    builder.addCase(getPmUser.pending, (state: PM) => {
      state.isLodaing = true;
    });
    builder.addCase(
      getPmUser.fulfilled,
      (state: PM, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.PmUser = action.payload;
        state.isSuccess = true;
      }
    );
    builder.addCase(
      getPmUser.rejected,
      (state: PM, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.isError = true;
        state.message = action.payload;
      }
    );

    //getPmStatus Actions
    builder.addCase(getPmStatus.pending, (state: PM) => {
      state.isLodaing = true;
    });
    builder.addCase(
      getPmStatus.fulfilled,
      (state: PM, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.PmStatus = action.payload;
        state.isSuccess = true;
      }
    );
    builder.addCase(
      getPmStatus.rejected,
      (state: PM, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.isError = true;
        state.message = action.payload;
      }
    );
  },
});

//export the reset action from reducer
export const { reset } = PmSlice.actions;
//export the reducer to addd in store
export default PmSlice.reducer;
