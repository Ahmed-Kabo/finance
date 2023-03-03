import {
  AccountCircle,
  Business,
  DateRange,
  Grid3x3Outlined,
  Grid4x4,
  Window,
} from "@mui/icons-material";
import {
  Box,
  debounce,
  Grid,
  Pagination,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useGetReportQuery } from "../../Redux/RTK/FinanceSlice";

const Reports = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

  console.log(search);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const { isLoading, data, isError, isFetching } = useGetReportQuery({
    page,
    keyword: search,
  });

  const allReports = data?.data?.data;

  const debouncedSearchTerm = useMemo(() => debounce(setSearch, 500), []);

  const handleSearch = (event: React.ChangeEvent<any>) => {
    debouncedSearchTerm(event.target.value);
  };

  const AllList = () => {
    return (
      <>
        {!Boolean(allReports.length) ? (
          <Typography p={5} variant="h4">
            There is no Report
          </Typography>
        ) : (
          allReports?.map((item: any) => (
            <Grid item md={6} lg={6} xs={12} key={item.id}>
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
          ))
        )}
      </>
    );
  };

  if (isError) return <h2>Somthing went Wrong</h2>;

  return (
    <Box sx={{ m: 3 }}>
      <Box
        sx={{
          background: "#fff",
          p: 2,
          borderRadius: 5,
          my: 1,
          display: "flex",
          alignItems: "center",
          boxShadow: "0 0 8px 6px rgb(0 0 0 / 5%)",
        }}
      >
        <Typography
          variant="h6"
          mr={5}
          display="flex"
          alignItems={"center"}
          color="#5e5e5e"
        >
          <Window sx={{ mr: 1 }} />
          Reports ({data?.data?.total})
        </Typography>
        <TextField
          placeholder="Search For any Report.."
          onChange={handleSearch}
          sx={{
            width: "350px",
            ".MuiInputBase-input": {
              padding: 1.5,
            },
            ".MuiInputBase-root ": {
              borderRadius: 5,
            },
          }}
        />
      </Box>

      <Grid container spacing={3}>
        {isLoading || isFetching ? (
          <Typography p={5} variant="h4">
            Loading...
          </Typography>
        ) : (
          AllList()
        )}
      </Grid>

      {/* start pagination  */}
      <Stack
        spacing={2}
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          my: 5,

          justifyContent: "flex-end",
        }}
      >
        <Pagination
          color="primary"
          count={Math.ceil(data?.data?.total / 10)}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </Box>
  );
};

export default Reports;
