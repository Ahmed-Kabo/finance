import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

type Tcard = {
  title: string;
  children: ReactNode;
};

export const HandleCardDetails = ({ title, children }: Tcard) => {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 8,
        mb: 2,
      }}
    >
      <Typography
        variant="h5"
        mb={3}
        sx={{
          textAlign: "center",
          fontWeight: "700",
          border: "1px solid",
          padding: "0.5rem",
          background: "#306382e8",
          color: "#fff",
          top: 10,
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export const DynamicFn = (
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

          p: " .5rem .5rem",
          mb: 0.5,
        }}
      >
        <Typography
          sx={{
            flex: "1",
            borderRadius: "2rem 0 0 2rem",
            color: "#26495f",
            fontWeight: "600",
            textTransform: "capitalize",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            flex: "1",
            fontWeight: "400",
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
