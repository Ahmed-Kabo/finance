import { Grid, Typography } from "@mui/material";
import LoginImage from "../../Assets/login.png";
import LoginForm from "../../Components/Login/LoginForm";

import { FormStyled, LoginContainer } from "./LoginStyled";
const Login = () => {
  return (
    <>
      <LoginContainer>
        <Grid container spacing={2} alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            alignItems="center"
            sx={{ display: { md: "block", xs: "none" } }}
          >
            <img src={LoginImage} alt="login" />
          </Grid>
          <Grid item xs={12} md={6} alignItems="center">
            <Typography
              component="h2"
              variant="h4"
              fontWeight={600}
              textAlign="left"
              mb={3}
            >
              BoxByld Accounting
            </Typography>
            <Typography
              variant="h6"
              fontWeight={400}
              textAlign="left"
              color="#999"
            >
              Welcome to BoxByld Please Login To Dashbord
            </Typography>

            <FormStyled>
              <LoginForm />
            </FormStyled>
          </Grid>
        </Grid>
      </LoginContainer>
    </>
  );
};

export default Login;
