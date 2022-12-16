import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const UsersCard = ({ pmUser, salseUser }: any) => {
  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      <Box
        sx={{
          paddingBlock: "1rem",
          borderRadius: "1rem",
          background: "#fff",
          my: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            padding: ".5rem 2rem",
            fontWeight: "700",
            color: "#999",
          }}
        >
          Pm User
        </Typography>
        {pmUser ? (
          <>
            <Box
              sx={{
                display: "flex",
                background: "#fafafabe",
                p: ".4rem 2rem ",
              }}
            >
              <Typography
                fontSize={18}
                textTransform={"capitalize"}
                fontWeight={700}
                mr={1}
                color="#555555"
              >
                name
              </Typography>
              <Typography fontSize={18} fontWeight={700} color="#6d79ad">
                {pmUser?.name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                background: "#fafafabe",
                p: ".4rem 2rem ",
              }}
            >
              <Typography
                fontSize={18}
                textTransform={"capitalize"}
                fontWeight={700}
                mr={1}
                color="#555555"
              >
                email
              </Typography>
              <Typography fontSize={18} fontWeight={700} color="#6d79ad">
                {pmUser?.email}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                background: "#fafafabe",
                p: ".4rem 2rem ",
              }}
            >
              <Typography
                fontSize={18}
                textTransform={"capitalize"}
                fontWeight={700}
                mr={1}
                color="#555555"
              >
                phone
              </Typography>
              <Typography fontSize={18} fontWeight={700} color="#6d79ad">
                {pmUser?.phone}
              </Typography>
            </Box>
          </>
        ) : (
          <Typography>This Ticket not Asigned to Pm User </Typography>
        )}
      </Box>

      <Box
        sx={{
          paddingBlock: "1rem",
          borderRadius: "1rem",
          background: "#fff",
          my: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            padding: ".5rem 2rem",
            fontWeight: "700",
            color: "#999",
          }}
        >
          Sales Rep
        </Typography>
        <Box
          sx={{ display: "flex", background: "#fafafabe", p: ".4rem 2rem " }}
        >
          <Typography
            fontSize={18}
            textTransform={"capitalize"}
            fontWeight={700}
            mr={1}
            color="#555555"
          >
            name
          </Typography>
          <Typography fontSize={18} fontWeight={700} color="#6d79ad">
            {salseUser?.name}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", background: "#fafafabe", p: ".4rem 2rem " }}
        >
          <Typography
            fontSize={18}
            textTransform={"capitalize"}
            fontWeight={700}
            mr={1}
            color="#555555"
          >
            email
          </Typography>
          <Typography fontSize={18} fontWeight={700} color="#6d79ad">
            {salseUser?.email}
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", background: "#fafafabe", p: ".4rem 2rem " }}
        >
          <Typography
            fontSize={18}
            textTransform={"capitalize"}
            fontWeight={700}
            mr={1}
            color="#555555"
          >
            phone
          </Typography>
          <Typography fontSize={18} fontWeight={700} color="#6d79ad">
            {salseUser?.phone}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UsersCard;
