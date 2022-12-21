import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { useGetSingleReportQuery } from "../../Redux/RTK/FinanceSlice";

const ReportsDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useGetSingleReportQuery(id);

  const ReportData = data?.data;

  const DynamicFn = (
    name: string,
    reqData: any,
    money?: boolean,
    currency?: "currency" | null
  ) => {
    if (reqData)
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#26495f15 ",
            borderRadius: 8,
            p: ".3rem",
            mb: 0.5,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.2rem",
              flex: "1",
              background: "#e3e3e3",
              padding: " .5rem 1rem",
              borderRadius: "2rem 0 0 2rem",
              color: "#26495f",
              fontWeight: "900",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontSize: "1.2rem",
              flex: "2",
              fontWeight: "700",
              background: "#e3e3e3",
              padding: " .5rem 1rem",
              borderRadius: " 0 2rem 2rem 0",
              color: "#26495f",
            }}
          >
            {money ? "$" : null}
            {reqData}
            {currency === "currency" ? "%" : null}
          </Typography>
        </Box>
      );
  };

  const AddOn = () => {
    const AllAddon = ReportData?.finance_addon?.map((item: any) => (
      <Box
        key={item?.id}
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "#26495f15 ",
          borderRadius: 8,
          p: ".3rem",
          mb: 0.5,
        }}
      >
        <Typography
          sx={{
            fontSize: "1.2rem",
            flex: "1",
            background: "#e3e3e3",
            padding: " .5rem 1rem",
            borderRadius: "2rem 0 0 2rem",
            color: "#26495f",
            fontWeight: "900",
          }}
        >
          {item?.name}
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
            flex: "2",
            fontWeight: "700",
            background: "#e3e3e3",
            padding: " .5rem 1rem",
            borderRadius: " 0 2rem 2rem 0",
            color: "#26495f",
          }}
        >
          {item?.total}
        </Typography>
      </Box>
    ));

    return AllAddon;
  };

  const AddOnCost = ReportData?.finance_addon?.reduce(
    (prev: any, next: any) => prev + next.total,
    0
  );

  const TotalAddrCost = () => {
    return (
      ReportData?.project_adder?.attic_run +
      ReportData?.project_adder?.bird_netting +
      ReportData?.project_adder?.de_rate +
      ReportData?.project_adder?.designated_plugs +
      ReportData?.project_adder?.ducting +
      ReportData?.project_adder?.energy_efficient +
      ReportData?.project_adder?.ev_charger +
      ReportData?.project_adder?.ev_mlo +
      ReportData?.project_adder?.led_lighting +
      ReportData?.project_adder?.meter_socket +
      ReportData?.project_adder?.mpu_relocation +
      ReportData?.project_adder?.online_monitoring +
      ReportData?.project_adder?.solar_lip +
      ReportData?.project_adder?.sub_panel +
      ReportData?.project_adder?.tree_trimming +
      ReportData?.project_adder?.trenching_concrete +
      ReportData?.project_adder?.trenching_dirt +
      ReportData?.project_adder?.warranty
    );
  };

  const TotalCostAmount = () => {
    return TotalAddrCost() + AddOnCost + ReportData?.solar_sys_total_cost;
  };

  const AccualRoyalitis = TotalCostAmount() - ReportData?.net_contract_amount;

  const Advanced = 1000;

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
          borderRadius: 8,
          mb: 2,
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Typography
          variant="h5"
          mb={3}
          sx={{
            borderRadius: "4rem",
            textAlign: "center",
            fontWeight: "900",
            border: "1px solid",
            padding: "0.5rem",
            background: "#26495f",
            color: "#fff",
          }}
        >
          Commission Sales{" "}
        </Typography>

        {DynamicFn(" Customer Name", ReportData?.customer_name)}
        {DynamicFn(" Address", ReportData?.customer_address)}
        {DynamicFn(" Sales Rep", ReportData?.sales_rep)}
        {DynamicFn("Terms of Argeement", ReportData?.ppw)}
        {DynamicFn("Finance Company", ReportData?.finance_company)}
        {DynamicFn("Dealars Fee", ReportData?.dealer_fee, false, "currency")}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: "#26495f15 ",
            borderRadius: 8,
            p: ".3rem",
            mb: 0.5,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.2rem",
              flex: "1",
              background: "#e3e3e3",
              padding: " .5rem 1rem",
              borderRadius: "2rem 0 0 2rem",
              color: "#26495f",
              fontWeight: "900",
            }}
          >
            Rate / Term
          </Typography>
          <Typography
            sx={{
              fontSize: "1.2rem",
              flex: "2",
              fontWeight: "700",
              background: "#e3e3e3",
              padding: " .5rem 1rem",
              borderRadius: " 0 2rem 2rem 0",
              color: "#26495f",
            }}
          >
            {ReportData?.rate} {ReportData?.term}
          </Typography>
        </Box>

        {DynamicFn(
          " Contract Gross Amount",
          ReportData?.contract_gross_amount,
          true
        )}

        {DynamicFn("Requested Royaltis", ReportData?.requested_royalties, true)}
        {DynamicFn(
          "Net Contract Amount",
          ReportData?.net_contract_amount,
          true
        )}
      </Box>

      {/* solar system  */}
      <Box
        sx={{
          background: "#fff ",
          p: 2,
          borderRadius: 8,
          mb: 2,
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Typography
          variant="h5"
          mb={3}
          sx={{
            borderRadius: "4rem",
            textAlign: "center",
            fontWeight: "900",
            border: "1px solid",
            padding: "0.5rem",
            background: "#26495f",
            color: "#fff",
          }}
        >
          Solar System
        </Typography>

        {DynamicFn("No of Panels", ReportData?.solar_sys_no_of_panels)}

        {DynamicFn("Wattage", ReportData?.solar_sys_wattage)}

        {DynamicFn("System Size", ReportData?.solar_sys_size)}

        {DynamicFn("Total Cost", ReportData?.solar_sys_total_cost)}
      </Box>

      {/* Roofing system  */}
      <Box
        sx={{
          background: "#fff ",
          p: 2,
          borderRadius: 8,
          mb: 2,
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Typography
          variant="h5"
          mb={3}
          sx={{
            borderRadius: "4rem",
            textAlign: "center",
            fontWeight: "900",
            border: "1px solid",
            padding: "0.5rem",
            background: "#26495f",
            color: "#fff",
          }}
        >
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
          borderRadius: 8,
          mb: 2,
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Typography
          variant="h5"
          mb={3}
          sx={{
            borderRadius: "4rem",
            textAlign: "center",
            fontWeight: "900",
            border: "1px solid",
            padding: "0.5rem",
            background: "#26495f",
            color: "#fff",
          }}
        >
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
        {DynamicFn("Total Adders Cost", TotalAddrCost(), true)}
      </Box>

      {/* Addon contract */}
      <Box
        sx={{
          background: "#fff ",
          p: 2,
          borderRadius: 8,
          mb: 2,
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Typography
          variant="h5"
          mb={3}
          sx={{
            borderRadius: "4rem",
            textAlign: "center",
            fontWeight: "900",
            border: "1px solid",
            padding: "0.5rem",
            background: "#26495f",
            color: "#fff",
          }}
        >
          Addon
        </Typography>
        {AddOn()}
        {DynamicFn("Addon Cost", AddOnCost, true)}
      </Box>

      {/* finanlce contract */}
      <Box
        sx={{
          background: "#fff ",
          p: 2,
          borderRadius: 8,
          mb: 2,
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <Typography
          variant="h5"
          mb={3}
          sx={{
            borderRadius: "4rem",
            textAlign: "center",
            fontWeight: "900",
            border: "1px solid",
            padding: "0.5rem",
            background: "#26495f",
            color: "#fff",
          }}
        >
          inital report finance
        </Typography>
        {DynamicFn(" Total Cost", TotalCostAmount(), true)}

        {DynamicFn("Accual Royalitis", Math.ceil(AccualRoyalitis), true)}
        {DynamicFn("Advance", Advanced, true)}
        {/* {DynamicFn("Net", ReportData?.requested_royalties, true)} */}
      </Box>
    </>
  );
};

export default ReportsDetails;