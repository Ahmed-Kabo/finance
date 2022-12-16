import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  IForgetPassword,
  IResetPassword,
  Login,
} from "../../../Types/userType";
import { RootState } from "../../store";
import authService from "./AuthService";

//get user from  localStorage
const user =
  localStorage.getItem("user") &&
  JSON.parse(localStorage.getItem("user") || "");

export interface LoginState {
  mainUser: any;
  forgot: string | null;
  reset: string | null;
  isError: boolean;
  isSuccess: boolean;
  isLodaing: boolean;
  message: "";
}

const initialState: LoginState = {
  mainUser: user ? user : null,
  forgot: null,
  reset: null,
  isError: false,
  isSuccess: false,
  isLodaing: false,
  message: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async (data: Login, thunkAPI) => {
    try {
      return await authService.login(data);
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

//forget paassword

export const forgotPassword = createAsyncThunk(
  "auth/forgot",
  async (data: IForgetPassword, thunkAPI) => {
    try {
      return await authService.ForgetPassword(data);
    } catch (error: any) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//reset paassword

export const resetPassword = createAsyncThunk(
  "auth/reset",
  async (data: IResetPassword, thunkAPI) => {
    try {
      return await authService.resetPassword(data);
    } catch (error: any) {
      const message = error.response.data.message;
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
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
    //login Actions
    builder.addCase(login.pending, (state: LoginState) => {
      state.isLodaing = true;
    });
    builder.addCase(
      login.fulfilled,
      (state: LoginState, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.mainUser = action.payload;
        state.isSuccess = true;
      }
    );
    builder.addCase(
      login.rejected,
      (state: LoginState, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.isError = true;
        state.message = action.payload;
      }
    );
    //logout actions
    builder.addCase(logout.fulfilled, (state: LoginState) => {
      state.mainUser = null;
    });

    //Forget Password  Actions
    builder.addCase(forgotPassword.pending, (state: LoginState) => {
      state.isLodaing = true;
    });
    builder.addCase(
      forgotPassword.fulfilled,
      (state: LoginState, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.forgot = action.payload;
        state.isSuccess = true;
      }
    );
    builder.addCase(
      forgotPassword.rejected,
      (state: LoginState, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.isError = true;
        state.message = action.payload;
      }
    );

    //Reset Password  Actions
    builder.addCase(resetPassword.pending, (state: LoginState) => {
      state.isLodaing = true;
    });
    builder.addCase(
      resetPassword.fulfilled,
      (state: LoginState, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.reset = action.payload;
        state.isSuccess = true;
      }
    );
    builder.addCase(
      resetPassword.rejected,
      (state: LoginState, action: PayloadAction<any>) => {
        state.isLodaing = false;
        state.isError = true;
        state.message = action.payload;
      }
    );
  },
});

//export the reset action from reducer
export const { reset } = authSlice.actions;
//export the reducer to addd in store
export default authSlice.reducer;
