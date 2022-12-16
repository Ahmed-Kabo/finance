import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { getTicketsDetailsSunlight } from "../../Redux/Slice/Tickets/TicketsSlics";

const PopupSunlight = ({ TickrtId }: any) => {
  const dispatch = useAppDispatch();
  const { singleTicketSunlight, isLodaing } = useAppSelector(
    (state) => state.tickets
  );

  const Data = singleTicketSunlight?.data?.projects;

  useEffect(() => {
    dispatch(getTicketsDetailsSunlight(TickrtId));
  }, [dispatch, TickrtId]);

  if (isLodaing) {
    return <Typography variant="h4"> Loading ....</Typography>;
  }
  return Data?.map((item: any) => (
    <Box key={item.id}>
      <Typography variant="h5" textAlign="center" my={4} fontWeight={700}>
        {item?.id}{" "}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          my: 2,
          p: 1,
          borderRadius: ".5rem",
          background: "#f3f3f3",
        }}
      >
        <Typography fontSize={20} fontWeight={600} color="#777">
          Status :
        </Typography>
        <Typography fontWeight={700} color="#434343" fontSize={20}>
          {item?.stage}{" "}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          my: 2,
          p: 1,
          borderRadius: ".5rem",
          background: "#f3f3f3",
        }}
      >
        <Typography fontSize={20} fontWeight={600} color="#777">
          Approved For Payment :
        </Typography>
        <Typography fontWeight={700} color="#434343" fontSize={20}>
          {`${Boolean(item?.approvedForPayments)}`}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          my: 2,
          p: 1,
          borderRadius: ".5rem",
          background: "#f3f3f3",
        }}
      >
        <Typography fontSize={20} fontWeight={600} color="#777">
          ACH :
        </Typography>
        <Typography fontWeight={700} color="#434343" fontSize={20}>
          {`${Boolean(item?.isACH)}`}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          my: 2,
          p: 1,
          borderRadius: ".5rem",
          background: "#f3f3f3",
        }}
      >
        <Typography fontSize={20} fontWeight={600} color="#777">
          Credit Authorized :
        </Typography>
        <Typography fontWeight={700} color="#434343" fontSize={20}>
          {`${Boolean(item?.isCreditAuthorized)}`}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          my: 2,
          p: 1,
          borderRadius: ".5rem",
          background: "#f3f3f3",
        }}
      >
        <Typography fontSize={20} fontWeight={600} color="#777">
          Requested LoanAmount :
        </Typography>
        <Typography fontWeight={700} color="#434343" fontSize={20}>
          {item?.requestedLoanAmount}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          my: 2,
          p: 1,
          borderRadius: ".5rem",
          background: "#f3f3f3",
        }}
      >
        <Typography fontSize={20} fontWeight={600} color="#777">
          Self Product Min LoanAmount :
        </Typography>
        <Typography fontWeight={700} color="#434343" fontSize={20}>
          {item?.slfProductMinLoanAmount}
        </Typography>
      </Box>
    </Box>
  ));
};

export default PopupSunlight;
