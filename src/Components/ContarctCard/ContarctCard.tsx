import {
  AccountCircle,
  CorporateFare,
  DateRange,
  ErrorOutline,
  InsertLink,
  Mail,
  PhoneIphone,
  SolarPower,
} from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const ContractCard = ({ data }: any) => {
  return (
    <Box
      sx={{
        borderRadius: "1rem",
        boxShadow: " 0 0 12px 6px rgb(0 0 0 / 10%);",
        background: "#fff",
        padding: "1rem",
        transition: "all 0.3s",
        overflow: "hidden",
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
            variant="h5"
            textTransform="capitalize"
            fontWeight="600"
            color="#585858"
            display="flex"
            alignItems="center"
          >
            <CorporateFare sx={{ marginRight: 1, fontSize: "18px" }} />
            {data?.financial}
          </Typography>
          <Typography
            variant="h6"
            fontWeight={700}
            color="#0062ffc9"
            mb={1}
            display="flex"
            alignItems="center"
          >
            <SolarPower sx={{ marginRight: 1, fontSize: "18px" }} />{" "}
            {data?.service}
          </Typography>
          <Typography
            variant="body1"
            color="#777"
            mb={1}
            display="flex"
            alignItems="center"
          >
            <DateRange sx={{ marginRight: 1, fontSize: "18px" }} />{" "}
            {new Date(`${data?.date}`).toDateString()}
          </Typography>
          <a href={data?.pdf_path} target="_blank">
            <Button
              variant="outlined"
              startIcon={<InsertLink />}
              sx={{
                // background: "#d3d3d3",
                px: "1.2rem",
                borderRadius: ".6rem",
                my: 1,
              }}
            >
              Show PDF
            </Button>
          </a>
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
            ${Math.ceil(data?.cost)}
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography fontWeight={700} color="#7890ad" fontSize={18} mt={1}>
          Pm Data
        </Typography>
        {data?.pm_user ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            padding=".5rem 0"
            gap={2}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#46a5da",
                fontSize: ".9rem",
                flex: "1",
              }}
            >
              <AccountCircle sx={{ mr: ".5rem" }} /> {data?.pm_user?.name}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#46a5da",
                fontSize: ".9rem",
                flex: "1",
              }}
            >
              <PhoneIphone sx={{ mr: ".5rem" }} /> {data?.pm_user?.phone}{" "}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#46a5da",
                fontSize: ".9rem",
                flex: "2",
              }}
            >
              <Mail sx={{ mr: ".5rem" }} /> {data?.pm_user?.email}
            </Typography>
          </Box>
        ) : (
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#a64058",
              fontWeight: 700,
            }}
          >
            <ErrorOutline sx={{ mr: ".5rem" }} /> Not asigned to pm
          </Typography>
        )}
      </Box>

      <Box>
        <Typography fontWeight={700} color="#7890ad" fontSize={18} mt={1}>
          Seles Data
        </Typography>
        {data?.sales_user ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            padding=".5rem 0"
            gap={2}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#46a5da",
                fontSize: ".9rem",
                flex: "1",
              }}
            >
              <AccountCircle sx={{ mr: ".5rem" }} /> {data?.sales_user?.name}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#46a5da",
                fontSize: ".9rem",
                flex: "1",
              }}
            >
              <PhoneIphone sx={{ mr: ".5rem" }} /> {data?.sales_user?.phone}{" "}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#46a5da",
                fontSize: ".9rem",
                flex: "2",
              }}
            >
              <Mail sx={{ mr: ".5rem" }} /> {data?.sales_user?.email}
            </Typography>
          </Box>
        ) : (
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#a64058",
              fontWeight: 700,
            }}
          >
            <ErrorOutline sx={{ mr: ".5rem" }} /> Not asigned to pm
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ContractCard;
