import {
  Paid,
  PaidOutlined,
  WatchLater,
  WatchLaterOutlined,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { getStatus } from "../../Redux/Slice/Status/StatusSlice";

const ProjectStatus = () => {
  const dispatch = useAppDispatch();
  const { Status } = useAppSelector((state) => state.statusFinance);

  console.log(
    Status?.data?.map((item: any) => item.finance_status.loan_amount)
  );

  useEffect(() => {
    dispatch(getStatus());
  }, []);
  return (
    <Container>
      <Typography variant="h4" mb={3}>
        Project Status
      </Typography>

      <Box display="flex" gap={4} flexWrap="wrap">
        {Status?.data?.map((items: any) => (
          <Box
            key={items.opportunity_id}
            sx={{ background: "#Fff", padding: "2rem", borderRadius: "1rem" }}
          >
            <Typography
              variant="h5"
              fontWeight={600}
              color="#777"
              textTransform="capitalize"
            >
              {items?.financial_name}
            </Typography>
            <Box display="flex" gap={3} mt={1}>
              {Object.entries(items?.finance_status)?.map((item: any) => (
                <Box
                  key={item.solutionable_id}
                  sx={{
                    borderRadius: "1rem",
                  }}
                >
                  <Box display="flex" alignItems="center" my={2}>
                    <Typography
                      display="flex"
                      alignItems="center"
                      mr={1}
                      fontWeight={600}
                      color="#999"
                    >
                      <PaidOutlined />
                      Loan Amount
                    </Typography>
                    <Typography fontWeight={600} color="#48c6a4">
                      {/* ${Math.ceil(Number(item?.loan_amount))} */}
                      {item?.loan_amount}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" my={2}>
                    <Typography
                      display="flex"
                      alignItems="center"
                      mr={1}
                      fontWeight={600}
                      color="#999"
                    >
                      <WatchLaterOutlined />
                      Status
                    </Typography>
                    <Typography fontWeight={600} color="#48c6a4">
                      {item?.status}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ProjectStatus;
