import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect } from "react";
import SolutionCard from "../../Components/SolutionCard/SolutionCard";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { getSolutions } from "../../Redux/Slice/Solutions/SolutionsSlice";

const Solution = () => {
  const dispatch = useAppDispatch();
  const { Solutions, isError, isLodaing, isSuccess } = useAppSelector(
    (state) => state.solution
  );

  useEffect(() => {
    dispatch(getSolutions());
  }, []);

  return (
    <>
      <Container>
        <Typography variant="h3" mb={3}>
          Solution
        </Typography>
        <Grid container spacing={3}>
          {Solutions?.data?.map((item: any) => (
            <Grid item md={6} key={item.pm_user_id}>
              <SolutionCard data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Solution;
