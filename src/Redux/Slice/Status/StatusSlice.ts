import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import StatusService from "./StatusServices";

interface Status {
  Status: any;
  isError: boolean;
  isSuccess: boolean;
  isLodaing: boolean;
  message: string;
}

const initialState: Status = {
  Status: null,
  isError: false,
  isSuccess: false,
  isLodaing: false,
  message: "",
};

export const getStatus = createAsyncThunk(
  "Status/get",
  async (_, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.mainUser.data.token;
      return await StatusService.getStatus(token);
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const StatusSlice = createSlice({
  name: "Status",
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
    //getStatus Actions
    builder.addCase(getStatus.pending, (state: Status) => {
      state.isLodaing = true;
    });
    builder.addCase(
      getStatus.fulfilled,
      (state: Status, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.Status = action.payload;
        state.isSuccess = true;
      }
    );
    builder.addCase(
      getStatus.rejected,
      (state: Status, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.isError = true;
        state.message = action.payload;
      }
    );
  },
});

//export the reset action from reducer
export const { reset } = StatusSlice.actions;
//export the reducer to addd in store
export default StatusSlice.reducer;
