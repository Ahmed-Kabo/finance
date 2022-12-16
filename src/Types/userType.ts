export interface Login {
  email: string;
  password: string;
}

export interface IForgetPassword {
  email: string;
}

export interface IResetPassword {
  token: string;
  email: string;
  password: string;
  password_confirmation: string;
}
