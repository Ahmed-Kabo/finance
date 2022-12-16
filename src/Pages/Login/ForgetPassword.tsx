import { Container, FormHelperText, Typography } from "@mui/material";

import { FC, useEffect } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ButtonPrimary, Heading } from "../../Helper/Helper";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { IForgetPassword } from "../../Types/userType";
import OriginalInput from "../../Components/InputControllar/OriginalInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgotPassword, reset } from "../../Redux/Slice/auth/AuthSlice";

//schema

const schema = yup.object({
  email: yup.string().email().required("The email is Required"),
});

const ForgetPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isError, isSuccess, isLodaing, message } = useAppSelector(
    (state) => state.auth
  );

  const method = useForm<IForgetPassword>({
    resolver: yupResolver(schema),
  });

  const HandleSubmit: SubmitHandler<IForgetPassword> = (
    data: IForgetPassword
  ) => {
    dispatch(forgotPassword(data));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate("/check-email");
    }
    dispatch(reset());
  }, [isSuccess, isLodaing, dispatch, message]);
  return (
    <ForgotPasswordStyled>
      <Container>
        <Typography
          sx={{ margin: " .5rem 0" }}
          textAlign="center"
          fontSize={50}
          fontWeight={700}
        >
          BoxByld
        </Typography>
        <div className="data">
          <h2>Forgot Password </h2>
          <FormProvider {...method}>
            <form onSubmit={method.handleSubmit(HandleSubmit)}>
              <OriginalInput
                control={method.control}
                name="email"
                label="Email"
              />
              <FormHelperText sx={{ color: "#f00" }}>
                {method.formState.errors.email?.message}
              </FormHelperText>
              <ButtonPrimary type="submit" fullWidth variant="contained">
                {isLodaing ? "lodaing..." : " Submit"}
              </ButtonPrimary>
            </form>
          </FormProvider>
          <Link to="/login">Go to the Login Page</Link>
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
    a {
      text-align: center;
      display: inline-block;
      width: 100%;
      color: #6eb5ca;
      font-weight: bold;
    }
  }
`;

export default ForgetPassword;
