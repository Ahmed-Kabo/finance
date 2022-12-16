import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import UtilityBillService from "./UtilityBillService";

interface utilityBill {
  utilityBill: any;
  isError: boolean;
  isSuccess: boolean;
  isSuccessUplode: boolean;
  isSuccessSend: boolean;
  isLodaing: boolean;
  isLodaingSend: boolean;
  message: string;
}

const initialState: utilityBill = {
  utilityBill: null,
  isError: false,
  isSuccess: false,
  isSuccessUplode: false,
  isSuccessSend: false,
  isLodaing: false,
  isLodaingSend: false,
  message: "",
};

export const getUtilityBill = createAsyncThunk(
  "utilityBill/get",
  async (key: string, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.mainUser.data.token;
      return await UtilityBillService.getUtilityBill(key, token);
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const sendUtilityBillToPm = createAsyncThunk(
  "utilityBill/send_file",
  async (id: string, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.mainUser.data.token;
      return await UtilityBillService.sendUtilityBillToPm(id, token);
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const uploadUtilityBill = createAsyncThunk(
  "utilityBill/upload",
  async (data: any, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.mainUser.data.token;
      return await UtilityBillService.uploadUtilityBill(data, token);
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const utilityBillSlice = createSlice({
  name: "utilityBill",
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
    //getUtilityBill Actions
    builder.addCase(getUtilityBill.pending, (state: utilityBill) => {
      state.isLodaing = true;
    });
    builder.addCase(
      getUtilityBill.fulfilled,
      (state: utilityBill, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.utilityBill = action.payload;
        state.isSuccess = true;
      }
    );
    builder.addCase(
      getUtilityBill.rejected,
      (state: utilityBill, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.isError = true;
        state.message = action.payload;
      }
    );

    //sendUtilityBillToPm Actions
    builder.addCase(sendUtilityBillToPm.pending, (state: utilityBill) => {
      state.isLodaingSend = true;
    });
    builder.addCase(
      sendUtilityBillToPm.fulfilled,
      (state: utilityBill, action: PayloadAction<any>) => {
        state.isLodaingSend = false;
        state.isSuccessSend = true;
      }
    );
    builder.addCase(
      sendUtilityBillToPm.rejected,
      (state: utilityBill, action: PayloadAction<any>) => {
        state.isLodaingSend = false;
        state.isError = true;
        state.message = action.payload;
      }
    );

    //uploadUtilityBill Actions
    builder.addCase(uploadUtilityBill.pending, (state: utilityBill) => {
      state.isLodaing = true;
    });
    builder.addCase(
      uploadUtilityBill.fulfilled,
      (state: utilityBill, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.utilityBill.data.data.push(action.payload.data);
        state.isSuccessUplode = true;
      }
    );
    builder.addCase(
      uploadUtilityBill.rejected,
      (state: utilityBill, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.isError = true;
        state.message = action.payload;
      }
    );
  },
});

//export the reset action from reducer
export const { reset } = utilityBillSlice.actions;
//export the reducer to addd in store
export default utilityBillSlice.reducer;
