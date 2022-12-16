import { AttachFile } from "@mui/icons-material";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { SyntheticEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ModalConatiner from "../../Components/Modal/Modal";
import PopupSunlight from "../../Components/popupSunlight/popupSunlightTicket";
import UsersCard from "../../Components/TicketDetails/UsersCard";
import TimeLine from "../../Components/TimeLine/TimeLine";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { getTicketsDetails } from "../../Redux/Slice/Tickets/TicketsSlics";

const TicketDetails = () => {
  const params = useParams();
  const ID = params.id as string;
  const dispatch = useAppDispatch();
  const { singleTicket } = useAppSelector((state) => state.tickets);
  const [value, setValue] = useState(100);
  const [ticketId, setTickeId] = useState<string | null>(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const UtilityBill = singleTicket?.data?.utility_bill;
  const Contract = singleTicket?.data?.contract;
  const SolutionPdf = singleTicket?.data?.solution_pdf;
  const Plan = singleTicket?.data?.plan;
  const Finance = singleTicket?.data?.finance;
  const PmUsers = singleTicket?.data?.pm_user;
  const SalseUser = singleTicket?.data?.sales_user;

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const UtilityTap = UtilityBill?.map((item: any) => {
    return (
      <Box key={item} my={5} display="flex" gap={3}>
        <img key={item} src={item} alt="utility" width={350} />
      </Box>
    );
  });

  const ContractTap = Contract?.map((item: any) => {
    return (
      <Box key={item} my={5} display="flex" gap={3}>
        <Button
          startIcon={<AttachFile />}
          variant="contained"
          sx={{ px: 6, py: 1.6, borderRadius: ".8rem", bgColor: "#000" }}
        >
          <a href={item} target="_blank">
            Show PDF
          </a>
        </Button>
      </Box>
    );
  });

  const SolutionPDF = () => {
    return (
      <Button
        startIcon={<AttachFile />}
        variant="contained"
        sx={{ px: 6, py: 1.6, borderRadius: ".8rem", bgColor: "#000", my: 5 }}
      >
        <a href={SolutionPdf} target="_blank">
          Show PDF
        </a>
      </Button>
    );
  };

  const PlaneTap = Plan?.map((item: any) => {
    return (
      <Box key={item} my={5} display="flex" gap={3}>
        <Button
          startIcon={<AttachFile />}
          variant="contained"
          sx={{ px: 6, py: 1.6, borderRadius: ".8rem", bgColor: "#000" }}
        >
          <a href={item} target="_blank">
            Show PDF
          </a>
        </Button>
      </Box>
    );
  });

  const FinancialTap = () => {
    return (
      <Box>
        <Typography fontSize={30} fontWeight={700} color="#777" my={2}>
          Status : {Finance?.financial}
        </Typography>

        {Finance?.financial_name === "Cache" && (
          <Box
            sx={{
              fontSize: 25,
              color: "#888",
              fontWeight: 700,
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            Price :
            <Typography fontSize={25} color="#0062ff" fontWeight={900}>
              ${Finance?.finance_status?.loan_amount}
            </Typography>
          </Box>
        )}

        {Finance?.financial_name === "goodleap" &&
          Finance?.finance_status?.map((item: any) => (
            <Box>
              <Typography color="#d3955f" fontWeight={700}>
                {item?.status}
              </Typography>
              <Box
                sx={{
                  fontSize: 25,
                  color: "#888",
                  fontWeight: 700,
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                Price :
                <Typography fontSize={25} color="#0062ff" fontWeight={900}>
                  ${item?.loan_amount}
                </Typography>
              </Box>
            </Box>
          ))}

        {Finance?.financial_name === "sunlight" &&
          Finance?.project_ids?.map((item: any) => (
            <Box
              key={item.project_id}
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
                my: 3,
              }}
            >
              <Box
                sx={{
                  fontSize: 25,
                  color: "#888",
                  fontWeight: 700,
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                Price :
                <Typography fontSize={25} color="#0062ff" fontWeight={900}>
                  ${Math.ceil(item?.loan_amount)}
                </Typography>
              </Box>
              <Button
                onClick={() => {
                  setTickeId(item?.project_id);
                  handleOpen();
                }}
                variant="contained"
                sx={{
                  background: "#121212",
                  p: ".5rem 1rem",
                  borderRadius: "1rem",
                }}
              >
                Show Finance Status
              </Button>
            </Box>
          ))}
      </Box>
    );
  };
  useEffect(() => {
    dispatch(getTicketsDetails(ID));
  }, [ID]);

  if (!singleTicket) {
    return <h3>Lodaing... </h3>;
  }
  return (
    <>
      <Container>
        <Typography variant="h4" mb={5}>
          Ticket Details
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            maxWidth: { xs: 320, sm: 480, md: "100%" },
            bgcolor: "#eaeaea",
            padding: "1rem 0",
            borderRadius: "1rem",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            aria-label="visible arrows tabs example"
          >
            <Tab label="Utility Bill" value={100} />
            <Tab label="Solution " value={300} />
            <Tab label="Contract" value={200} />
            <Tab label="Finance" value={500} />
            <Tab label="Time line " value={400} />
            <Tab label="Support" value={600} />
            {/* <Tab label="Finance" value={700} /> */}
          </Tabs>
        </Box>

        {value === 100 && UtilityTap}
        {value === 200 && ContractTap}
        {value === 300 && SolutionPDF()}
        {value === 400 && <TimeLine />}
        {value === 500 && FinancialTap()}
        {value === 600 && <UsersCard pmUser={PmUsers} salseUser={SalseUser} />}
      </Container>

      <ModalConatiner open={open} onClose={handleClose}>
        <PopupSunlight TickrtId={ticketId} />
      </ModalConatiner>
    </>
  );
};

export default TicketDetails;
