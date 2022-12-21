import {
  AccountCircle,
  Business,
  CorporateFare,
  DateRange,
  SolarPower,
} from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetReportQuery } from "../../Redux/RTK/FinanceSlice";

const Reports = () => {
  const { isLoading, data, isError } = useGetReportQuery({});

  const allReports = data?.data?.data;

  if (isError) return <h2>Somthing went Wrong</h2>;

  if (isLoading) {
    return <h2>loading...</h2>;
  }
  return (
    <Box sx={{ m: 3 }}>
      <Typography variant="h3" mb={2}>
        initial reports
      </Typography>
      <Grid container spacing={3}>
        {allReports?.map((item: any) => (
          <Grid item md={6} lg={4} xs={12} key={item.id}>
            <Link to={`${item?.opportunity_id}`}>
              <Box
                sx={{
                  borderRadius: "1rem",
                  boxShadow: " 0 0 12px 6px rgb(0 0 0 / 10%);",
                  background: "#fff",
                  padding: "1rem",
                  transition: "all 0.3s",
                  "&:hover": {
                    transform: "translateY(5px)",
                    boxShadow: " 0 0 4px 3px rgb(0 88 143 / 10%);",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex ",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="body1"
                      textTransform="capitalize"
                      fontWeight="600"
                      color="#585858"
                      display="flex"
                      alignItems="center"
                    >
                      <AccountCircle sx={{ marginRight: 1 }} />
                      {item?.customer_name}
                    </Typography>
                    <Typography
                      variant="body1"
                      fontWeight={700}
                      color="#585858"
                      mb={1}
                      display="flex"
                      alignItems="center"
                    >
                      <Business sx={{ marginRight: 1 }} /> Finance Company :{" "}
                      {item?.finance_company}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="#777"
                      mb={1}
                      display="flex"
                      alignItems="center"
                    >
                      <DateRange sx={{ marginRight: 1 }} />{" "}
                      {new Date(`${item?.created_at}`).toDateString()}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      background: "#f5f5f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: "2.3rem",
                        color: "#0062ff",
                        fontWeight: "bold",
                        textShadow: "0px 1px 1px #000000aa",
                      }}
                    >
                      ${Math.ceil(item?.contract_gross_amount)}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reports;