import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import SiteSurvayService from "./SiteSurvayService";

interface siteSurvay {
  siteSurvay: any;
  isError: boolean;
  isSuccess: boolean;
  isSuccessUplode: boolean;
  isSuccessSend: boolean;
  isLodaing: boolean;
  isLodaingSend: boolean;
  message: any;
}

const initialState: siteSurvay = {
  siteSurvay: null,
  isError: false,
  isSuccess: false,
  isSuccessUplode: false,
  isSuccessSend: false,
  isLodaing: false,
  isLodaingSend: false,
  message: "",
};

export const getSiteSurvay = createAsyncThunk(
  "site_survey/get",
  async (key: string, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.mainUser.data.token;
      return await SiteSurvayService.getSiteSurvey(key, token);
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const sendSiteSurvayToPm = createAsyncThunk(
  "site_survey/send_file",
  async (id: any, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.mainUser.data.token;
      return await SiteSurvayService.sendSiteSurveyToPm(id, token);
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const uploadSiteSurvay = createAsyncThunk(
  "site_survey/upload",
  async (data: any, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.mainUser.data.token;
      return await SiteSurvayService.uploadSiteSurvey(data, token);
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const siteSurvaySlice = createSlice({
  name: "site_survey",
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
    //getSiteSurvay Actions
    builder.addCase(getSiteSurvay.pending, (state: siteSurvay) => {
      state.isLodaing = true;
    });
    builder.addCase(
      getSiteSurvay.fulfilled,
      (state: siteSurvay, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.siteSurvay = action.payload;
        state.isSuccess = true;
      }
    );
    builder.addCase(
      getSiteSurvay.rejected,
      (state: siteSurvay, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.isError = true;
        state.message = action.payload;
      }
    );

    //sendSiteSurvayToPm Actions
    builder.addCase(sendSiteSurvayToPm.pending, (state: siteSurvay) => {
      state.isLodaingSend = true;
    });
    builder.addCase(
      sendSiteSurvayToPm.fulfilled,
      (state: siteSurvay, action: PayloadAction<any>) => {
        state.isLodaingSend = false;
        state.isSuccessSend = true;
      }
    );
    builder.addCase(
      sendSiteSurvayToPm.rejected,
      (state: siteSurvay, action: PayloadAction<any>) => {
        state.isLodaingSend = false;
        state.isError = true;
        state.message = action.payload;
      }
    );

    //uploadSiteSurvay Actions
    builder.addCase(uploadSiteSurvay.pending, (state: siteSurvay) => {
      state.isLodaing = true;
    });
    builder.addCase(
      uploadSiteSurvay.fulfilled,
      (state: siteSurvay, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.siteSurvay.data.data.push(action.payload.data);
        state.isSuccessUplode = true;
        // console.log(action.payload.data, "action");
      }
    );
    builder.addCase(
      uploadSiteSurvay.rejected,
      (state: siteSurvay, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.isError = true;
        state.message = action.payload;
      }
    );
  },
});

//export the reset action from reducer
export const { reset } = siteSurvaySlice.actions;
//export the reducer to addd in store
export default siteSurvaySlice.reducer;
