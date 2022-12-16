import * as yup from "yup";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { Login } from "../../Types/userType";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Grid,
} from "@mui/material";
import { ButtonPrimary } from "../../Helper/Helper";
import { Link } from "react-router-dom";
import { MailOutline, Lock } from "@mui/icons-material";
import InputControllar from "../InputControllar/InputControllar";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { login, reset } from "../../Redux/Slice/auth/AuthSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";

//start valdation
const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required")
    .max(320, " The maximum accepted numbers of characters is 320"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Must Contain 8 Characters"),
});

//start login form
const LoginForm = () => {
  const dispatch = useAppDispatch();

  const method = useForm<Login>({ resolver: yupResolver(validationSchema) });

  //get the data from reducer
  const { isLodaing, message, isError } = useAppSelector((state) => state.auth);

  //handle submit function
  const HandleSubmit: SubmitHandler<Login> = (data: Login) => {
    dispatch(login(data));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());

    // dispatch()
  }, [dispatch, isError, message]);

  return (
    <>
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(HandleSubmit)}>
          <Grid container>
            <Grid item mb={3} xs={12}>
              <Box className="inputConatiner">
                <MailOutline />
                <InputControllar label="Email" name="email" />
              </Box>
              <FormHelperText sx={{ color: "#f00" }}>
                {method.formState.errors.email?.message}
              </FormHelperText>
            </Grid>
            <Grid item mb={1} xs={12}>
              <Box className="inputConatiner">
                <Lock />
                <InputControllar
                  label="Password"
                  name="password"
                  type="password"
                />
              </Box>
              <FormHelperText sx={{ color: "#f00" }}>
                {method.formState.errors.password?.message}
              </FormHelperText>
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remamber me"
              />
            </Grid>
            {/* <Grid
              item
              xs={6}
              sx={{ display: "flex" }}
              alignItems="center"
              justifyContent="flex-end"
            >
              <Link to="forgot-password" className="forgot_password">
                Forgot Password
              </Link>
            </Grid> */}
          </Grid>
          <ButtonPrimary type="submit" fullWidth variant="contained">
            {isLodaing ? "lodaing..." : "Login"}
          </ButtonPrimary>
        </form>
      </FormProvider>
    </>
  );
};

export default LoginForm;
