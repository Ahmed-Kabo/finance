import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import InitialReport from "../../Components/InitialReport/InitialReport";

const ReportsDetails = () => {
  const [value, setValue] = useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          sx={{
            display: "flex",
            px: 2,
            mb: 2,
            ".MuiTab-root": {
              maxWidth: "50%",
            },
            ".Mui-selected": {
              background: "#26495f",
              color: "#fff",
            },
            ".MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab
            sx={{
              flex: 1,

              background: "#e1e1e1",
              fontWeight: "bold",
              fontSize: 20,
              p: 2,
            }}
            value="one"
            label="Inital Report"
          />
          <Tab
            sx={{
              flex: 1,
              background: "#e1e1e1",
              fontWeight: "bold",
              fontSize: 20,
            }}
            value="two"
            label="Final Report"
          />
        </Tabs>
      </Box>

      {value === "one" && <InitialReport />}
    </>
  );
};

export default ReportsDetails;
