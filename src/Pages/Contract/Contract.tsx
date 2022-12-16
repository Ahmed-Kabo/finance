import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import ContractCard from "../../Components/ContarctCard/ContarctCard";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { getContract } from "../../Redux/Slice/Contarct/ContractSlice";

const Contract = () => {
  const dispatch = useAppDispatch();
  const { Contract } = useAppSelector((state) => state.contract);

  useEffect(() => {
    dispatch(getContract());
  }, []);
  return (
    <>
      <Container>
        <Typography variant="h3" mb={3}>
          Contract
        </Typography>
        <Grid container spacing={3}>
          {Contract?.data?.map((item: any) => (
            <Grid item md={6} key={item.pm_user_id}>
              <ContractCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Contract;
