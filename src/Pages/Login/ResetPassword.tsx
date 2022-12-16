import {
  Alert,
  Button,
  Container,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ButtonPrimary, Heading } from "../../Helper/Helper";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { IResetPassword } from "../../Types/userType";
import OriginalInput from "../../Components/InputControllar/OriginalInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box } from "@mui/system";
import { resetPassword } from "../../Redux/Slice/auth/AuthSlice";

const validationSchema = yup.object({
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const ResetPassword = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const method = useForm<IResetPassword>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      token: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const HandleSubmit: SubmitHandler<IResetPassword> = (
    data: IResetPassword
  ) => {
    console.log(data);
    dispatch(resetPassword(data));
  };
  const { isError, isSuccess, isLodaing, message } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    const urlParams = Object.fromEntries([...new URLSearchParams(search)]);
    // setData({ ...data, email: urlParams?.email, token: urlParams?.token });
    method.setValue("token", urlParams?.token);
    method.setValue("email", urlParams?.email);
  }, [search]);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success("The password Changed Succesfully ");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [isError, isSuccess, message]);

  if (!search) {
    navigate("/");
  }
  return (
    <ForgotPasswordStyled>
      <Typography
        sx={{ margin: " .5rem 0" }}
        textAlign="center"
        fontSize={50}
        fontWeight={700}
      >
        BoxByld
      </Typography>
      <Container>
        <div className="data">
          <h2>Reset Password </h2>

          <form onSubmit={method.handleSubmit(HandleSubmit)}>
            <Box mb={2}>
              <OriginalInput
                control={method.control}
                name="password"
                label="password"
                type="password"
              />
              <FormHelperText sx={{ color: "#f00" }}>
                {method.formState.errors.password_confirmation?.message}
              </FormHelperText>
            </Box>
            <Box>
              <OriginalInput
                control={method.control}
                name="password_confirmation"
                type="password"
                label="password confirmation"
              />
              <FormHelperText sx={{ color: "#f00" }}>
                {method.formState.errors.password?.message}
              </FormHelperText>
            </Box>
            <ButtonPrimary type="submit" fullWidth variant="contained">
              {isLodaing ? "lodaing..." : " Submit"}
            </ButtonPrimary>
          </form>
          <Link to="/login" className="login">
            Go to the Login Page
          </Link>
        </div>
      </Container>
    </ForgotPasswordStyled>
  );
};

const ForgotPasswordStyled = styled.div`
  .logo {
    background: #000;
    display: block;
    padding: 1rem 3rem;
    border-radius: 2rem;
    width: 300px;
    margin: 1rem auto;
    text-align: center;
  }
  .data {
    width: 60%;
    margin: 3rem auto;
    @media (max-width: 768px) {
      width: 90%;
    }
    h2 {
      margin: 1rem 0;
      color: #6eb5ca;
    }
    .btn_submit {
      margin: 2rem 0;
    }
    .login {
      color: #6eb5ca;
    }
    a {
      text-align: center;
      display: inline-block;
      width: 100%;
      color: #6eb5ca;
      font-weight: bold;
    }
  }
`;
const FormContant = styled.div`
  margin: 1rem 0;
`;

export default ResetPassword;
