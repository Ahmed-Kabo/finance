import { Mail } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckMail = () => {
  //   const navigate = useNavigate();
  //   const { forgot } = useSelector((state) => state.auth);

  //   useEffect(() => {
  //     if (!forgot) {
  //       navigate("/");
  //     }
  //   }, []);

  return (
    <Box
      sx={{
        width: "90%",
        margin: "3rem auto",
        border: "5px dashed #003bfb3b",
        fontSize: "2.5rem",
        padding: "1rem 2rem",
        color: "#666",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Please Check Your Email{" "}
      <Mail sx={{ marginLeft: "1rem", fontSize: "2.5rem" }} />
    </Box>
  );
};

export default CheckMail;
