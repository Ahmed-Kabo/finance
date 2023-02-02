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
          background: "#26495f",
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
