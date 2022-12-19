import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { useGetSingleReportQuery } from "../../Redux/RTK/FinanceSlice";

const ReportsDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetSingleReportQuery(id);

  const ReportData = data?.data;

  const DynamicFn = (name: string, reqData: any, money?: boolean) => {
    if (reqData)
      return (
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
            {name}
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
            {money ? "$" : null}
            {reqData}
          </Typography>
        </Box>
      );
  };

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
            Requested Royaltis
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
            ${ReportData?.requested_royalties}
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

      {/* Roofing system  */}
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
          Roofing System
        </Typography>
        {DynamicFn("No of Squares", ReportData?.roofing_no_of_squares)}
        {DynamicFn("No of Layers", ReportData?.roofing_no_of_layers)}
        {DynamicFn("Redecking", ReportData?.roofing_redecking)}
        {DynamicFn("Roofing Type", ReportData?.roofing_type)}
        {DynamicFn("Roofing Type Cost", ReportData?.roofing_type_cost)}
        {DynamicFn("Total Cost", ReportData?.roofing_total_cost)}
      </Box>

      {/* Adders system  */}
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
          Adders
        </Typography>
        {DynamicFn("Attic Run", ReportData?.project_adder?.attic_run, true)}
        {DynamicFn(
          "Bird Netting",
          ReportData?.project_adder?.bird_netting,
          true
        )}
        {DynamicFn("De Rate", ReportData?.project_adder?.de_rate, true)}
        {DynamicFn(
          "Designated Plugs",
          ReportData?.project_adder?.designated_plugs,
          true
        )}
        {DynamicFn("Ducting", ReportData?.project_adder?.ducting, true)}
        {DynamicFn(
          "Energy Efficient",
          ReportData?.project_adder?.energy_efficient,
          true
        )}
        {DynamicFn("Ev Charger", ReportData?.project_adder?.ev_charger, true)}
        {DynamicFn("Ev Mlo", ReportData?.project_adder?.ev_mlo, true)}
        {DynamicFn(
          "Led Lighting",
          ReportData?.project_adder?.led_lighting,
          true
        )}
        {DynamicFn(
          "Meter Socket",
          ReportData?.project_adder?.meter_socket,
          true
        )}
        {DynamicFn(
          "Mpu Relocation",
          ReportData?.project_adder?.mpu_relocation,
          true
        )}
        {DynamicFn(
          "Online Monitoring",
          ReportData?.project_adder?.online_monitoring,
          true
        )}
        {DynamicFn("Solar Lip", ReportData?.project_adder?.solar_lip, true)}
        {DynamicFn("Sub Panel", ReportData?.project_adder?.sub_panel, true)}
        {DynamicFn(
          "Tree Trimming",
          ReportData?.project_adder?.tree_trimming,
          true
        )}
        {DynamicFn(
          "Trenching Concrete",
          ReportData?.project_adder?.trenching_concrete,
          true
        )}
        {DynamicFn(
          "Trenching Dirt",
          ReportData?.project_adder?.trenching_dirt,
          true
        )}
        {DynamicFn("warranty", ReportData?.project_adder?.warranty, true)}
      </Box>
    </>
  );
};

export default ReportsDetails;
