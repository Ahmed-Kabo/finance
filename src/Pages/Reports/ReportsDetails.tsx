import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { useGetSingleReportQuery } from "../../Redux/RTK/FinanceSlice";

const ReportsDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetSingleReportQuery(id);

  const ReportData = data?.data;

  if (isError) return <h2>Somthing went Wrong</h2>;

  if (isLoading) {
    return <h2>loading...</h2>;
  }
  return (
    <>
      <Box
        sx={{
          background: "#fff ",
          p: 2,
          borderRadius: 2,
          mb: 2,
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Typography variant="h5" mb={3}>
          Commission Sales{" "}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            bgcolor: "#eeeeee",
            p: 1,
            borderRadius: 2,
            mb: 0.5,
          }}
        >
          <Typography sx={{ fontSize: "1.2rem", width: "25%" }}>
            Customer Name{" "}
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
            {ReportData?.customer_name}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            bgcolor: "#eeeeee",
            p: 1,
            borderRadius: 2,
            mb: 0.5,
          }}
        >
          <Typography sx={{ fontSize: "1.2rem", width: "25%" }}>
            Address
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
            {ReportData?.customer_address}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            bgcolor: "#eeeeee",
            p: 1,
            borderRadius: 2,
            mb: 0.5,
          }}
        >
          <Typography sx={{ fontSize: "1.2rem", width: "25%" }}>
            Sales Rep{" "}
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
            {ReportData?.sales_rep}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            bgcolor: "#eeeeee",
            p: 1,
            borderRadius: 2,
            mb: 0.5,
          }}
        >
          <Typography sx={{ fontSize: "1.2rem", width: "25%" }}>
            Terms of Argeement
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
            {ReportData?.ppw}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            bgcolor: "#eeeeee",
            p: 1,
            borderRadius: 2,
            mb: 0.5,
          }}
        >
          <Typography sx={{ fontSize: "1.2rem", width: "25%" }}>
            Contract Gross Amount
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
            ${ReportData?.contract_gross_amount}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            bgcolor: "#eeeeee",
            p: 1,
            borderRadius: 2,
            mb: 0.5,
          }}
        >
          <Typography sx={{ fontSize: "1.2rem", width: "25%" }}>
            Finance Company
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
            {ReportData?.finance_company}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            bgcolor: "#eeeeee",
            p: 1,
            borderRadius: 2,
            mb: 0.5,
          }}
        >
          <Typography sx={{ fontSize: "1.2rem", width: "25%" }}>
            Rate / Term
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
            {ReportData?.rate} {ReportData?.term}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            bgcolor: "#eeeeee",
            p: 1,
            borderRadius: 2,
            mb: 0.5,
          }}
        >
          <Typography sx={{ fontSize: "1.2rem", width: "25%" }}>
            Dealars Fee
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
            {ReportData?.dealer_fee}%
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            bgcolor: "#eeeeee",
            p: 1,
            borderRadius: 2,
            mb: 0.5,
          }}
        >
          <Typography sx={{ fontSize: "1.2rem", width: "25%" }}>
            Net Contract Amount
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
            ${ReportData?.net_contract_amount}
          </Typography>
        </Box>
      </Box>

      {/* solar system  */}
      <Box
        sx={{
          background: "#fff ",
          p: 2,
          borderRadius: 2,
          mb: 2,
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Typography variant="h5" mb={3}>
          Solar System
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            bgcolor: "#eeeeee",
            p: 1,
            borderRadius: 2,
            mb: 0.5,
          }}
        >
          <Typography sx={{ fontSize: "1.2rem", width: "25%" }}>
            No of Panels
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
            {ReportData?.solar_sys_no_of_panels}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            bgcolor: "#eeeeee",
            p: 1,
            borderRadius: 2,
            mb: 0.5,
          }}
        >
          <Typography sx={{ fontSize: "1.2rem", width: "25%" }}>
            Wattage
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
            {ReportData?.solar_sys_wattage}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            bgcolor: "#eeeeee",
            p: 1,
            borderRadius: 2,
            mb: 0.5,
          }}
        >
          <Typography sx={{ fontSize: "1.2rem", width: "25%" }}>
            System Size
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
            {ReportData?.solar_sys_size}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            bgcolor: "#eeeeee",
            p: 1,
            borderRadius: 2,
            mb: 0.5,
          }}
        >
          <Typography sx={{ fontSize: "1.2rem", width: "25%" }}>
            Total Cost
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
            ${ReportData?.solar_sys_total_cost}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ReportsDetails;
